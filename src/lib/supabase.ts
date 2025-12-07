import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables. Leaderboard will be mock-only or fail.')
}

export const supabase = createClient(
    supabaseUrl || '',
    supabaseAnonKey || ''
)

export type LeaderboardEntry = {
    id: number
    player_name: string
    score: number
    created_at: string
}
