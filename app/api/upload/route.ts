import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuth } from '@clerk/nextjs/server';

// Validate environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is required');
}

if (!supabaseKey) {
  throw new Error('SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY is required');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// POST - Upload image to Supabase Storage (admin only)
export async function POST(req: NextRequest) {
  let sessionClaims: any = undefined;
  try {
    sessionClaims = getAuth(req).sessionClaims;
  } catch (err) {
    return NextResponse.json({ error: "Authentication error" }, { status: 401 });
  }

  if (!sessionClaims?.metadata?.status || sessionClaims.metadata.status !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!(file instanceof File)) {
      return NextResponse.json({ success: false, message: 'No valid file provided' }, { status: 400 });
    }

    const folder = (formData.get('folder') as string) || 'projects';

    // Allowed MIME types for images and videos
    const allowedTypes = [
      'image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif',
      'video/mp4', 'video/webm', 'video/quicktime'
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.'
      }, { status: 400 });
    }

    // Max size 50MB (50 * 1024 * 1024 bytes)
    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json({
        success: false,
        message: 'File size too large. Maximum size is 50MB.'
      }, { status: 400 });
    }

    // Generate unique filename
    const fileExtension = file.name.split('.').pop() ?? (file.type.startsWith('video/') ? 'mp4' : 'jpg');
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExtension}`;

    // Convert file to Uint8Array buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    // Upload to Supabase Storage bucket (ensure 'projects' bucket exists)
    // Try upload; if bucket missing, attempt to create it and retry once
    let uploadResult = await supabase.storage
      .from('projects')
      .upload(fileName, buffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false
      });

    if (uploadResult.error) {
      try {
        // Ensure bucket exists and is public
        // @ts-ignore - createBucket available with service role key
        await supabase.storage.createBucket('projects', { public: true });
        const retry = await supabase.storage
          .from('projects')
          .upload(fileName, buffer, {
            contentType: file.type,
            cacheControl: '3600',
            upsert: false
          });
        uploadResult = retry;
      } catch (bucketErr) {
        // ignore bucket create errors (may already exist)
      }
    }

    if (uploadResult.error) {
      console.error('Storage upload error:', uploadResult.error);
      return NextResponse.json({ success: false, message: uploadResult.error.message }, { status: 500 });
    }

    // Check if data exists before accessing it
    if (!uploadResult.data) {
      return NextResponse.json({ success: false, message: 'Upload failed: no data returned' }, { status: 500 });
    }

    // Get public URL (synchronous)
    const { data: publicUrlData } = supabase.storage
      .from('projects')
      .getPublicUrl(uploadResult.data.path);
    const publicUrl = publicUrlData.publicUrl;

    return NextResponse.json({
      success: true,
      data: {
        url: publicUrl,
        path: uploadResult.data.path,
        fileName
      }
    });
  } catch (err) {
    console.error('Upload API error:', err);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE - Delete image from Supabase Storage (admin only)
export async function DELETE(req: NextRequest) {
  let sessionClaims: any = undefined;
  try {
    sessionClaims = getAuth(req).sessionClaims;
  } catch (err) {
    return NextResponse.json({ error: "Authentication error" }, { status: 401 });
  }

  if (!sessionClaims?.metadata?.status || sessionClaims.metadata.status !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get('path');
    const folder = searchParams.get('folder') || undefined;

    if (!path) {
      return NextResponse.json({ success: false, message: 'No file path provided' }, { status: 400 });
    }

    // If a folder is provided and path ends with '/', delete all files in that folder
    if (folder && path?.endsWith('/')) {
      const { data: list, error: listErr } = await supabase.storage
        .from('projects')
        .list(folder, { limit: 100, offset: 0, sortBy: { column: 'name', order: 'asc' } });
      if (listErr) {
        console.error('List folder error:', listErr);
        return NextResponse.json({ success: false, message: listErr.message }, { status: 500 });
      }
      const filesToRemove = (list || []).map(f => `${folder}/${f.name}`);
      if (filesToRemove.length) {
        const { error: removeErr } = await supabase.storage.from('projects').remove(filesToRemove);
        if (removeErr) {
          console.error('Batch remove error:', removeErr);
          return NextResponse.json({ success: false, message: removeErr.message }, { status: 500 });
        }
      }
      return NextResponse.json({ success: true, message: 'Folder cleared successfully' });
    }

    const { error } = await supabase.storage
      .from('projects')
      .remove([path]);

    if (error) {
      console.error('Storage delete error:', error);
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'File deleted successfully' });
  } catch (err) {
    console.error('Delete API error:', err);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}