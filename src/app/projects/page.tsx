"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./page.module.scss";
import { Alegreya, Cormorant_SC, Poppins } from 'next/font/google';

// Components & Data
import Title from '@/components/Title/Title';
import { Architecture, ProjectsCaseStudies, ProjectsGallery } from '@/data';

// React Icons
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const alegreya = Alegreya({weight: ['600'], subsets: ['latin']});
const coromont = Cormorant_SC({weight: ['600'], subsets: ['latin']});
const poppins = Poppins({subsets: ['latin'], weight: ['200', '400', '500', '600']});

const Projects = () => {

  const [currentArchPic, setCurrentArchPic] = useState<number>(1);
  const toggleArchitecture = (toggle: string): void => {
    if (toggle === 'Next') {
      setCurrentArchPic((current: number) => {
        return current === Architecture.length ? 1 : current + 1;
      })
    }
    if (toggle === 'Prev') {
      setCurrentArchPic((current: number) => {
        return current === 1 ? Architecture.length : current - 1;
      });
    }
  }

  return (
    <main className={styles.app__projects}>

      {/* Banner */}

      <section className={styles.projects__section1}>
        <div className={styles.section1__banner}>
          <Image src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwxfHxpbnRlcmlvcnN8ZW58MHx8fHwxNzAyMzEyNzY5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Projects" width={1200} height={700} />
        </div>
        <div className={styles.section1__details}>
          <h1 className={coromont.className}>Elevate Your Space</h1>
          <p className={poppins.className}>Experience the artistry of PV Interiors through our exceptional design projects, where every space becomes a masterpiece of style and functionality</p>
        </div>
      </section>

      {/* Banner */}

      {/* Section 2 - Our Gallery */}

      <section className={styles.projects__section2}>
        <Title title='Our Gallery' />
        <div className={styles.section2__center}>
          {
            ProjectsGallery.map((item) => {
              return <Image key={item.id} src={item.mainImage} alt={item.imageText} width={400} height={420} />
            })
          }
        </div>
      </section>

      {/* Section 2 - Our Gallery */}

      {/* Section 3 - Architetcure */}

      <section className={styles.projects__section3}>
        <Title title='Architecture' />
        <div className={styles.section3__main}>
          {
            Architecture.map((item) => {
              return <Image style={{ transform: `translateX(-${(currentArchPic - 1) * 100}%)` }} src={item.mainImage} alt={item.imageText} key={item.id} width={1200} height={780} />
            })
          }
          <div className={styles.section3__toggle}>
            <button onClick={(e) => {toggleArchitecture(e.currentTarget.title)}} type="button" title='Prev' aria-label='Previous'><MdArrowBackIos fontSize={36} /></button>
            <button onClick={(e) => {toggleArchitecture(e.currentTarget.title)}} type="button" title='Next' aria-label='Next'><MdArrowForwardIos fontSize={36} /></button>
          </div>
        </div>
      </section>

      {/* Section 3 - Architecture */}

      {/* Section 4 - Case Studies */}

      <section className={styles.projects__section4}>
        <Title title='Case Studies' />
        <div className={styles.section4__center}>
          {
            ProjectsCaseStudies.map((item) => {
              return (
                <article key={item.id} className={styles.each__study}>
                  <div className={styles.study__pics}>
                    <Image src={item.beforePic} alt='Before' width={420} height={400} />
                    <Image src={item.afterPic} alt='After' width={420} height={400} />
                  </div>
                  <div className={styles.study__details}>
                    <h3 className={alegreya.className}>{item.studyTitle}</h3>
                    <p className={poppins.className}>{item.studyDescription}</p>
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>

      {/* Section 4 - Case Studies */}

    </main>
  )
}

export default Projects;