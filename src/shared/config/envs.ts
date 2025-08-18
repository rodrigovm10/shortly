const {
  DATABASE_URL,
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_APP_URL,
  SUPABASE_SERVICE_ROLE_KEY,
} = process.env

export const EnvConfig = () => ({
  DATABASE_URL: DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres',
  NEXT_PUBLIC_SUPABASE_URL: NEXT_PUBLIC_SUPABASE_URL || 'https://aws-0-us-east-1.supabase.co',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key',
  SUPABASE_SERVICE_ROLE_KEY: SUPABASE_SERVICE_ROLE_KEY || 'your-service-role-key',
  NEXT_PUBLIC_APP_URL: NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
})
