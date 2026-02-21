export interface Profile {
  id: string
  username: string
  display_name: string | null
  bio: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export interface ProfileUpdate {
  username: string
  display_name: string | null
  bio: string | null
  avatar_url: string | null
}
