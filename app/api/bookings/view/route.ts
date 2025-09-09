import { getAuth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function isValidUUID(id: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
}

export async function GET(req: NextRequest) {
  try {
    const { sessionClaims } = getAuth(req);
    if (!sessionClaims) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

    const userStatus = sessionClaims?.metadata?.status;
    if (userStatus !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    let query = supabase.from('bookings').select(`id, name, email, phone, service, description, area, user_type, how_did_you_know, status, created_at, updated_at, clerk_user_id`).order('created_at', { ascending: false });
    if (id) {
      if (!isValidUUID(id)) {
        return NextResponse.json({ error: 'Invalid UUID format' }, { status: 400 });
      }
      query = supabase.from('bookings').select(`id, name, email, phone, service, description, area, user_type, how_did_you_know, status, created_at, updated_at, clerk_user_id`).eq('id', id);
    }

    const { data, error } = await query;
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Server error', details: err?.message || String(err) },
      { status: 500 }
    );
  }
}
