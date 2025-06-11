import supabase from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  const { sessionClaims } = getAuth(req);

  // Allow admin, intern, and moderator to view modules
  const status = sessionClaims?.metadata?.status;
  const userId = sessionClaims?.sub;

  if (status === "admin" || status === "moderator") {
    const { data: modules, error: modulesError } = await supabase
      .from("modules")
      .select("*")
      .order("created_at", { ascending: false });

    const { data: reads, error: readsError } = await supabase
      .from("module_reads")
      .select("*");

    // Try to join with a local users table if you have one
    let users: Record<string, { name: string; email: string }> = {};
    if (reads && reads.length > 0) {
      const userIds = Array.from(new Set(reads.map((r: any) => r.user_id))).filter(Boolean);
      // If you have a users table, fetch user info
      if (userIds.length > 0) {
        const { data: userRows } = await supabase
          .from("users")
          .select("id,name,email")
          .in("id", userIds);
        userRows?.forEach((u: any) => {
          users[u.id] = { name: u.name || u.email || u.id, email: u.email || "" };
        });
      }
    }

    if (modulesError || readsError) {
      return NextResponse.json({
        error: modulesError?.message || readsError?.message,
      }, { status: 500 });
    }

    return NextResponse.json({ modules, reads, users });
  }

  // If intern, return only modules (no read info for others)
  if (status === "intern") {
    const { data, error } = await supabase
      .from("modules")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
}

export async function POST(req: NextRequest) {
  const { sessionClaims } = getAuth(req);
  if (sessionClaims?.metadata?.status !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  try {
    const body = await req.json();
    const { title, description, link } = body;
    if (!title || !description) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const { data, error } = await supabase
      .from("modules")
      .insert([{ title, description, link }])
      .select("*")
      .single();
    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("API POST /api/modules error:", err);
    return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { sessionClaims } = getAuth(req);
  const status = sessionClaims?.metadata?.status;
  const userId = sessionClaims?.sub; // Clerk user id
  const body = await req.json();
  const { id, title, description, link, read, read_at } = body;

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  // Admin: can update all fields
  if (status === "admin") {
    if (!title || !description) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const { data, error } = await supabase
      .from("modules")
      .update({ title, description, link })
      .eq("id", id)
      .select("*")
      .single();
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
  }

  // Intern/moderator: should update read status in a separate table for per-user tracking
  if ((status === "intern" || status === "moderator") && userId) {
    if (typeof read !== "boolean" || !read_at) {
      return NextResponse.json({ error: "Missing read or read_at" }, { status: 400 });
    }
    try {
      // Upsert into module_reads table
      // The table must have a UNIQUE constraint on (module_id, user_id)
      const { data, error } = await supabase
        .from("module_reads")
        .upsert(
          { module_id: id, user_id: userId, read, read_at },
          { onConflict: "module_id,user_id" }
        )
        .select("*")
        .single();
      if (error) {
        console.error("Supabase upsert error:", error);
        return NextResponse.json({
          error: error.message +
            ". You must add a UNIQUE constraint on (module_id, user_id) in the module_reads table.",
        }, { status: 500 });
      }
      return NextResponse.json(data);
    } catch (err: any) {
      console.error("API PUT /api/modules error:", err);
      return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
    }
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
}

export async function DELETE(req: NextRequest) {
  const { sessionClaims } = getAuth(req);
  if (sessionClaims?.metadata?.status !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  const body = await req.json();
  const { id } = body;
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const { error } = await supabase
    .from("modules")
    .delete()
    .eq("id", id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
