import React from 'react'
import Image from 'next/image';
import styles from "./page.module.scss";
import { Cormorant_SC, Poppins, Alegreya } from "next/font/google";
import { Collections, Concepts, ServiceCollections } from '@/data';

// Components
import Title from '@/components/Title/Title';

const alegreya = Alegreya({weight: ['600'], subsets: ['latin']});
const coromont = Cormorant_SC({weight: ['600'], subsets: ['latin']});
const poppins = Poppins({subsets: ['latin'], weight: ['200', '400', '500', '600']});

const page = () => {

  const { app__services, services__section1, section1__banner, services__section2, section2__center, services__section3, section3__center, services__section4, section4__center } = styles;

  return (
    <main className={app__services}>

      {/* Section 1 - Banner */}
      
      <section className={services__section1}>
        <div className={section1__banner}>
          <Image src="/dummies/D3.jpeg" alt="Services" width={1200} height={750} />
        </div>
        <p className={coromont.className}>A Symphony of Style: Signature Touch in Every Detail</p>
      </section>

      {/* Section 1 - Banner */}

      {/* Section 2 - Collections */}

      <section className={services__section2}>
        <Title title='Collections' />
        <div className={section2__center}>
          {
            Collections.map(item => <Image key={item.id} src={item.image} alt={item.imageText} width={240} height={280}/>)
          }
        </div>
      </section>

      {/* Section 2 - Collections */}

      {/* Section 3 - Concepts */}

      <section className={services__section3}>
        <Title title='Concepts'/>
        <div className={section3__center}>
          {
            Concepts.map(item => {
              return (
                <div className={styles.each__concept} key={item.id}>
                  <p className={poppins.className}>{item.conceptDetail}</p>
                  <Image src={item.conceptImage} alt='Concepts' width={400} height={380} />
                </div>
              )
            })
          }
        </div>
      </section>

      {/* Section 3 - Concepts */}

      {/* Sections About Concepts */}

      {
        ServiceCollections.map((collection) => {
          return (
            <section key={collection.id} className={services__section4}>
              <Title title={collection.collectionName} />
              <div className={section4__center}>
                {
                  collection.collectionImages.map((img, index) => {
                    return <Image src={img} alt={collection.collectionName} key={index} width={300} height={320}/>
                  })
                }
              </div>
            </section>
          )
        })
      }

      {/* Sections About Concepts */}

    </main>
  )
}

export default page