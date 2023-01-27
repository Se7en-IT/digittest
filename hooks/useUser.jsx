import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function useUser() {
  const router = useRouter()
  const [user, setUser] = useState()

  const logout = async () => {
    await fetch('/api/logout')
    router.push('/login')
  }
  useEffect(() => {
    async function profile() {
      const response = await fetch('/api/profile')
      response.status === 200
        ? setUser(await response.json())
        : router.push('/login')
    }
    profile()
  }, [])
  return [user, logout]
}
