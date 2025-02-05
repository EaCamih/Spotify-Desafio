import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'

interface HeaderProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='sticky rounded-full top-0 w-full bg-black h-[56px] flex justify-center md:grid md:grid-cols-5 lg:grid-cols-3'>
            <div className='flex items-center justify-start text-4xl px-4 col-span-1'>
                <a href="#" className='h-9 w-9 lg:invisible lg:w-0'><FaSpotify /></a>
                <img src="logo-spotify.png" alt="Logo" className='h-9 w-0 invisible lg:visible lg:w-fit' />
            </div>
            <div className='flex items-center justify-center col-span-3 lg:col-span-1'>
                <div className='w-full md:w-[75%] h-full rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors duration-100 px-4 py-2 flex flex-row gap-4'>
                    <button className='text-xl text-neutral-300'><IoSearch /></button>
                    <input type="text" placeholder='O que você quer ouvir?' className='placeholder-neutral-400 bg-transparent w-full focus:outline-none' onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>  
            </div>
            <div className='flex items-center justify-end invisible w-0 md:w-full md:visible col-span-1 px-4'>
                <button className='bg-white text-black py-3 px-8 rounded-full text-lg font-bold hover:scale-105 duration-100 hover:bg-neutral-200'>Entrar</button>
            </div>
        </div>
    )
}

export default Header
