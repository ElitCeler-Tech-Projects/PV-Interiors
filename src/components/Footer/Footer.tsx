import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Footer.module.scss";
import { Poppins } from 'next/font/google';

// React Icons
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";

const poppins = Poppins({subsets: ['latin'], weight: ['200', '400', '500', '600']});

const Footer = () => {
  const { app__footer, footer__center, footer__side1, footer__side, copyright__sec } = styles;

  return (
    <footer className={`${app__footer} ${poppins.className}`}>

        <div className={styles.elitceler__mention}>  
            Developed by <a href="https://elitceler.com/" target='_blank' rel='noopener noreferrer'>Elitceler Technologies</a>
            <Image src={'/images/Elitceler.svg'} alt="Elitceler" width={80} height={74} />
        </div>

      <div className={footer__center}>

        {/* Side 1 */}

        <div className={footer__side1}>
            <Image src={'/images/Logo.svg'} alt="PV Interiors" width={200} height={120} />
            <p>Experience the artistry of PV Interiors through our exceptional design projects, where every space becomes a masterpiece of style and functionality.</p>
        </div>

        {/* Side 1 */}

        {/* Side 2 */}

        <div className={footer__side}>
          <p>Sitemap</p>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/aboutus">About Us</Link></li>
            <li><Link href="/#getintouch">Contact</Link></li>
          </ul>
        </div>

        {/* Side 2 */}

        {/* Side 3 */}
        
        <div className={footer__side}>
          <p>Collection</p>
          <ul>
            <li><Link href="/services">Concept</Link></li>
            <li><Link href="/services">Antiques</Link></li>
            <li><Link href="/services">Living Room</Link></li>
            <li><Link href="/services">Bathroom</Link></li>
            <li><Link href="/services">Kitchen</Link></li>
          </ul>
        </div>

        {/* Side 3 */}

        {/* Side 4 */}
        
        <div className={footer__side}>
          <p>Connect with Us</p>
          <ul>
            <li><a href="#" target='_blank' rel='noopener noreferrer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, obcaecati?</a></li>
            <li><a href="#" target='_blank' rel='noopener noreferrer'><FaPhoneAlt fontSize={21} color='#FFF'/> +91 9999999999</a></li>
            <li><a href="#" target='_blank' rel='noopener noreferrer'><FaInstagram fontSize={21} color='#FFF'/> @pvinteriors</a></li>
          </ul>
        </div>

        {/* Side 4 */}

      </div>

      <div className={copyright__sec}>
        <p>&copy; 2023 PV Interiors. All Right Reserved</p>
      </div>

    </footer>
  )
}

export default Footer