import React from 'react'
import Link from 'next/link'

function Landing() {
  return (
    <div className="bg-bob-main h-[calc(100vh-56px)] flex min-w-screen flex-col px-5 justify-center">
      <p className='text-9xl font-bold mb-7 text-bob-bg'>Want to easily</p>
      <p className='text-9xl font-bold mb-7 text-bob-bg'>build your dream home?</p>
      <p className='text-6xl font-bold mb-20 text-bob-bg'>Just use BOBjs</p>
      <button className="rounded-lg bg-bob-bg w-72 h-16"><Link href="/form"><p className='text-3xl font-bold'>Get Started</p></Link></button>
    </div>
  )
}

export default Landing