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

// ✅ GET a single booking
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { sessionClaims } = getAuth(req);
    if (!sessionClaims || sessionClaims?.metadata?.status !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = params;
    if (!isValidUUID(id)) return NextResponse.json({ error: 'Invalid UUID format' }, { status: 400 });

    const { data, error } = await supabase.from('bookings').select('*').eq('id', id).single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: 'Server error', details: err?.message }, { status: 500 });
  }
}

// ✅ PATCH to update booking
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { sessionClaims } = getAuth(req);
    if (!sessionClaims || sessionClaims?.metadata?.status !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = params;
    if (!isValidUUID(id)) return NextResponse.json({ error: 'Invalid UUID format' }, { status: 400 });

    const body = await req.json(); // expects { status?: 'approved' | 'rejected' | 'pending', ...other fields if needed }

    const { error } = await supabase.from('bookings').update(body).eq('id', id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ success: true, message: 'Booking updated' });
  } catch (err: any) {
    return NextResponse.json({ error: 'Server error', details: err?.message }, { status: 500 });
  }
}

// ✅ DELETE a booking
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { sessionClaims } = getAuth(req);
    if (!sessionClaims || sessionClaims?.metadata?.status !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = params;
    if (!isValidUUID(id)) return NextResponse.json({ error: 'Invalid UUID format' }, { status: 400 });

    const { error } = await supabase.from('bookings').delete().eq('id', id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ success: true, message: 'Booking deleted' });
  } catch (err: any) {
    return NextResponse.json({ error: 'Server error', details: err?.message }, { status: 500 });
  }
}
