import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getOwnProfile } from '@/lib/profile'

export default async function ProfilePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const profile = await getOwnProfile()

  if (!profile) {
    // User is logged in but has no profile row yet (e.g. account created
    // before the auto-create trigger was set up). Create one now.
    const defaultUsername = 'user_' + user.id.replace(/-/g, '')
    await supabase.from('profiles').insert({ id: user.id, username: defaultUsername })
    redirect(`/profile/${defaultUsername}/edit`)
  }

  redirect(`/profile/${profile.username}`)
}
