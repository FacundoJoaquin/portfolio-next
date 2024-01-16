'use client'

import AboutMe from './ui/AboutMe/AboutMe'
import ContentContainer from './ui/components/atoms/ContentContainer/ContentContainer'
import IconsBg from './ui/components/molecules/IconsBg'
import Navbar from './ui/nav/Navbar'
import Presentation from './ui/presentation/Presentation'
import Projects from './ui/projects/Projects'
import Music from './ui/Music/Music.jsx'
import Skills from './ui/Skills/Skills.jsx'
import Certifications from './ui/Certifications/Certifications.jsx'
import ThemeSwitcher from './ui/components/molecules/ThemeSwitcher/ThemeSwitcher'

import { useAppContext } from './context'
import { useEffect } from 'react'




export default function Home() {
  const { ui, setUi } = useAppContext(); 


  return (
    <main className="grid grid-rows-layout overflow-y-auto overflow-x-hidden grid-cols-3 md:grid-rows-12 p-6 md:grid-cols-10 h-full w-full xl:overflow-hidden 2xl:p-20 gap-6">
      <IconsBg />
      <Presentation position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-1 col-span-full row-span-2 md:col-start-1 md:col-span-4 md:row-start-1 md:row-span-3`} />
      <AboutMe position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-3 col-span-2 row-span-4 row-span md:col-start-5 md:col-span-3 md:row-start-7 md:row-span-4`} />
      <Projects position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-7 col-span-full row-span-4 md:col-start-5 md:col-span-full md:row-span-6`} />
      <Skills position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-12 row-end-[30] col-span-full row-span-4 md:col-start-1 md:col-span-3 md:row-start-4 md:row-span-full `} />
      <Music position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-3 row-span-4 md:col-start-4 md:col-span-1 md:row-start-4 md:row-span-7`} />
      <Navbar position={`row-start-11 col-span-full  md:col-start-4 md:col-span-4 md:row-start-11 md:row-span-full `} />
      <Certifications position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-14 row-span-11  md:col-start-8 col-span-full md:row-start-7 md:row-span-full `} />

    </main>
  )
}

