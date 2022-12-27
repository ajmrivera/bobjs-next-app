import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className="bg-bob-main h-14 flex min-w-screen items-center overflow-hidden">
      <Link href="/"><p className="text-3xl font-bold pl-5 text-bob-bg">BOBjs</p></Link>
    </div>
  )
}

export default Header