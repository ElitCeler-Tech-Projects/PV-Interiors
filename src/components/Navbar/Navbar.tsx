"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Navbar.module.scss";
import { Alegreya } from "next/font/google";
import { usePathname } from 'next/navigation';

// React Icons
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const alegreya = Alegreya({weight: ['400'], subsets: ['latin']});

const Navbar = () => {

    const pathName = usePathname();
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const {app__navbar, nav__center, nav__smscreen, nav__menu, nav__logo, page__active, nav__smmenu} = styles;

    useEffect(() => {
        let interval = setInterval(() => {
            if (window.scrollY > 200) {
                setShowMenu(false);
            }
        }, 1);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className={`${alegreya.className} ${app__navbar}`}>
            <div className={nav__center}>

                <div className={nav__smscreen}>
                    <button type='button' title='Menu' aria-label='Menu' onClick={() => {setShowMenu(true);}}><CgMenu/></button>
                </div>

                <ul className={nav__menu}>
                    <li><Link className={`${pathName.includes('/services') && page__active}`} href="/services">Services</Link></li>
                    <li><Link className={`${pathName.includes('/projects') && page__active}`} href="/projects">Projects</Link></li>
                </ul>

                <div className={nav__logo}>
                    <Link href="/">
                        <Image priority src="/images/Logo.svg" alt='PV Interiors' width={150} height={120} />
                    </Link>
                </div>

                <ul className={nav__menu}>
                    <li><Link className={`${pathName.includes('/aboutus') && page__active}`} href="/aboutus">About</Link></li>
                    <li><Link href={'/#getintouch'} className={`${pathName.includes('#getintouch') && page__active}`}>Contact</Link></li>
                </ul>

                <ul className={`${nav__smmenu} ${showMenu && styles.show__menu}`}>
                    <li onClick={() => {setShowMenu(false)}}><Link href="/services">Services</Link></li>
                    <li onClick={() => {setShowMenu(false)}}><Link href="/projects">Projects</Link></li>
                    <li onClick={() => {setShowMenu(false)}}><Link href="/aboutus">About</Link></li>
                    <li onClick={() => {setShowMenu(false)}}><Link href="/#getintouch">Contact</Link></li>
                    <li><button type='button' aria-label='Close' title='Close' onClick={() => {setShowMenu(false)}}><AiOutlineClose/></button></li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar