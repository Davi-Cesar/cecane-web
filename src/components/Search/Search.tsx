import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

interface ShelfPros {
    img: string;
    title: string;
    link: string;
}

export function Search() {
    return (
        <div className={styles.search}>
             <input type="text" id="txtBusca" placeholder="Buscar..."/>
             <img src="search3.png" id="btnBusca" alt="Buscar"/>
        </div>
    )
}