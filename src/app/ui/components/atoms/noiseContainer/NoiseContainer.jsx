import React from 'react'
import styles from './NoiseContainer.module.css'

const NoiseContainer = ({children, style}) => {


  return (
    <div 
      className={`
        ${styles.NoiseContainer} 
        ${style}
      `}>
      {children}
    </div>
  )
}

export default NoiseContainer