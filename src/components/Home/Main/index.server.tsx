import React from 'react'

// Componets
import Quize from '../Quize/index.client';

// Styles
import styles from './index.module.sass';


const Main = () => {
  return (
    <div className={`${styles.main} container`}>
        <Quize />
    </div>
  )
}

export default Main