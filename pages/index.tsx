import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/landing/Header'
import Navbar from '../src/components/landing/Navbar'
import List from '../src/components/landing/List'
import Player from '../src/components/landing/Player'
import { useState } from 'react'

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='antialiased'>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Desafio Alura" />
        <link rel="icon" href="/spotify.png" type="image/png" />
      </Head>

      <div className="bg-black flex flex-col pt-2 px-2 gap-2 font-inter lg:overflow-visible overflow-x-hidden text-white min-h-screen">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="flex lg:grid lg:grid-cols-6 lg:gap-2 rounded-2xl h-full">
          <Navbar/>
          <List searchTerm={searchTerm}/>
        </div>
        <Player/>
      </div>
    </div>
  )
}

export default Home
