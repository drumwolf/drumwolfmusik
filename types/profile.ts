export interface Profile {
  id: string
  username: string
  display_name: string | null
  bio: string | null
  avatar_url: string | null
  bandcamp_embed_id: string | null
  soundcloud_embed_url: string | null
  created_at: string
  updated_at: string
}

export interface ProfileUpdate {
  username: string
  display_name: string | null
  bio: string | null
  avatar_url: string | null
  bandcamp_embed_id: string | null
  soundcloud_embed_url: string | null
}

export interface ProfileLink {
  id: string
  profile_id: string
  label: string | null
  url: string
  sort_order: number
  created_at: string
}
