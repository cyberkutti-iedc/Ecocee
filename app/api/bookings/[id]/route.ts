import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!  // Use service role key if this needs to be admin-level
);

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const { error } = await supabase.from('bookings').delete().eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const { status } = await req.json();

  const { error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
