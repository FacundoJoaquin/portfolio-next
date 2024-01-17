import React from 'react'
import ContentContainer from '../components/atoms/ContentContainer/ContentContainer'
import styles from './AboutMe.module.css'
import ContentTitle from '../components/atoms/ContentTitle/ContentTitle'
import { useAppContext } from '../../context'

const AboutMe = ({ position }) => {
  const {ui} = useAppContext()

  return (
    <ContentContainer style={`${position} pl-6 pt-4 overflow-hidden`}>
      <ContentTitle>Sobre mi</ContentTitle>
      <div className={`overflow-y-auto  flex flex-col gap-y-2 lg:text-xl ${ui.dark ? styles.darkBlurContainer : styles.blurContainer}`}>

        <p className=' dark:text-darkSurface-100 '>
          Programador que busca desarrollar para seres humanos.
        </p>
        <p className='mb-4 dark:text-darkSurface-100'>
          Actualmente me encuentro trabajando para Red Uno, empresa provedora de internet y radiocomunicaciones, úbicada en la ciudad de Puerto Madryn, Chubut.
        </p>
      </div>
    </ContentContainer>
  )
}

export default AboutMe
