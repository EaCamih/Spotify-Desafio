'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { IoPauseCircleSharp, IoPlayCircleSharp, IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoRepeat, IoShuffleOutline, IoVolumeHigh, IoVolumeOff } from 'react-icons/io5';
import { usePlayer } from '../../context/PlayerContext';

const Player = () => {
  const { currentTrack } = usePlayer();
  const [volume, setVolume] = useState(20);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.src = currentTrack.audioPreview;
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
    if (audioRef.current) {
      audioRef.current.volume = Number(event.target.value) / 100;
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current || !isFinite(audioRef.current.duration)) return;
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current || !isFinite(audioRef.current.duration)) return;
    const newProgress = Number(event.target.value);
    setProgress(newProgress);
    audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={currentTrack ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed bottom-0 left-0 right-0 bg-black h-[72px] pt-2 md:pt-0 md:grid md:grid-cols-3 shadow-lg ${currentTrack ? 'visible' : 'invisible'}`}
    >
      {currentTrack && (
        <>
          <div className='flex flex-row gap-2 items-center justify-start px-2 h-0 w-0 invisible md:visible md:h-full md:w-full'>
            <img src={currentTrack.image} alt={currentTrack.title} className='h-[56px] rounded-lg' />
            <div>
              <h3 className='font-medium leading-none hover:cursor-pointer hover:underline'>{currentTrack.title}</h3>
              <p className='text-xs text-neutral-400 hover:cursor-pointer hover:underline'>{currentTrack.artists}</p>
            </div>
            <FaHeart className='ml-2 text-lg text-[#1DB954] hover:cursor-pointer' />
          </div>
          <div className='flex flex-col items-center justify-center px-2'>
            <div className='mb-1 flex items-center justify-center text-lg gap-2'>
              <button className='text-neutral-800 hover:cursor-not-allowed'><IoShuffleOutline /></button>
              <button className='text-neutral-700 hover:cursor-not-allowed'><IoPlaySkipBackSharp /></button>
              <button onClick={togglePlayPause} className='text-white text-4xl hover:scale-105 transition-all duration-100'>
                {isPlaying ? <IoPauseCircleSharp /> : <IoPlayCircleSharp />}
              </button>
              <button className='text-neutral-700 hover:cursor-not-allowed'><IoPlaySkipForwardSharp /></button>
              <button className='text-neutral-800 hover:cursor-not-allowed'><IoRepeat /></button>
            </div>
            <input type='range' min='0' max='100' value={progress} onChange={handleProgressChange} className="progress-bar" style={{ '--progress': `${progress}%` } as React.CSSProperties} />
          </div>
          <div className='flex items-center justify-end px-2 h-0 w-0 invisible md:visible md:h-full md:w-full'>
            <div className='flex items-center text-lg'>
              <IoVolumeOff />
              <input type='range' min='0' max='100' value={volume} onChange={handleVolumeChange} className="volume-bar mx-2 w-24 h-1" style={{ '--progress': `${volume}%` } as React.CSSProperties} />
              <IoVolumeHigh />
            </div>
          </div>
          <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={(e) => {setIsPlaying(false)}} />
        </>
      )}
    </motion.div>
  );
};

export default Player;
