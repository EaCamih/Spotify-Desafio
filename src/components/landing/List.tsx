'use client';

import React from 'react';
import musics from '../../utils/musics';
import { usePlayer } from '../../context/PlayerContext';
import artists from '../../utils/artists';

interface ListProps {
  searchTerm: string;
}

const List: React.FC<ListProps> = ({ searchTerm }) => {
  const { setCurrentTrack } = usePlayer();

  const filteredMusics = musics.filter((music) =>
    music.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    music.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-neutral-900 rounded-2xl px-4 py-6 col-span-5 w-full'>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold tracking-tight'>Ouça Agora</h2>
          <p className='text-sm text-neutral-400'>As melhores músicas para você</p>
        </div>
      </div>
      <div className='shrink-0 bg-neutral-600 h-[1px] w-full my-4'/>

      {searchTerm && filteredMusics.length === 0 ? (
        <p className="text-neutral-400 text-center">Nenhuma música encontrada.</p>
      ) : (
        <div className='w-full overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-full'>
          <div style={{ minWidth: '100%', display: 'table' }}>
            <div className='flex space-x-4 pb-4'>
              {filteredMusics.map((music, index) => (
                <button
                  className='space-y-3 w-[250px] bg-neutral-950 px-2 py-2 rounded-xl hover:cursor-pointer hover:bg-neutral-800'
                  key={index}
                  onClick={() => setCurrentTrack(music)}
                >
                  <div className='overflow-hidden'>
                    <div className='h-72 rounded-xl overflow-hidden'>
                      <img src={music.thumbnail} alt="" className='h-72 object-cover hover:scale-105 transition duration-200'/>
                    </div>
                    <div className='mt-3 text-sm flex flex-col items-start text-start'>
                      <h3 className='font-medium leading-none'>{music.title}</h3>
                      <p className='text-xs text-neutral-400'>{music.artist}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {!searchTerm && (
        <>
          <div className='flex items-center justify-between w-full mt-6'>
            <div className='space-y-1'>
              <h2 className='text-2xl font-semibold tracking-tight'>Os que você ama</h2>
              <p className='text-sm text-neutral-400'>Os artistas que você não larga de jeito algum</p>
            </div>
          </div>
          <div className='shrink-0 bg-neutral-600 h-[1px] w-full my-4'/>
          
          <div className='w-full overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-full'>
            <div style={{ minWidth: '100%', display: 'table' }}>
              <div className='flex space-x-4 pb-4'>
                {artists.map((artist, index) => (
                  <button className='space-y-3 w-[200px] bg-neutral-950 px-2 py-2 rounded-xl hover:cursor-pointer hover:bg-neutral-800' key={index}>
                    <div className='overflow-hidden'>
                      <div className='w-46 h-46 rounded-full overflow-hidden'>
                        <img src={artist.thumbnail} alt="" className='w-46 object-cover hover:scale-105 transition duration-200'/>
                      </div>
                      <div className='mt-3 text-sm flex flex-col items-start text-start'>
                        <h3 className='font-medium leading-none'>{artist.name}</h3>
                        <p className='text-xs text-neutral-400'>{artist.type}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default List;
