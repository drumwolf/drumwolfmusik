'use client'

import Link from 'next/link'
import { logout } from '@/app/auth/actions'
import { useLogin } from '@/contexts/LoginContextProvider'

const Navbar = () => {
  const { isLoggedIn } = useLogin()
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <div className="flex items-center gap-4">
      <Link href="/posts" className="hover:text-blue-400 text-white drop-shadow-lg leading-none">Articles</Link>
      <Link href="/webcasts" className="hover:text-blue-400 text-white drop-shadow-lg leading-none">Webcasts</Link>
      {!isProduction && (isLoggedIn ? (
        <>
          <Link href="/profile" className="hover:text-blue-400 text-white drop-shadow-lg leading-none">
            Profile
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="hover:text-blue-400 text-white drop-shadow-lg leading-none cursor-pointer"
            >
              Log Out
            </button>
          </form>
        </>
      ) : (
        <Link href="/login" className="hover:text-blue-400 text-white drop-shadow-lg leading-none">
          Log In
        </Link>
      ))}
    </div>
  )
}

export default Navbar
