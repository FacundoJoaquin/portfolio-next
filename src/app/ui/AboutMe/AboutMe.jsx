import React from 'react'
import ContentContainer from '../components/atoms/ContentContainer/ContentContainer'
import styles from './AboutMe.module.css'
import ContentTitle from '../components/atoms/ContentTitle/ContentTitle'

const AboutMe = ({ position }) => {
  return (
    <ContentContainer style={`${position} px-6 pt-4 overflow-hidden`}>
      <ContentTitle>Sobre mi</ContentTitle>
      <div className={`overflow-y-auto flex flex-col gap-y-2 lg:text-xl ${styles.blurContainer}`}>

        <p className=''>
          Programador que busca desarrollar para seres humanos.
        </p>
        <p className='mb-4'>
          Actualmente me encuentro trabajando para Red Uno, empresa provedora de internet y radiocomunicaciones, úbicada en la ciudad de Puerto Madryn, Chubut.
        </p>
      </div>
    </ContentContainer>
  )
}

export default AboutMe
