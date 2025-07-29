import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuth, clerkClient } from '@clerk/nextjs/server'
import {  useUser } from '@clerk/nextjs';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    // ✅ 1. Get user ID from Clerk
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    // ✅ 2. Fetch user email
  
    const { user } = useUser()
    
const userEmail = user?.emailAddresses?.[0]?.emailAddress; 
    // ✅ 3. Get booking data from body
    const data = await req.json();
    const {
      name, phone, service, description, area, userType, how
    } = data;

    // ✅ 4. Insert into Supabase
    const { error } = await supabase.from('bookings').insert({
      name,
      email: userEmail,
      phone,
      service,
      description,
      area,
      user_type: userType,
      how_did_you_know: how,
      clerk_user_id: userId,
      status: 'pending',
    });

    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
