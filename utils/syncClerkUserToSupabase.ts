import { currentUser } from "@clerk/nextjs/server";
import supabase from "@/lib/supabase";

export async function syncClerkUserToSupabase() {
  const user = await currentUser();
  if (!user) return;

  const name = user.firstName && user.lastName
    ? `${user.firstName} ${user.lastName}`
    : user.username || user.emailAddresses?.[0]?.emailAddress || user.id;

  const email = user.emailAddresses?.[0]?.emailAddress || "";

  await supabase.from("users").upsert({
    id: user.id,
    name,
    email,
  });
}
