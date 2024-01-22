'use client'

import React, { useEffect, useRef, useState } from 'react';
import styles from './projects.module.css'
import ContentContainer from '../components/atoms/ContentContainer/ContentContainer'
import Image from 'next/image'
import Tuki from '../../../../public/tuki1.png'
import Vertis from '../../../../public/vertis.png'
import Router from '../../../../public/Router.svg'
import Pokeball from '../../../../public/pokeball.svg'
import Radio from '../../../../public/radio.svg'
import Ywg from '../../../../public/ywg.png'
import Pedidosya from '../../../../public/pedidosya.svg'
import { SiGithub, SiNetlify } from 'react-icons/si'
import Link from 'next/link'
import ContentTitle from '../components/atoms/ContentTitle/ContentTitle';
import { useAppContext } from '../../context';
import { RiEyeLine } from 'react-icons/ri';
import Modal from '../components/atoms/Modal/Modal'
const proyectsData = [
  {
    name: 'Tuki',
    tecnologies: 'React | Firebase | Redux | Tailwind',
    description: 'Aplicación web que te permite marcar distintos tipos de controles de transito.',
    github: 'https://github.com/FacundoJoaquin/tuuki',
    deploy: 'netlify',
    logo: Tuki,
    urlDeploy: 'https://main--remarkable-cucurucho-f08c98.netlify.app/',
    work: false,
    explained: '',
    size: 'w-9 2xl:w-16'
  },
  {
    name: 'Vertis',
    tecnologies: 'Sveltekit | Laravel | PostgreSQL | Docker | Tailwind',
    description: 'Aplicación web desarrollada para vender y gestionar la publicidad radial.',
    github: '#',
    deploy: 'netlify',
    logo: Vertis,
    urlDeploy: '',
    work: true,
    explained: 'Vertis es un proyecto cuya finalidad es la gestión, venta y producción de distintas pautas publicitarias. Consta de dos modulos, un sales module, que se encarga de documentar los clientes, ventas, disponibilidad y precios. Mientras que el production module busca facilitar el trabajo del operador de turno en cuanto las distintas publicidades diarías con sus respectivas caracteristicas.',
    size: 'size-12 relative -top-1 2xl:size-20 2xl:-top-2'
  },
  {
    name: 'Ms-olt',
    tecnologies: 'Python | Paramiko | Docker | Sveltekit | Tailwind ',
    description: 'Microservicio que entabla conexiones SSH a OLT y ejecutar comandos.',
    github: '#',
    deploy: 'netlify',
    logo: Router,
    urlDeploy: '#',
    work: true,
    explained: 'Ms-olt, o cómo lo conocen en mi trabajo -Facutuls-, es un microservicio que, mediante conexiones SSH busca recabar información en las OLT de ONUS, para también poder ejecutar distintos tipos de comandos sobre estas últimas.',
    size: 'size-8 2xl:size-12'
  },
  {
    name: 'Pokeno',
    tecnologies: 'React | Redux | Firebase',
    description: 'E-comerce ficticio estilo Pixel Art que emula la venta de Pokemon',
    github: 'https://github.com/FacundoJoaquin/Pokeno',
    deploy: 'netlify',
    logo: Pokeball,
    urlDeploy: 'https://frolicking-centaur-26c1c8.netlify.app/',
    work: false,
    explained: '',
    size: 'size-8 2xl:size-12'
  },
  {
    name: 'Reproductor radial',
    tecnologies: 'React',
    description: 'Reproductor de radio para la página de LU17 | Trelew Noticias | Paraiso 96.1',
    github: 'https://github.com/FacundoJoaquin/display-radio',
    deploy: 'netlify',
    logo: Radio,
    urlDeploy: 'https://dainty-tarsier-5f55ba.netlify.app/',
    work: false,
    explained: '',
    size: 'size-12 2xl:size-14'
  },
  {
    name: 'Calculadora Peya',
    tecnologies: 'HTML | CSS | JavaScript',
    description: 'Calculadora para repartidores que devuelve el valor a cobrar por realizar un pedido.',
    github: 'https://github.com/FacundoJoaquin/Calculadora-Peya/',
    deploy: 'netlify',
    logo: Pedidosya,
    urlDeploy: 'https://github.com/FacundoJoaquin/Calculadora-Peya/deployments/github-pages',
    work: false,
    explained: '',
    size: 'size-12 2xl:size-16'
  },
  {
    name: 'YWG Turismo',
    tecnologies: 'HTML | CSS',
    description: 'Página ficticia de agencia de turismo para el curso de Html y Css.',
    github: 'https://github.com/FacundoJoaquin/Calculadora-Peya/',
    deploy: 'netlify',
    logo: Ywg,
    urlDeploy: 'https://github.com/FacundoJoaquin/Calculadora-Peya/deployments/github-pages',
    work: false,
    explained: '',
    size: 'size-12 2xl:size-20 rounded-full'
  },

]

const Projects = ({ position }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null);
  const { ui, setUi } = useAppContext()

  const handleButtonClick = (index) => {
    setSelectedProject(proyectsData[index]);
    setShowModal(true);
    setUi((prevUi) => ({ ...prevUi, modal: true }));

  };

  useEffect(() => {
    const postScroll = document.getElementById("scrollable");
    let scrollingHorizontally = true;
  
    const smoothHorizontalScroll = (amount) => {
      let scrollAmount = 0;
      const step = 10; 
  
      const slideTimer = setInterval(() => {
        postScroll.scrollLeft += step * (amount < 0 ? -1 : 1);
        scrollAmount += Math.abs(step);
        if(scrollAmount >= Math.abs(amount)){
          clearInterval(slideTimer);
        }
      }, 25); 
    }
  
    const handleWheel = (event) => {
      if (scrollingHorizontally) {
        smoothHorizontalScroll(event.deltaY < 0 ? -100 : 100);
        event.preventDefault();
  
        if (postScroll.scrollLeft >= postScroll.scrollWidth - postScroll.clientWidth) {
          scrollingHorizontally = false;
          postScroll.style.overflowY = "auto";
        }
      }
    };
  
    postScroll.addEventListener("wheel", handleWheel);
  
    return () => {
      postScroll.removeEventListener("wheel", handleWheel);
    };
  }, []);

const handleCloseModal = () => {
  setShowModal(false);
  setUi((prevUi) => ({ ...prevUi, modal: false }));

}

  return (
    <ContentContainer style={`${position} w-full h-full px-6 py-4 overflow-hidden`}>
      <ContentTitle>Proyectos</ContentTitle>
      <div className={`${!ui.dark ? styles.darkScrollable : styles.scrollable} 2xl:gap-x-2`} id='scrollable'>
        {proyectsData.map((proyect, index) => {
          return (
            <article key={index} className='ml-2 min-w-[450px] h-full md:min-w-[500px] md:max-w-[500px] 2xl:min-w-[600px] 2xl:max-w-[600px] flex p-1 gap-x-1 2xl:gap-x-0'>
              <div className='min-w-16 max-w-16 2xl:min-w-24 2xl:max-w-24'>
                <div className={`${styles.container} size-14 rounded-full grid place-items-center overflow-hidden 2xl:size-20`}>

                  <Image alt={`Logo de ${proyect.name}}`} src={proyect.logo} className={`${proyect.size} `} />
                </div>
              </div>

              <span className=' flex flex-col justify-between gap-y-1 flex-grow-1'>
                <h2 className='text-xl font-semibold 2xl:text-3xl dark:text-black text-darkSurface-300 '>{proyect.name}</h2>
                <p className='text-sm 2xl:text-xl dark:text-black text-darkSurface-100'>{proyect.tecnologies}</p>
                <p className="2xl:text-2xl dark:text-black text-darkSurface-100">{proyect.description}</p>
                {proyect.work === true ? (
                  <button href={'#'} onClick={() => handleButtonClick(index)}
                    className='hover:scale-[1.1] grid place-items-center hover:text-black  transition-all duration-200 size-7  2xl:size-10 px-2'>
                    <RiEyeLine className='size-7 2xl:size-10 dark:text-[#333] text-darkSurface-300 hover:text-darkSurface-400' />
                  </button>
                ) : (
                  <><span className='flex gap-x-4'>
                    <Link href={proyect.github} className='hover:scale-[1.1] hover:text-black  transition-all duration-200 size-7  2xl:size-10 px-2'><SiGithub className='size-7 2xl:size-10 dark:text-[#333] text-darkSurface-300 hover:text-darkSurface-400' href={`Repositorio de github de ${proyect.name}`} /> </Link>
                    <Link href={proyect.urlDeploy} className='hover:scale-[1.1] hover:text-black transition-all duration-200 size-7 2xl:size-10 px-2'><SiNetlify className='size-7 2xl:size-10 dark:text-[#333] text-darkSurface-300 hover:text-darkSurface-400' href={`Repositorio de github de ${proyect.name}`} /> </Link>
                  </span> </>
                )}
              </span>
            </article >
          )
        })}
        {showModal && selectedProject && (
          <Modal close={handleCloseModal}>
            <p>Lamentablemente, al estar en producción no puedo mostrartelo.</p>
            <p>{selectedProject.explained}</p>
          </Modal>
        )}


      </div >
    </ContentContainer >
  )
}

export default Projects


