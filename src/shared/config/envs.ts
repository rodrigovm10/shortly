const { DATABASE_URL, NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } = process.env

export const EnvConfig = () => ({
  DATABASE_URL: DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres',
  NEXT_PUBLIC_SUPABASE_URL: NEXT_PUBLIC_SUPABASE_URL || 'https://aws-0-us-east-1.supabase.co',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key',
})
