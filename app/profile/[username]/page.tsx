import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

import { getProfileByUsername, getProfileLinks } from '@/lib/profile'
import { createClient } from '@/lib/supabase/server'
import { BandcampEmbed } from '@/components/BandcampEmbed'
import { SoundCloudEmbed } from '@/components/SoundCloudEmbed'

type Props = {
  params: Promise<{ username: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params
  const profile = await getProfileByUsername(username)
  return {
    title: profile
      ? `${profile.display_name ?? username} | drumwolfmusik`
      : 'Profile not found | drumwolfmusik',
  }
}

export default async function ProfilePage({ params }: Props) {
  const { username } = await params
  const profile = await getProfileByUsername(username)

  if (!profile) {
    notFound()
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const isOwner = user?.id === profile.id

  const links = await getProfileLinks(profile.id)

  return (
    <div className="flex min-h-[60vh] justify-center px-4 py-12">
      <div className="w-full max-w-lg space-y-6">
        <div className="flex items-center gap-6">
          {profile.avatar_url ? (
            <Image
              src={profile.avatar_url}
              alt={profile.display_name ?? username}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-500">
              {(profile.display_name ?? username).charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold">
              {profile.display_name ?? username}
            </h1>
            <p className="text-gray-500">@{username}</p>
          </div>
        </div>

        {profile.bio && (
          <p className="text-gray-700 whitespace-pre-wrap">{profile.bio}</p>
        )}

        {links.length > 0 && (
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  {link.label ?? link.url}
                </a>
              </li>
            ))}
          </ul>
        )}

        {profile.bandcamp_embed_id && (
          <BandcampEmbed albumId={profile.bandcamp_embed_id} />
        )}

        {profile.soundcloud_embed_url && (
          <SoundCloudEmbed url={profile.soundcloud_embed_url} />
        )}

        {isOwner && (
          <Link
            href={`/profile/${username}/edit`}
            className="inline-block text-sm text-blue-600 hover:underline"
          >
            Edit Profile
          </Link>
        )}
      </div>
    </div>
  )
}
