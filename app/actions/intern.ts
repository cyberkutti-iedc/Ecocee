// actions/intern.ts
"use server";

import { auth } from "@clerk/nextjs/server";
import supabaseWithClerk from "@/lib/supabase";

export async function getCareersForAdmin() {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.status !== "admin") {
    throw new Error("Unauthorized access");
  }

  const supabase = supabaseWithClerk;

  const { data, error } = await supabase
    .from("careers_applications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}




