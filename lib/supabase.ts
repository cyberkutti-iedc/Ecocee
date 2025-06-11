import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    accessToken: async () => {
      const { getToken } = await auth();
      return getToken();
    }
  }
);

export default supabase;

