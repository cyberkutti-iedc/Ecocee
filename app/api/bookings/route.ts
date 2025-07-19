import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create a fresh Supabase client (not relying on shared headers)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!  // Use service role key if this needs to be admin-level
);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone,
      service,
      description,
      area,
      userType,
      how
    } = data;

    const { error } = await supabase.from('bookings').insert({
      name,
      email,
      phone,
      service,
      description,
      area,
      user_type: userType,
      how_did_you_know: how,
      status: 'pending',  // Optional default value
    });

    if (error) {
      console.error('Supabase Insert Error:', error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('Unhandled API Error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error.' },
      { status: 500 }
    );
  }
}
