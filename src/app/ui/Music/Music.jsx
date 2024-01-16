'use client'

import React, { useEffect, useState, useRef } from 'react';
import ContentContainer from '../components/atoms/ContentContainer/ContentContainer';
import { RiPlayLine } from 'react-icons/ri';
import { BiSkipNext } from 'react-icons/bi';
import dspn from '../../../../public/dsp.jpg';
import Image from 'next/image';

const Music = ({ position }) => {
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  const src =
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221099243&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true';

  useEffect(() => {
    if (musicOn) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  return (
    <ContentContainer style={`${position} flex flex-col items-center justify-evenly`}>
      <div className="size-16 overflow-hidden  grid place-items-center rounded-full 2xl:size-24">
        <Image
          src={dspn}
          alt="dspn"
          height={''}
          className={musicOn ? 'animate-spin w-16 2xl:w-24' : 'w-16 2xl:w-24'}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <BiSkipNext className="-rotate-90 size-16 dark:text-darkSurface-100 text-zinc-400 2xl:size-24" />
        <button onClick={() => setMusicOn(!musicOn)}>
          <RiPlayLine className="-rotate-90 dark:text-darkSurface-100 size-16 text-zinc-400 2xl:size-24" />
        </button>
        <BiSkipNext className="rotate-90 size-16 dark:text-darkSurface-100 text-zinc-400 anima 2xl:size-24" />
      </div>
      <audio ref={audioRef} src={src} />
    </ContentContainer>
  );
};

export default Music;
