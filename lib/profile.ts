import { createClient } from '@/lib/supabase/server'
import { Profile, ProfileLink } from '@/types/profile'

export async function getProfileByUsername(username: string): Promise<Profile | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single()

  if (error || !data) return null
  return data as Profile
}

export async function getOwnProfile(): Promise<Profile | null> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (error || !data) return null
  return data as Profile
}

export async function getProfileLinks(profileId: string): Promise<ProfileLink[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('profile_links')
    .select('*')
    .eq('profile_id', profileId)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true })

  if (error || !data) return []
  return data as ProfileLink[]
}
