import supabase from "@/lib/supabase";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

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
      .from("careers_applications")
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
