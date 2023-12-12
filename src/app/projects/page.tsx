import React from 'react'
import Image from 'next/image';
import styles from "./page.module.scss";
import { Alegreya, Cormorant_SC, Poppins } from 'next/font/google';

const alegreya = Alegreya({weight: ['600'], subsets: ['latin']});
const coromont = Cormorant_SC({weight: ['600'], subsets: ['latin']});
const poppins = Poppins({subsets: ['latin'], weight: ['200', '400', '500', '600']});

const page = () => {
  return (
    <main className={styles.app__projects}>

      <section className={styles.projects__section1}>
        <div className={styles.section1__banner}>
          <Image src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwxfHxpbnRlcmlvcnN8ZW58MHx8fHwxNzAyMzEyNzY5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Projects" width={1200} height={700} />
        </div>
        <div className={styles.section1__details}>
          <h1 className={coromont.className}>Elevate Your Space</h1>
          <p className={poppins.className}>Experience the artistry of PV Interiors through our exceptional design projects, where every space becomes a masterpiece of style and functionality</p>
        </div>
      </section>

    </main>
  )
}

export default page