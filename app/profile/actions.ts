'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const username = (formData.get('username') as string).trim().toLowerCase()
  const display_name = (formData.get('display_name') as string).trim() || null
  const bio = (formData.get('bio') as string).trim() || null
  const avatar_url = (formData.get('avatar_url') as string).trim() || null

  if (!username) {
    redirect(`/profile?error=${encodeURIComponent('Username is required')}`)
  }

  const { error } = await supabase
    .from('profiles')
    .update({ username, display_name, bio, avatar_url })
    .eq('id', user.id)

  if (error) {
    const message = error.code === '23505'
      ? 'That username is already taken'
      : error.message
    redirect(`/profile/${username}/edit?error=${encodeURIComponent(message)}`)
  }

  revalidatePath(`/profile/${username}`)
  revalidatePath(`/profile/${username}/edit`)
  redirect(`/profile/${username}`)
}
