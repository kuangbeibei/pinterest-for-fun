import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Sidebar, Feed, AddPinBtn } from 'Components'

const Home: NextPage = () => {
  return (
    <div className='relative min-h-screen'>

      <Header />
      <Sidebar />
      <Feed />
      <AddPinBtn />

    </div>
  )
}

export default Home
