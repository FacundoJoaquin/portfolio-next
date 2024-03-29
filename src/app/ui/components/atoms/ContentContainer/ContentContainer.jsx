import React, { useEffect } from 'react'
import styles from './ContentContainer.module.css'
import { useAppContext } from '../../../../context';
const ContentContainer = ({children, style}) => {
  const { ui } = useAppContext();
  
  return (
    <section
      className={`${ui.modal ? (ui.dark ? styles.containerModal : styles.darkContainerModal) : (!ui.dark ? styles.darkContainer : styles.container)} ${style}`}
    >
        {children}
    </section>
  )
}

export default ContentContainer