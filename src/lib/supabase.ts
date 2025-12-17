import { createBrowserClient } from '@supabase/ssr';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// 클라이언트 사이드용 Supabase 클라이언트
export const createClientSupabase = () => {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
};

// 서버 사이드용 Supabase 클라이언트 (API Routes에서 사용)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabase: SupabaseClient<any, any, any> = createClient(supabaseUrl, supabaseAnonKey);

// 호환성을 위한 alias
export const createServerSupabaseClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey);
};
