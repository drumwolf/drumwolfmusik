'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { updateProfile, addProfileLink, deleteProfileLink } from '@/app/profile/actions'
import { Profile, ProfileLink } from '@/types/profile'

export default function EditProfileForm({
  profile,
  links,
  error,
}: {
  profile: Profile
  links: ProfileLink[]
  error?: string
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-center">Edit Profile</h1>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
            {error}
          </p>
        )}

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="display_name" className="text-sm font-medium">
              Display Name
            </label>
            <Input
              id="display_name"
              name="display_name"
              type="text"
              defaultValue={profile.display_name ?? ''}
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Username <span className="text-red-500">*</span>
            </label>
            <Input
              id="username"
              name="username"
              type="text"
              defaultValue={profile.username}
              required
              pattern="[a-z0-9_-]+"
              title="Lowercase letters, numbers, hyphens, and underscores only"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="bio" className="text-sm font-medium">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={3}
              defaultValue={profile.bio ?? ''}
              placeholder="Tell us about yourself"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="avatar_url" className="text-sm font-medium">
              Avatar URL
            </label>
            <Input
              id="avatar_url"
              name="avatar_url"
              type="url"
              defaultValue={profile.avatar_url ?? ''}
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="bandcamp_embed_id" className="text-sm font-medium">
              Bandcamp Album ID
            </label>
            <Input
              id="bandcamp_embed_id"
              name="bandcamp_embed_id"
              type="text"
              defaultValue={profile.bandcamp_embed_id ?? ''}
              placeholder="e.g. 1234567890"
            />
            <p className="text-xs text-muted-foreground">
              The numeric ID from a Bandcamp embed code (album=XXXXXXXXXX)
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="soundcloud_embed_url" className="text-sm font-medium">
              SoundCloud Track/Playlist URL
            </label>
            <Input
              id="soundcloud_embed_url"
              name="soundcloud_embed_url"
              type="url"
              defaultValue={profile.soundcloud_embed_url ?? ''}
              placeholder="https://soundcloud.com/artist/track"
            />
          </div>

          <Button formAction={updateProfile} className="w-full">
            Save Profile
          </Button>
        </form>

        <div className="space-y-3 pt-4 border-t">
          <h2 className="text-sm font-semibold">Links</h2>

          {links.length > 0 && (
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.id} className="flex items-center justify-between gap-2 text-sm">
                  <span className="truncate">
                    {link.label ? (
                      <><span className="font-medium">{link.label}</span> — {link.url}</>
                    ) : (
                      link.url
                    )}
                  </span>
                  <form action={deleteProfileLink}>
                    <input type="hidden" name="id" value={link.id} />
                    <input type="hidden" name="username" value={profile.username} />
                    <button type="submit" className="text-red-500 hover:text-red-700 shrink-0 text-xs cursor-pointer">
                      Remove
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          )}

          <form action={addProfileLink} className="space-y-2">
            <input type="hidden" name="username" value={profile.username} />
            <Input
              name="url"
              type="url"
              placeholder="https://bandcamp.com/yourname"
              required
            />
            <Input
              name="label"
              type="text"
              placeholder="Label (optional)"
            />
            <Button type="submit" variant="outline" className="w-full">
              Add Link
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
