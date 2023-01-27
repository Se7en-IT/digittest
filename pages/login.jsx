import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState(false)
  const onChange = (e) => {
    setForm((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }))
  }

  const login = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.status === 401) {
      setError(true)
    } else {
      sessionStorage.set('token', (await response.json()).token)
      router.push('/')
    }
  }
  return (
    <main className="h-screen flex items-center justify-center">
      <form
        onSubmit={login}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col space-y-4"
      >
        <div className="form-input">
          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            required
            value={form.username}
            onChange={onChange}
            placeholder="Username"
          ></input>
        </div>
        <div className="form-input">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            required
            value={form.password}
            onChange={onChange}
            placeholder="Password"
          ></input>
        </div>
        <button className="btn" type="submit">
          Login
        </button>
        {error && (
          <div className="text-red-500">Username o password errati</div>
        )}
      </form>
    </main>
  )
}
