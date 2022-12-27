import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Landing from '../components/landing'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>BOBjs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <Landing />
    </div>
  )
}

export default Home
