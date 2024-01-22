import React, { useEffect, useState, useRef } from 'react';
import ContentContainer from '../components/atoms/ContentContainer/ContentContainer';
import { RiPlayLine } from 'react-icons/ri';
import { BiPause, BiSkipNext } from 'react-icons/bi';
import queen from '../../../../public/queen.jpg';
import pinpanther from '../../../../public/pinpanther.png';
import Image from 'next/image';

const Music = ({ position }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [angle, setAngle] = useState(0);

    const audioRef = useRef(null);

    const playPauseHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(prev => !prev)
    };

    const skipForwardHandler = () => {
        audioRef.current.currentTime += 10;
    };

    const skipBackwardHandler = () => {
        audioRef.current.currentTime -= 10;
    };

    useEffect(() => {
        let interval = null;
        if (isPlaying) {
            interval = setInterval(() => {
                setAngle(prevAngle => prevAngle + 2);
            }, 10);
        } else if (!isPlaying) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <ContentContainer style={`${position} flex flex-col items-center justify-evenly`}>
            <div className="size-20 overflow-hidden border border-darkSurface-400 dark:border-neutral-400  grid place-items-center rounded-full 2xl:size-24">

                <Image
                    src={pinpanther}
                    alt="dspn"
                    className={` relative right-[.3rem] `}
                    style={{
                        transform: `rotate(${angle}deg)`
                    }}

                />
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <audio ref={audioRef} controls className='hidden'>
                    <source src="/pawsa.mp3" type="audio/mp3" />
                </audio>

                <BiSkipNext className="cursor-pointer hover:scale-[1.1] transition-all duration-200 -rotate-90 size-16 text-darkSurface-100 dark:text-zinc-400 2xl:size-24 hover:text-darkSurface-200 dark:hover:text-zinc-500" onClick={skipBackwardHandler} />
                <button name='handler_music' onClick={playPauseHandler}>
                    {isPlaying ? (
                        <BiPause className="-rotate-90 hover:scale-[1.1] transition-all duration-200 text-darkSurface-100 size-16 dark:text-zinc-400 2xl:size-24 hover:text-darkSurface-200 dark:hover:text-zinc-500" />
                        ) : (
                        <RiPlayLine className="-rotate-90 hover:scale-[1.1] transition-all duration-200 text-darkSurface-100 size-16 dark:text-zinc-400 2xl:size-24 hover:text-darkSurface-200 dark:hover:text-zinc-500" />
                    )}
                </button>
                <BiSkipNext className="cursor-pointer hover:scale-[1.1] transition-all duration-200 rotate-90 size-16 text-darkSurface-100 dark:text-zinc-400 anima 2xl:size-24 hover:text-darkSurface-200 dark:hover:text-zinc-500" onClick={skipForwardHandler} />
            </div>
        </ContentContainer>
    );
};

export default Music;
