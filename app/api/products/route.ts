import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuth } from '@clerk/nextjs/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const { sessionClaims } = getAuth(request);
    if (!sessionClaims || sessionClaims.metadata?.status !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { sessionClaims } = getAuth(request);
    if (!sessionClaims || sessionClaims.metadata?.status !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const body = await request.json();
    const { data, error } = await supabase
      .from('products')
      .insert([{
        title: body.title,
        description: body.description,
        header_image: body.headerImage,
        images: body.images || [],
        video: body.video || null,
        tech_stack: body.techStack || [],
        category: body.category,
        featured: body.featured || false
      }])
      .select();

    if (error) throw error;
    return NextResponse.json(data[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { sessionClaims } = getAuth(request);
    if (!sessionClaims || sessionClaims.metadata?.status !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();

    const { data, error } = await supabase
      .from('products')
      .update({
        title: body.title,
        description: body.description,
        header_image: body.headerImage,
        images: body.images || [],
        video: body.video || null,
        tech_stack: body.techStack || [],
        category: body.category,
        featured: body.featured || false,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select();

    if (error) throw error;
    return NextResponse.json(data[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}
// Add to existing API route

// PATCH - Update featured status
export async function PATCH(request: NextRequest) {
  try {
    const { sessionClaims } = getAuth(request);
    if (!sessionClaims || sessionClaims.metadata?.status !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    const body = await request.json();
    
    const { data, error } = await supabase
      .from('products')
      .update({ 
        featured: body.featured,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

// DELETE - Bulk delete products
export async function DELETE(request: NextRequest) {
  try {
    const { sessionClaims } = getAuth(request);
    if (!sessionClaims || sessionClaims.metadata?.status !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    // Handle bulk delete
    if (request.headers.get('content-type')?.includes('application/json')) {
      const { ids } = await request.json();
      
      if (!ids || !Array.isArray(ids) || ids.length === 0) {
        return NextResponse.json({ error: "Product IDs required" }, { status: 400 });
      }

      const { error } = await supabase
        .from('products')
        .delete()
        .in('id', ids);

      if (error) throw error;
      return NextResponse.json({ success: true, message: `${ids.length} products deleted` });
    }
    
    // Handle single delete
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}