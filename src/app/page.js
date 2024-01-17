'use client'

import AboutMe from './ui/AboutMe/AboutMe'
import Certifications from './ui/Certifications/Certifications.jsx'
import Music from './ui/Music/Music.jsx'
import Skills from './ui/Skills/Skills.jsx'
import IconsBg from './ui/components/molecules/IconsBg'
import Navbar from './ui/nav/Navbar'
import Presentation from './ui/presentation/Presentation'
import Projects from './ui/projects/Projects'

import { useAppContext } from './context'




export default function Home() {
  const { ui, setUi } = useAppContext();
  

  return (
    <main className={`${ui.hidden ? 'overflow-y-hidden h-dvh ' : ''} grid select-none grid-rows-layout overflow-y-auto overflow-x-hidden grid-cols-3 lg:grid-rows-12 p-6 lg:grid-cols-10 h-full w-full xl:overflow-hidden 2xl:p-20 gap-6 `}>
      <IconsBg />
      <Presentation position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-1 col-span-full row-span-2 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-3`} />
      <AboutMe position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-3 col-span-2 row-span-4 row-span lg:col-start-5 lg:col-span-3 lg:row-start-7 lg:row-span-4`} />
      <Projects position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-7 col-span-full row-span-4 lg:col-start-5 lg:col-span-full lg:row-span-6`} />
      <Skills position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-11 row-end-[30] col-span-full row-span-4 lg:col-start-1 lg:col-span-3 lg:row-start-4 lg:row-span-full `} />
      <Music position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-3 row-span-4 lg:col-start-4 lg:col-span-1 lg:row-start-4 lg:row-span-7`} />

      <Certifications position={`${ui.hidden ? 'opacity-0 transition-opacity duration-500 ease-in-out' : 'opacity-100 transition-opacity duration-500 ease-in-out'} row-start-14 row-span-11  lg:col-start-8 col-span-full lg:row-start-7 lg:row-span-full `} />
      <Navbar position={`row-start-auto col-span-full row-span-4 lg:col-start-4 lg:col-span-4 lg:row-start-11 lg:row-span-full `} />
    </main>
  )
}