import supabase from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { title, description } = await req.json();

    // 1. Insert the new module into the modules table
    const { data: module, error: moduleError } = await supabase
      .from("modules")
      .insert([{ title, description }])
      .select()
      .single();

    if (moduleError || !module) {
      return NextResponse.json({ success: false, error: moduleError?.message || "Module insert failed" }, { status: 400 });
    }

    // 2. Fetch all interns
    const { data: users, error: usersError } = await supabase
      .from("careers_applications")
      .select("id")
      .eq("role", "intern");

    if (usersError || !users) {
      return NextResponse.json({ success: false, error: usersError?.message || "No interns found" }, { status: 400 });
    }

    // 3. Insert progress for each intern for this module
    const progressRows = users.map((user: any) => ({
      application_id: user.id,
      module_id: module.id,
      module_name: module.title,
      is_completed: false,
      created_at: new Date().toISOString(),
    }));

    const { error: progressError } = await supabase
      .from("intern_learning_progress")
      .insert(progressRows);

    if (progressError) {
      return NextResponse.json({ success: false, error: progressError.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, module }, { status: 200 });
  } catch (err: any) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}