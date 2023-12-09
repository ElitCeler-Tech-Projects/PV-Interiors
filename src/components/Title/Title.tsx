import React from 'react'
import styles from "./Title.module.scss";
import { Cormorant_SC } from 'next/font/google';

const cormorant = Cormorant_SC({weight: ['700'], subsets: ['latin']})

const Title = ({title}: {title: string}) => {
  return (
    <h1 className={`${styles.title} ${cormorant.className}`}>{title}</h1>
  )
}

export default Title