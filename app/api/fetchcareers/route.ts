import supabase from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { sessionClaims } = await auth();
  
    if (sessionClaims?.metadata?.status !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }
  
    const { data, error } = await supabase
      .from("careers_applications")
      .select("*")
      .order("created_at", { ascending: false });
  
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  
    return NextResponse.json(data);
  }