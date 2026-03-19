// src/components/Login.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const ERROR_MESSAGES: Record<string, string> = {
  oauth_cancelled: 'Sign-in was cancelled.',
  invalid_state: 'Security check failed. Please try again.',
  email_not_verified: 'Your Google email is not verified.',
  unauthorized: 'This account type cannot sign in here.',
  account_conflict: 'Account conflict detected. Contact support.',
  server_error: 'Something went wrong. Please try again.',
}

function LoginInner() {
  const params = useSearchParams()
  const errorKey = params.get('error')
  const errorMessage = errorKey ? (ERROR_MESSAGES[errorKey] ?? 'An unknown error occurred.') : null

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 font-sans px-6">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl px-8 py-9">
        <h1 className="text-xl font-semibold text-gray-900 mb-1">Sign in</h1>

        <p className="text-sm text-gray-500 mb-7">Use your Google account to continue.</p>

        {errorMessage && (
          <div className="bg-red-50 border border-red-300 text-red-700 text-sm rounded-md px-4 py-2.5 mb-5">
            {errorMessage}
          </div>
        )}

        <a
          href="/api/users/auth/google"
          className="flex items-center justify-center gap-2.5 w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 text-sm font-medium bg-white hover:bg-gray-50 transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </a>

        <p className="mt-5 text-xs text-gray-400 text-center">
          Staff?{' '}
          <a href="/admin" className="text-blue-600 hover:underline">
            Sign in via Admin →
          </a>
        </p>
      </div>
    </main>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginInner />
    </Suspense>
  )
}
