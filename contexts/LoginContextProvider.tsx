'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { createClient } from '@/lib/supabase/client'
import { usePathname } from 'next/navigation'

interface LoginContextValue {
  isLoggedIn: boolean
  setIsLoggedIn: (setting: boolean) => void
}

const LoginContext = createContext<LoginContextValue>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
})

export const useLogin = () => useContext(LoginContext)

export function LoginProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      setIsLoggedIn(!!user)
    })
  }, [pathname])

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  )
}
