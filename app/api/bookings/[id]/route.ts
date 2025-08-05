// app/api/bookings/[id]/route.ts
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

function extractIdFromUrl(req: NextRequest): string | null {
  const id = req.nextUrl.pathname.split('/').pop();
  return id && isValidUUID(id) ? id : null;
}

// ✅ GET a single booking
export async function GET(req: NextRequest) {
  const id = extractIdFromUrl(req);
  if (!id) return NextResponse.json({ error: 'Invalid UUID format' }, { status: 400 });

  const { sessionClaims } = getAuth(req);
  if (!sessionClaims || sessionClaims?.metadata?.status !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const { data, error } = await supabase.from('bookings').select('*').eq('id', id).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}

// ✅ PATCH to update booking
export async function PATCH(req: NextRequest) {
  const id = extractIdFromUrl(req);
  if (!id) return NextResponse.json({ error: 'Invalid UUID format' }, { status: 400 });

  const { sessionClaims } = getAuth(req);
  if (!sessionClaims || sessionClaims?.metadata?.status !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const body = await req.json();
  const { error } = await supabase.from('bookings').update(body).eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true, message: 'Booking updated' });
}

// ✅ DELETE a booking
export async function DELETE(req: NextRequest) {
  const id = extractIdFromUrl(req);
  if (!id) return NextResponse.json({ error: 'Invalid UUID format' }, { status: 400 });

  const { sessionClaims } = getAuth(req);
  if (!sessionClaims || sessionClaims?.metadata?.status !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const { error } = await supabase.from('bookings').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true, message: 'Booking deleted' });
}
