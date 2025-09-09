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

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body || typeof body.status !== 'string') {
    return NextResponse.json({ error: 'Missing or invalid status field' }, { status: 400 });
  }
console.log('PATCH body:', body);
  // Check if booking exists before updating
  const { data: booking, error: fetchError } = await supabase.from('bookings').select('id').eq('id', id).single();
  if (fetchError || !booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  }
console.log('PATCH body:', body);
  // Update status
  const { error } = await supabase.from('bookings').update({ status: body.status }).eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
console.log('PATCH body:', body);
  return NextResponse.json({ success: true, message: 'Booking status updated', id, status: body.status });

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