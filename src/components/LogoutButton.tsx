//src\components\LogoutButton.tsx
'use client'

import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/users/auth/logout', { method: 'POST' })
    router.push('/login')
    router.refresh() // clears any cached server component state
  }

  return (
    <button
      onClick={handleLogout}
      type="button"
      className="group relative inline-flex items-center gap-2 rounded-md border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-sm transition-all duration-150 hover:border-red-300 hover:bg-red-50 hover:shadow-md active:scale-95 active:shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 cursor-pointer"
    >
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      Sign out
    </button>
  )
}
