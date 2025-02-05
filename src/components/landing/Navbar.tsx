import React from 'react'
import { BiSolidPlaylist } from 'react-icons/bi'
import { IoHeartCircle, IoPlayCircleOutline, IoRadioOutline } from 'react-icons/io5'
import { LuLibrary } from 'react-icons/lu'
import { TbLayoutDashboardFilled } from 'react-icons/tb'

const Navbar = () => {
  return (
    <div className='invisible lg:visible bg-neutral-900 rounded-2xl space-y-4 py-4 scrollbar-none overflow-x-hidden overflow-y-scroll col-span-0 lg:col-span-1 w-0 lg:w-fit h-fit'>
      <div className='px-3 py-2'>
        <h1 className='mb-2 px-4 text-lg font-semibold tracking-tight'>Descobrir</h1>
        <div className='space-y-1'>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <IoPlayCircleOutline className='text-lg'/>
                Ouvir agora
            </button>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <TbLayoutDashboardFilled className='text-lg'/>
                Pesquisar
            </button>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <IoRadioOutline className='text-lg'/>
                Rádio
            </button>
        </div>
      </div>

      <div className='px-3 py-2'>
        <h1 className='mb-2 px-4 text-lg font-semibold tracking-tight'>Biblioteca</h1>
        <div className='space-y-1'>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <BiSolidPlaylist className='text-lg'/>
                Playlists
            </button>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <IoHeartCircle className='text-lg'/>
                Curtidas
            </button>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <LuLibrary className='text-lg'/>
                Albuns
            </button>
        </div>
      </div>

      <div className='px-3 py-2'>
        <h1 className='mb-2 px-4 text-lg font-semibold tracking-tight'>Playlists</h1>
        <div className='space-y-1'>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <BiSolidPlaylist className='text-lg'/>
                Good Vibes
            </button>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <BiSolidPlaylist className='text-lg'/>
                Feel like it
            </button>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <BiSolidPlaylist className='text-lg'/>
                Chill
            </button>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <BiSolidPlaylist className='text-lg'/>
                LoFi
            </button>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <BiSolidPlaylist className='text-lg'/>
                Car Drive
            </button>
            <button className='inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-100 transition-colors hover:bg-neutral-800/80 focus:bg-neutral-800 w-full px-4 py-2'>
                <BiSolidPlaylist className='text-lg'/>
                Phonk
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
