// src/components/Logout.tsx
import { LogoutButton } from '@/components/LogoutButton'

export default function LogoutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50 font-sans px-6 py-10">
      <div className="w-full max-w-sm bg-white border border-zinc-200 rounded-2xl px-8 py-10 text-center shadow-sm">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 mx-auto mb-5">
          <svg
            className="w-5 h-5 text-zinc-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </div>

        <h1 className="text-lg font-semibold text-zinc-900 mb-2">Sign out?</h1>
        <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
          You'll be redirected to the login page.
        </p>

        <div className="flex flex-col gap-3">
          <LogoutButton />
          <a
            href="/account-dashboard"
            className="block px-4 py-2.5 border border-zinc-200 rounded-xl text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-800 transition-colors duration-150 no-underline"
          >
            Cancel
          </a>
        </div>
      </div>
    </main>
  )
}
