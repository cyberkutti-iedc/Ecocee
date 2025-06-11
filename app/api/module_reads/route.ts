import supabase from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { sessionClaims } = await auth();
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
    // Delete all module_reads for this module_id using your DB client
    // await db.module_reads.deleteMany({ where: { module_id } });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Failed to delete module_reads" }), { status: 500 });
  }
}
