-- Table for modules (if not already created)
CREATE TABLE IF NOT EXISTS modules (
  id serial PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  link text,
  created_at timestamp with time zone DEFAULT now()
);

-- Table for users (to store Clerk user info)
CREATE TABLE IF NOT EXISTS users (
  id text PRIMARY KEY, -- Clerk user id
  name text,
  email text
);

-- Table for tracking module read status per user
CREATE TABLE IF NOT EXISTS module_reads (
  id serial PRIMARY KEY,
  module_id integer REFERENCES modules(id) ON DELETE CASCADE,
  user_id text REFERENCES users(id) ON DELETE CASCADE,
  read boolean DEFAULT false,
  read_at timestamp with time zone,
  UNIQUE (module_id, user_id)
);

-- Index for faster lookups (optional)
CREATE INDEX IF NOT EXISTS idx_module_reads_user_id ON module_reads(user_id);
CREATE INDEX IF NOT EXISTS idx_module_reads_module_id ON module_reads(module_id);
