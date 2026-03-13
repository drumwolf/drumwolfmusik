import { notFound, redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { getProfileByUsername, getProfileLinks } from '@/lib/profile'
import EditProfileForm from './EditProfileForm'

type Props = {
  params: Promise<{ username: string }>
  searchParams: Promise<{ error?: string }>
}

export default async function EditProfilePage({ params, searchParams }: Props) {
  const { username } = await params
  const { error } = await searchParams

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const profile = await getProfileByUsername(username)

  if (!profile) {
    notFound()
  }

  if (user.id !== profile.id) {
    redirect(`/profile/${username}`)
  }

  const links = await getProfileLinks(profile.id)

  return <EditProfileForm profile={profile} links={links} error={error} />
}
