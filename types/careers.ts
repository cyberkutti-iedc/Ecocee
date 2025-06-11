// types/careers.ts
export interface CareerApplication {
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    resume_url?: string | null;
    cover_letter?: string | null;
    linkedin_profile?: string | null;
    github_profile?: string | null;
    portfolio?: string | null;
  }
  