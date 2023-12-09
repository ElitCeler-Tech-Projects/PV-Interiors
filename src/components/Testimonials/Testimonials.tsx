"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "./Testimonials.module.scss";
import React, {useState, useEffect} from 'react';

// Types and Data
import { Testimonials as Reviews } from '@/data';

const poppins = Poppins({subsets: ['latin'], weight: ['400']});

const Testimonials = () => {

    const [totalReview] = useState(Reviews.length);
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((current: number) => {
                if (current === totalReview - 1) {
                    return 0;
                }
                return current + 1;
            })
        }, 8000);
        return () => clearInterval(interval);
    }, [totalReview, currentReview]);

    return (
        <article className={styles.reviews}>
            <div className={styles.each__review}>
                <Image src={Reviews[currentReview].reviewAbout} alt={'Product'} width={400} height={400}/>
                <div className={styles.customer__details}>
                    <Image src={Reviews[currentReview].curstomerPic} alt="Customer" width={180} height={180}/>
                    <p className={poppins.className}>{Reviews[currentReview].customerReview}</p>
                </div>
            </div>
            <div className={styles.review__toggle}>
                {
                    Array.from({length: totalReview}).map((_, index) => {
                        return <button type="button" className={`${index === currentReview && styles.active__review}`} key={index} aria-label={(index + 1).toString()} title={(index + 1).toString()} onClick={() => {
                            setCurrentReview(index);
                        }}></button>
                    })
                }
            </div>
        </article>
    )
}

export default Testimonials