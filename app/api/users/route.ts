import supabase from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// GET /api/users - returns all users with id, name, email
export async function GET(req: NextRequest) {
  const { data, error } = await supabase
    .from("users")
    .select("id, name, email");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST /api/users - upsert a user (id, name, email)
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { id, name, email } = body;
  if (!id || !email) {
    return NextResponse.json({ error: "Missing id or email" }, { status: 400 });
  }
  const { error } = await supabase
    .from("users")
    .upsert({ id, name, email });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
