# Ecocee Codebase Instructions for AI Agents

## Project Overview

**Ecocee** is a Next.js 15 web application for an embedded systems & IoT solutions company. It features:
- Public marketing site with hero, features, careers, and ideas sections
- Admin dashboard for managing teams, bookings, careers, products, and modules
- Role-based access control (admin, moderator, intern)
- Authentication via Clerk, data persistence via Supabase
- Full-stack TypeScript with SSR capabilities

**Current Branch:** `Rollback-v1` | **Version:** 0.2.230

## Architecture

### Core Stack
- **Framework:** Next.js 15 (App Router) with Turbopack
- **Auth:** Clerk (OAuth & session management) → syncs to Supabase `users` table
- **Database:** Supabase (PostgreSQL)
- **UI Components:** shadcn/ui (Radix UI primitives) + Tailwind CSS
- **Path Aliases:** `@/*` maps to project root (e.g., `@/components`, `@/lib`, `@/utils`)

### Directory Structure
- `app/`: Next.js App Router (pages, layouts, API routes)
- `components/`: React components (layout sections, UI, admin views, modals)
- `app/api/`: API route handlers (careers, admin, bookings, modules, kuttai)
- `lib/`: Supabase client, utilities
- `data/`: Static data (careers positions, products, team members)
- `types/`: TypeScript interfaces and types
- `utils/`: Helper functions (Clerk-to-Supabase sync)

## Critical Patterns

### 1. Authentication & Authorization
- **Clerk Middleware** (`middleware.ts`): Protects routes, extracts user role from `sessionClaims.metadata.status`
- **Public Routes:** `/`, `/careers`, `/ideas`, `/kode`, `/niti`, `/products`, `/Team`, `/internship-certificate`, `/kuttai`
- **Protected Routes:** `/admin/*`, `/dashboard/*`
- **Role Values:** `"admin"`, `"moderator"`, `"intern"` stored in Clerk custom metadata
- **Sync Pattern:** `syncClerkUserToSupabase()` upserts user data to Supabase on auth

### 2. API Route Design
- **Validation Pattern:** Check required fields → validate email/phone regex → business logic
- **Error Handling:** Return `{ success: false, error: 'message' }` with appropriate status codes
- **CORS Headers:** Applied per route with `Access-Control-Allow-*` headers in responses
- **Supabase Client Modes:**
  - `createClient(url, anonKey)` for client-side/frontend auth
  - `createClient(url, serviceRoleKey)` for server-side admin operations (in API routes)

### 3. Component & Page Structure
- **Server Components by Default:** Components use RSC (React Server Components)
- **Client Components:** Use `"use client"` directive for interactivity (modals, forms, dashboards)
- **Section Pattern:** Marketing pages compose reusable sections (`components/layout/sections/`)
  - Examples: `hero.tsx`, `features.tsx`, `benefits.tsx`, `faq.tsx`, `contact.tsx`
- **Data Binding:** Static data in `data/*.ts` files (e.g., `careers.ts`, `products.ts`, `team.ts`)

### 4. Form & Data Handling
- **Forms:** Use `react-hook-form` with `@hookform/resolvers`
- **Validation:** Email regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  Phone regex: `/^[+]?[\d\s\-\(\)]{10,15}$/`
- **File Uploads:** Handled via Supabase Storage (see `app/api/upload/` routes)
- **Modals:** Custom modal components (e.g., `ApplicationFormModal.tsx`, `InternModal.tsx`)

### 5. Styling Convention
- **CSS Framework:** Tailwind CSS with `dark:` mode support
- **Component Library:** shadcn/ui components (`Button`, `Badge`, `Dialog`, etc.)
- **CSS Variables:** HSL-based theme system defined in `app/globals.css`
- **Responsive:** Mobile-first design using Tailwind breakpoints (sm, md, lg, xl, 2xl)

### 6. SEO & Metadata
- **Metadata:** Use `next/head` or TypeScript `Metadata` export for page-level SEO
- **Custom Seo Component:** `<Seo />` component in `components/seo/Seo.tsx` for structured data
- **Sitemap:** Auto-generated via `next-sitemap` package (configured in `next-sitemap.config.js`)
- **Schema.org:** Embedded in page JSX with `itemScope`, `itemType`, `itemProp` attributes

## Development Workflows

### Local Setup
```bash
npm run dev         # Start dev server with Turbopack (http://localhost:3000)
npm run build       # Build for production
npm start           # Run production server
npm run lint        # Run ESLint
```

### Database Migrations
- Supabase migrations are managed manually or via Supabase dashboard
- No Prisma ORM—direct Supabase client queries with `.from().select().order().etc`

### Environment Variables Required
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Supabase client)
- `SUPABASE_SERVICE_ROLE_KEY` (server-side admin operations)
- `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (Clerk auth)
- Database table names: `users`, `teams`, `careers`, `products`, `modules`, `bookings`, etc.

## Integration Points & External Dependencies

### Clerk Integration
- Middleware protects routes and provides user context
- Custom metadata (role) must be set in Clerk dashboard or via management API
- Auth state accessed via `auth()` function in server components/routes

### Supabase Integration
- Real-time data queries via `.select()`, `.order()`, `.eq()`, `.insert()`, `.upsert()`, `.update()`, `.delete()`
- RLS (Row Level Security) policies likely configured per table
- Storage bucket: `process.env.SUPABASE_BUCKET`

### Vercel Deployment
- Configuration in `vercel.json`; uses Next.js defaults
- Trailing slash enforced (`trailingSlash: true` in next.config.ts)
- Remote image domains whitelisted in next.config.ts

## Project-Specific Conventions

1. **Naming:** Components use PascalCase (`HeroSection`, `ApplicationFormModal`); utilities use camelCase
2. **Type Safety:** Strict TypeScript (`strict: true` in tsconfig.json); define interfaces in `types/*.ts`
3. **Error Messages:** User-friendly; return with proper HTTP status codes (400, 401, 403, 500)
4. **Console Logs:** Present in API routes for debugging (consider removing in production)
5. **Dark Mode:** Built-in via `next-themes`; components support `dark:` Tailwind classes

## Common Tasks

- **Add New Page:** Create file in `app/[route]/page.tsx`; use Metadata export for SEO
- **Add API Endpoint:** Create route in `app/api/[domain]/route.ts`; validate inputs, use Supabase client
- **Add UI Component:** Place in `components/` or `components/ui/`; use shadcn/ui as base when possible
- **Add Form:** Use `react-hook-form`, validate in API route, return success/error response
- **Query Database:** Use `supabase.from('table').select()` pattern; handle errors gracefully

## Known Issues & Gotchas

- ESLint errors ignored during build (`ignoreDuringBuilds: true`)
- Turbopack used by default; may have edge cases not present in SWC
- Clerk role stored as `metadata.status` (not standard `metadata.role`)—adjust queries accordingly
- CORS headers manually set per API route (not configured globally)
