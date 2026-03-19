// src/app/(frontend)/(pages)/login/page.tsx
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Login from '@/components/Login'

const LoginPage = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get('payload-token')

  if (token) {
    redirect('/account-dashboard')
  }

  return <Login />
}

export default LoginPage
