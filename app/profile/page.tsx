import { redirect } from 'next/navigation'
import { getOwnProfile } from '@/lib/profile'

export default async function ProfilePage() {
  const profile = await getOwnProfile()

  if (!profile) {
    redirect('/login')
  }

  redirect(`/profile/${profile.username}`)
}
