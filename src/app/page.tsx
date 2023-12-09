import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./page.module.scss";
import { Cormorant_SC, Poppins, Alegreya } from "next/font/google";

// Components & Data
import { OurServicesType } from '@/types';
import Title from '@/components/Title/Title';
import { CaseStudiesHome, ourServicesHome } from '@/data';
import Testimonials from '@/components/Testimonials/Testimonials';

const coromont = Cormorant_SC({weight: ['600'], subsets: ['latin']});
const alegreya = Alegreya({weight: ['600'], subsets: ['latin']});
const poppins = Poppins({subsets: ['latin'], weight: ['200', '400', '500', '600']});

const page = () => {
  
  const { app__home, home__banner, banner__pic, banner__text, home__section2, section2__center, home__section3, section3__center, section3__main, home__section4, section4__center, section4__main, home__section5, contact__pic, contact__details, home__section6, section6__center } = styles;

  return (
    <main className={app__home}>

      {/* Section 1 - Banner */}

      <section className={`${home__banner} ${coromont.className}`}>
        <div className={banner__pic}>
          <Image src="/dummies/D1.jpeg" alt='Banner' width={1200} height={700}/>
        </div>
        <div className={banner__text}>
          <p>
            Your Style,<br/>
            Our Expertise
          </p>
        </div>
      </section>

      {/* Section 1 - Banner */}

      {/* Section 2 - Intital Text */}

      <section className={`${home__section2} ${poppins.className}`}>
        <div className={section2__center}>
          <h2>Create Your Dream Home with Our Experienced Interior Designers</h2>
          <p>We specialize in creating unique and functional spaces that reflect your personal style. We offer a wide range of services, from space planning and furniture selection to custom finishes and lighting design.</p>
        </div>
      </section>

      {/* Section 2 - Intital Text */}

      {/* Section 3 - Our Services */}

      <section className={`${home__section3} ${poppins.className}`}>
        <div className={section3__center}>
          <Title title='Our Services' />
          <article className={section3__main}>
            {
              ourServicesHome.map(service => {
                return (
                  <ViewImageOn key={service.id} {...service} />
                )
              })
            }
          </article>
        </div>
      </section>

      {/* Section 3 - Our Services */}

      {/* Section 4 - Our Highlited Case Studies */}

      <section className={`${home__section4} ${poppins.className}`}>
        <div className={section4__center}>
            <Title title='Highlighted Case Studies' />
            <p>Highlighted case studies of specific projects, which can provide more in-depth information about your design process and the challenges and successes you faced.</p>
            <div className={`${section4__main} ${alegreya.className}`}>
              {
                CaseStudiesHome.map(study => {
                  return (
                    <ViewImageOn key={study.id} {...study}/>
                  )
                })
              }
            </div>
        </div>
      </section>

      {/* Section 4 - Our Highlited Case Studies */}

      {/* Section 5 - Get In Touch */}

      <section className={home__section5} id='getintouch'>
        <div className={contact__pic}>
          <Image src="/dummies/D2.jpeg" alt='Contact' width={1200} height={700}/>
        </div>
        <div className={contact__details}>
          <h2 className={coromont.className}>GET IN TOUCH</h2>
          <p className={poppins.className}>Designing Your Perfect Space</p>
          <button type='button'>Contact Us</button>
        </div>
      </section>

      {/* Section 5 - Get In Touch */}

      {/* Section 6 - Testimonials */}

      <section className={home__section6}>
        <div className={section6__center}>
          <Title title='Testimonials' />
          <Testimonials />
        </div>
      </section>

      {/* Section 6 - Testimonials */}

    </main>
  )
}

export default page;

const ViewImageOn = ({ serviceReference, mainImage, imageText }: OurServicesType) => {
  return (
    <Link href={serviceReference} className={styles.each__service}>
      <div className={styles.service__imgload}>
        <Image src={mainImage} alt={imageText} width={360} height={320} />
      </div>
      <p>{imageText}</p>
    </Link>
  )
}