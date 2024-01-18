import React from 'react'
import ContentContainer from '../components/atoms/ContentContainer/ContentContainer'
import styles from './AboutMe.module.css'
import ContentTitle from '../components/atoms/ContentTitle/ContentTitle'
import { useAppContext } from '../../context'

const AboutMe = ({ position }) => {
  const { ui } = useAppContext()

  return (
    <ContentContainer style={`${position} pl-6 pt-4 overflow-hidden`}>
      <ContentTitle>Sobre mi</ContentTitle>
      <div className={`overflow-y-auto  flex flex-col gap-y-3 lg:text-xl ${!ui.dark ? styles.darkBlurContainer : styles.blurContainer}`}>

        <p className=' dark:text-black text-darkSurface-100  pr-6'>
          Programador que busca desarrollar para seres humanos.
        </p>
        <p className='mb-4 dark:text-black text-darkSurface-100 pr-6'>
          Actualmente trabajando cómo Fullstack para Red Uno, empresa provedora de internet y radiocomunicaciones.
        </p>
        <p className='mb-4 dark:text-black text-darkSurface-100 pr-6'>
          Actualmente aprendiendo Next Js  e Ingles.
        </p>
      </div>
    </ContentContainer>
  )
}

export default AboutMe
