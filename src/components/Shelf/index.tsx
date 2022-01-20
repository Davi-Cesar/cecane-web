/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

interface ShelfPros {
    img: string;
    title: string;
    link: string;
}

export function Shelf({img, title, link}:ShelfPros) {
    return (
        <div className={styles.shelf}>
            <img src={img} alt={title} />
            <p>
                {title}
            </p>
            <div className={styles.shelfFooter}>
                <Link href={link}>
                    <button>
                        Download
                    </button>
                </Link>
            </div>
        </div>
    )
}