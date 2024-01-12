import React from 'react'
import styles from './ContentContainer.module.css'
const ContentContainer = ({children, style}) => {
  return (
    <section className={`${styles.container} ${style}`}>
        {children}
    </section>
  )
}

export default ContentContainer