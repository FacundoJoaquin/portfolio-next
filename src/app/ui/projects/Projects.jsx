import React, { useEffect, useRef, useState } from 'react';
import styles from './projects.module.css'
import ContentContainer from '../components/atoms/ContentContainer/ContentContainer'
import Image from 'next/image'
import Tuki from '../../../../public/tuki1.png'
import Vertis from '../../../../public/vertis.png'
import Router from '../../../../public/Router.svg'
import Pokeball from '../../../../public/pokeball.svg'
import Radio from '../../../../public/radio.svg'
import Pedidosya from '../../../../public/pedidosya.svg'
import { SiGithub, SiNetlify } from 'react-icons/si'
import Link from 'next/link'
import ContentTitle from '../components/atoms/ContentTitle/ContentTitle';

const proyectsData = [
  {
    name: 'Tuki',
    tecnologies: 'React | Firebase | Redux | Tailwind',
    description: 'Aplicación web que te permite marcar distintos tipos de controles de transito.',
    github: '#',
    deploy: 'netlify',
    logo: Tuki,
    size: 'w-9 2xl:w-16'
  },
  {
    name: 'Vertis',
    tecnologies: 'Sveltekit | Laravel | PostgreSQL | Docker | Tailwind',
    description: 'Aplicación web desarrollada para vender y gestionar la publicidad radial.',
    github: '#',
    deploy: 'netlify',
    logo: Vertis,
    size: 'size-12 relative -top-1 2xl:size-20 2xl:-top-2'
  },
  {
    name: 'Ms-olt',
    tecnologies: 'Python - Flask | Paramiko | Docker | Sveltekit | Tailwind ',
    description: 'Microservicio que entabla conexiones SSH a OLT y ejecutar comandos.',
    github: '#',
    deploy: 'netlify',
    logo: Router,
    size: 'size-8 2xl:size-12'
  },
  {
    name: 'Pokeno',
    tecnologies: 'React | Redux | Firebase',
    description: 'E-comerce ficticio estilo Pixel Art que emula la venta de Pokemon',
    github: '#',
    deploy: 'netlify',
    logo: Pokeball,
    size: 'size-8 2xl:size-12'
  },
  {
    name: 'Reproductor radial',
    tecnologies: 'React',
    description: 'Reproductor de radio para la página de LU17 | Trelew Noticias | Paraiso 96.1',
    github: '#',
    deploy: 'netlify',
    logo: Radio,
    size: 'size-12 2xl:size-14'
  },
  {
    name: 'Calculadora Peya',
    tecnologies: 'HTML | CSS | JavaScript',
    description: 'Calculadora para repartidores que devuelve el valor a cobrar por realizar un pedido.',
    github: '#',
    deploy: 'netlify',
    logo: Pedidosya,
    size: 'size-12 2xl:size-16'
  },

]

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

const Projects = ({ position }) => {
  const scrollRef = useHorizontalScroll();

  return (
    <ContentContainer style={`${position} bg-red-500 w-full h-full px-6 py-4 overflow-hidden`}>
      <ContentTitle>Proyectos</ContentTitle>
      <div className={`${styles.scrollable} 2xl:gap-x-2`} >
        {proyectsData.map((proyect, index) => {
          return (
            <article ref={scrollRef} key={index} className='ml-2 h-full md:min-w-[500px] md:max-w-[500px] 2xl:min-w-[600px] 2xl:max-w-[600px] flex p-1 gap-x-1 2xl:gap-x-0'>
              <div className='min-w-16 max-w-16 2xl:min-w-24 2xl:max-w-24'>
                <div className={`${styles.container} size-14 rounded-full grid place-items-center overflow-hidden 2xl:size-20`}>

                  <Image alt={`Logo de ${proyect.name}}`} src={proyect.logo} className={`${proyect.size} `} />
                </div>
              </div>

              <span className=' flex flex-col justify-between gap-y-1 flex-grow-1'>
                <h2 className='text-xl font-medium 2xl:text-3xl'>{proyect.name}</h2>
                <p className='text-sm 2xl:text-xl'>{proyect.tecnologies}</p>
                <p className="2xl:text-2xl">{proyect.description}</p>
                <span className='flex gap-x-4'>
                  <Link href={proyect.github} className='hover:scale-[1.1] hover:text-black transition-all duration-200 size-7  2xl:size-10 px-2'><SiGithub className='size-7 2xl:size-10 text-[#333]' href={`Repositorio de github de ${proyect.name}`} /> </Link>
                  <Link href={'#'} className='hover:scale-[1.1] hover:text-black transition-all duration-200 size-7 2xl:size-10 px-2'><SiNetlify className='size-7 2xl:size-10 text-[#333]' href={`Repositorio de github de ${proyect.name}`} /> </Link>
                </span>
              </span>
            </article>
          )
        })}



      </div>
    </ContentContainer>
  )
}

export default Projects


