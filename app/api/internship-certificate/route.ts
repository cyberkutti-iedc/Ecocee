import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const unique_number = searchParams.get("unique_number");

  if (unique_number) {
    const normalized = unique_number.trim().toUpperCase();

    const { data, error } = await supabase
      .from("internship_certificates")
      .select("*")
      .eq("unique_number", normalized) // match normalized
      .single();

    if (error && error.code !== "PGRST116")
      return NextResponse.json({ error: error.message }, { status: 500 });

    if (!data)
      return NextResponse.json({ error: "Certificate not found", valid: false }, { status: 404 });

    return NextResponse.json(data);
  }

  const { data, error } = await supabase
    .from("internship_certificates")
    .select("*")
    .order("issued_on", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ certificates: data });
}


export async function POST(req: NextRequest) {
  const body = await req.json();
  const { full_name, batch, issued_on, unique_number, specification } = body;
  if (!full_name || !batch || !issued_on || !unique_number || !specification) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }
  const { error } = await supabase
    .from("internship_certificates")
    .insert([{ full_name, batch, issued_on, unique_number, specification }]);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const body = await req.json();
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
  const { full_name, batch, issued_on, unique_number, specification } = body;
  const { error } = await supabase
    .from("internship_certificates")
    .update({ full_name, batch, issued_on, unique_number, specification })
    .eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
  const { error } = await supabase
    .from("internship_certificates")
    .delete()
    .eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
