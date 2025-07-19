
import { getAuth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';


// Create a fresh Supabase client (not relying on shared headers)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!  // Use service role key if this needs to be admin-level
);


export async function GET(req: NextRequest) {
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
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 });
  }
}