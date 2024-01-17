"use client"

import React, { useEffect, useState } from 'react'
import ContentContainer from '../components/atoms/ContentContainer/ContentContainer'
import { BiLogoGmail, BiSolidMoon, BiSolidSun } from 'react-icons/bi'
import Image from 'next/image'
import { SiDiscord, SiGithub, SiLinkedin } from 'react-icons/si'
import Eye from '../../../../public/eye.png'
import EyeColor from '../../../../public/eyeColor.png'
import Resume from '../../../../public/resume.png'
import ResumeColor from '../../../../public/resumeColor.png'
import { useAppContext } from '../../context'
import ThemeSwitcher from '../components/molecules/ThemeSwitcher/ThemeSwitcher'
import Link from 'next/link'

const contactApps = [
  { name: 'Linkedin', svg: <SiLinkedin className='h-6 w-6 2xl:size-8' />, textColor: 'text-[#0376a8]', hover: 'hover:bg-[#0376a8] text-[#0376a8] hover:text-white', url: 'https://www.linkedin.com/in/facujoaquin/' },
  { name: 'Gmail', svg: <BiLogoGmail className='h-8 w-8 2xl:size-10' />, textColor: 'text-[#ea4335]', hover: 'hover:bg-[#ea4335] text-[#ea4335] hover:text-white', url: '#' },
  { name: 'Github', svg: <SiGithub className='h-8 w-8 2xl:size-10' />, textColor: 'text-[#241E20]', hover: 'hover:bg-[#241E20] text-[#241E20] hover:text-white', url: 'https://github.com/FacundoJoaquin' },
]

const Navbar = ({ position }) => {
  const [isEyeColor, setIsEyeColor] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { ui, setUi } = useAppContext();



  const toggleEyeColor = () => {
    setIsEyeColor((prevIsEyeColor) => !prevIsEyeColor);
    toggleHidden();
  };

  const toggleHidden = () => {
    setUi((prevUi) => ({ ...prevUi, hidden: !prevUi.hidden }));
  };



  return (
    <ContentContainer style={`${position} grid grid-cols-3 grid-rows-1 gap-x-4`}>
      <span className='col-span-2 b  flex justify-center items-center gap-x-4 border-r border-gray-300'>
        {contactApps.map((app, index) => (
          <Link href={app.url === '#' ? 'mailto:facundojoaquinn@gmail.com' : app.url } about={`Link to Facundo Joaquin ${app.name}`} key={index}>
            <div
              
              className={`h-12 w-12 grid place-items-center rounded-full border dark:border-darkSurface-300 border-gray-200 shadow-md sm:size-10 bg-white transition-all duration-300 cursor-pointer 2xl:size-16 ${app.textColor} ${app.hover}`}
            >
              {app.svg}
            </div>
          </Link>
        ))}
        <Link
        href={'https://drive.google.com/file/d/187BwXN0RZtdAaALCY6OAh4MiVdvvZ17R/view?usp=drive_link'}
        target='_BLANK'
        about='Link al CV de Facundo Joaquin - Link to Facundo Joaquin resume'
          className={`h-12 w-12 grid  place-items-center rounded-full border dark:border-darkSurface-300 border-gray-200 shadow-md bg-white transition-all duration-300 cursor-pointer 2xl:size-16 `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image src={ResumeColor} className='size-7 hover:scale-[1.1]  2xl:size-10 relative left-[0.1rem] transition-all duration-300 ease-in-out' alt='Curriculum vitae - Resume Facundo Joaquin' />
        </Link>
      </span>
      <span className='flex items-center justify-center gap-x-4'>
        <ThemeSwitcher />
        <div
          onClick={toggleEyeColor}
          className={`h-12 w-12 grid place-items-center rounded-full border dark:border-darkSurface-300 border-gray-200 shadow-md bg-white transition-all duration-300 cursor-pointer 2xl:size-[4rem]`}
        >
          {isEyeColor ? (
            <Image src={EyeColor} className='h-8 w-8' alt='' />
          ) : (
            <Image src={Eye} className='h-8 w-8' alt='' />
          )}
        </div>

      </span>

    </ContentContainer>
  )
}

export default Navbar