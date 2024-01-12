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




export default function Home() {


  return (
    <main className="grid grid-rows-12 p-6 grid-cols-10 h-full w-full overflow-hidden 2xl:p-20 gap-6">
      <IconsBg />
      <Presentation position={'col-start-1 col-span-4 row-start-1 row-span-3'}/>
      <AboutMe position={'col-start-5 col-span-3 row-start-7 row-span-4'}/>
      <Projects position={'col-start-5 col-span-full row-span-6'}/>
      <Music position={'col-start-4 col-span-1 row-start-4 row-span-7'}/>	
      <Navbar position={'col-start-4 col-span-4 row-start-11 row-span-full '}/>
      <Skills position={'col-start-1 col-span-3 row-start-4 row-span-full '}/>
      <Certifications position={'col-start-8 col-span-full row-start-7 row-span-full '}/>
      
    </main>
  )
}

