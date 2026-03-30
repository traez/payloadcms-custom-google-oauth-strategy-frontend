//src\app\(frontend)\(pages)\verify\page.tsx
import { Suspense } from 'react'
import Verify from '@/components/Verify'

const VerifyPage = () => {
  return (
    <Suspense
      fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}
    >
      <Verify />
    </Suspense>
  )
}

export default VerifyPage