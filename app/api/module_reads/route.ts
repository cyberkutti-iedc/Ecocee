import supabase from "@/lib/supabase";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { sessionClaims } = getAuth(req); // ✅ FIXED
  const userId = sessionClaims?.sub;

  // Only allow authenticated users
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  // Get user_id from query or use session user
  const { searchParams } = new URL(req.url);
  const queryUserId = searchParams.get("user_id");

  let query = supabase.from("module_reads").select("*");
  if (queryUserId) {
    query = query.eq("user_id", queryUserId);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function DELETE(req: Request) {
  try {
    const { module_id } = await req.json();
    const { error } = await supabase
      .from("module_reads")
      .delete()
      .eq("module_id", module_id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Failed to delete module_reads" }, { status: 500 });
  }
}
