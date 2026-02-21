'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { updateProfile } from '@/app/profile/actions'
import { Profile } from '@/types/profile'

export default function EditProfileForm({
  profile,
  error,
}: {
  profile: Profile
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

          <Button formAction={updateProfile} className="w-full">
            Save Profile
          </Button>
        </form>
      </div>
    </div>
  )
}
