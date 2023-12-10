import React from 'react'
import Image from 'next/image';
import styles from "./page.module.scss";
import { Cormorant_SC, Poppins, Alegreya } from "next/font/google";

// Components
import Title from '@/components/Title/Title';

const coromont = Cormorant_SC({weight: ['600'], subsets: ['latin']});
const alegreya = Alegreya({weight: ['600'], subsets: ['latin']});
const poppins = Poppins({subsets: ['latin'], weight: ['200', '400', '500', '600']});

const page = () => {
  return (
    <main className={styles.app__about}>

      {/* Section 1 */}
      
      <section className={styles.about__section1}>
        <div className={styles.section1__center}>
          <div className={styles.section1__side1}>
            <Title title='Who We Are ?' />
            <p className={poppins.className}>We specialize in creating unique and functional spaces that reflect your personal style. We offer a wide range of services, from space planning and furniture selection to custom finishes and lighting design.</p>
          </div>
          <div className={styles.section1__side2}>
            <Image src="https://images.unsplash.com/photo-1615873968403-89e068629265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw1fHxpbnRlcmlvcnN8ZW58MHx8fHwxNzAyMjE2NDAwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt='About' width={400} height={380} />
          </div>
        </div>
      </section>
      
      {/* Section 1 */}

      {/* Section 2 */}

      <section className={styles.about__section2}>
        <div className={styles.section2__center}>

          <div className={styles.section2__main}>
            <Image src="https://images.unsplash.com/photo-1531776691428-a0096d20137c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw3fHxsYW1wc3xlbnwwfHx8fDE3MDIyMTc2Nzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="V&M" width={200} height={300} />
            <div className={styles.section2__detail}>
              <h3 className={alegreya.className}>Ideals</h3>
              <p className={poppins.className}>Highlighted case studies of specific projects, which can provide more in-depth information about your design process and the challenges and successes you faced.</p>
            </div>
            <Image src="https://images.unsplash.com/photo-1576185839275-57e9426fd1ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwxMnx8bGFtcHN8ZW58MHx8fHwxNzAyMjE3Njc4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="V&M"  width={200} height={300}/>
            <div className={styles.section2__detail}>
              <h3 className={alegreya.className}>Vision</h3>
              <p className={poppins.className}>Highlighted case studies of specific projects, which can provide more in-depth information about your design process and the challenges and successes you faced.</p>
            </div>
            <Image src="https://images.unsplash.com/photo-1592195986398-5484c0890b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwxNHx8bGFtcHN8ZW58MHx8fHwxNzAyMjE3Njc4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="V&M"  width={200} height={300}/>
          </div>

        </div>
      </section>

      {/* Section 2 */}

      {/* Section 3 */}

      <section className={styles.about__section3}>
        <div className={styles.section3__center}>

          <div className={styles.section3__side1}>
            <Image src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwzfHxzb2Zhc3xlbnwwfHx8fDE3MDIyMTg4NzN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="V&M"  width={360} height={380}/>
            <Image src="https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwxNXx8c29mYXN8ZW58MHx8fHwxNzAyMjE4ODczfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="V&M"  width={360} height={380}/>
          </div>
          <div className={` ${poppins.className} ${styles.section3__side2}`}>
            <Title title='Connect With Us' />
            <p className={poppins.className}>Highlighted case studies of specific projects, which can provide more in-depth information about your design process and the challenges and successes you faced.</p>
            <button type='button'>Contact Us</button>
          </div>

        </div>
      </section>

      {/* Section 3 */}

    </main>
  )
}

export default page