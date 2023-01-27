import useUser from '@/hooks/useUser'

export default function Index() {
  const [user, logout] = useUser()
  return (
    user && (
      <main className="p-8 space-y-4">
        <div>Welcome! {user.username}</div>
        <button className="btn" type="button" onClick={logout}>
          Logout
        </button>
      </main>
    )
  )
}
