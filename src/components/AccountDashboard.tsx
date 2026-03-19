//src\components\AccountDashboard.tsx
import { getUser } from '@/auth/getUser'
import { redirect } from 'next/navigation'
import { LogoutButton } from '@/components/LogoutButton'

export default async function AccountDashboard() {
  const user = await getUser()

  if (!user || user.role !== 'customer') {
    redirect('/login')
  }

  const firstName = user.displayName?.firstName ?? ''
  const lastName = user.displayName?.lastName ?? ''

  const strategies = (user.externalId?.authStrategies ?? []) as any[]
  const google = strategies.find((s) => s.provider === 'google')

  return (
    <main className="min-h-screen bg-gray-50 font-sans px-6 py-10">
      <div className="max-w-xl mx-auto space-y-8">
        {/* Nav */}
        <Nav />

        {/* Welcome */}
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Welcome{firstName ? `, ${firstName}` : ''}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            You're signed in as <span className="font-medium">{user.email}</span>.
          </p>
        </div>

        {/* Protected Notice */}
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-md px-4 py-3">
          ✓ Protected route — only verified customers can see this page.
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          {[
            { href: '/orders', label: 'My orders' },
            { href: '/checkout', label: 'Checkout' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="flex justify-between items-center bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 hover:bg-gray-50"
            >
              {label}
              <span className="text-gray-400">→</span>
            </a>
          ))}
        </div>

        {/* Identity */}
        <Section title="Identity">
          <Row label="User ID" value={user.id} />
          <Row label="Email" value={user.email} />
          <Row
            label="Role"
            value={
              <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded">
                {user.role}
              </span>
            }
          />
          <Row label="First name" value={firstName} />
          <Row label="Last name" value={lastName} />
        </Section>

        {/* Google OAuth */}
        {google && (
          <Section title="Google OAuth">
            <Row label="Provider Sub" value={user.providerUserId} />
            <Row
              label="Linked at"
              value={google.linkedAt && new Date(google.linkedAt).toLocaleString()}
            />
            <Row
              label="Token expires"
              value={google.tokenExpiry && new Date(google.tokenExpiry).toLocaleString()}
            />
          </Section>
        )}

        {/* Record */}
        <Section title="Record">
          <Row
            label="Created"
            value={user.createdAt && new Date(user.createdAt).toLocaleString()}
          />
          <Row
            label="Last updated"
            value={user.updatedAt && new Date(user.updatedAt).toLocaleString()}
          />
        </Section>
      </div>
    </main>
  )
}

/* ---------- Reusable Components ---------- */

function Nav() {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm font-semibold text-gray-900">My Account</span>
      <LogoutButton />
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">{title}</h2>
      <table className="w-full">
        <tbody>{children}</tbody>
      </table>
    </section>
  )
}

function Row({ label, value }: { label: string; value?: React.ReactNode }) {
  return (
    <tr>
      <td className="py-2 pr-3 text-sm text-gray-500 align-top whitespace-nowrap">{label}</td>
      <td className="py-2 text-sm text-gray-900 break-all">
        {value ?? <span className="text-gray-300">—</span>}
      </td>
    </tr>
  )
}
