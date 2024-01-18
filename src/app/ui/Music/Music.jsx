import React, { useEffect, useState, useRef } from 'react';
import ContentContainer from '../components/atoms/ContentContainer/ContentContainer';
import { RiPlayLine } from 'react-icons/ri';
import { BiSkipNext } from 'react-icons/bi';
import queen from '../../../../public/queen.jpg';
import pinpanther from '../../../../public/pinpanther.png';
import Image from 'next/image';

const Music = ({ position }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const playPauseHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const skipForwardHandler = () => {
        audioRef.current.currentTime += 10; 
    };

    const skipBackwardHandler = () => {
        audioRef.current.currentTime -= 10;
    };

    return (
        <ContentContainer style={`${position} flex flex-col items-center justify-evenly`}>
            <div className="size-20 overflow-hidden border border-darkSurface-400 dark:border-neutral-400  grid place-items-center rounded-full 2xl:size-24">
                <Image
                    src={pinpanther}
                    alt="dspn"
                    className={` relative left-[0.5] top-1  opacity-100 ${isPlaying ? 'animate-spin   ' : ' 2xl:w-24 '}`}
                />
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <audio ref={audioRef} controls className='hidden'>
                    <source src="/pawsa.mp3" type="audio/mp3" />
                </audio>

                <BiSkipNext className="-rotate-90 size-16 text-darkSurface-100 dark:text-zinc-400 2xl:size-24" onClick={skipBackwardHandler} />
                <button onClick={playPauseHandler}>
                    <RiPlayLine className="-rotate-90 text-darkSurface-100 size-16 dark:text-zinc-400 2xl:size-24" />
                </button>
                <BiSkipNext className="rotate-90 size-16 text-darkSurface-100 dark:text-zinc-400 anima 2xl:size-24" onClick={skipForwardHandler} />
            </div>
        </ContentContainer>
    );
};

export default Music;
