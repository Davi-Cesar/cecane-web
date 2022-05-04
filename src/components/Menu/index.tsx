import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";
import { menu as elementsMenu } from "./menu";



export function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const { asPath } = useRouter();
  function toggleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  const menu = elementsMenu.filter(child => child.parent === null);
  const sheets = elementsMenu.filter(sheet => sheet.parent != null);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img src="/images/favicon.svg" alt="Logo Cecane" />
          <h3 className={styles.titleContent}>
            Centro Colaborador em Alimentação e Nutrição Escolar - Universidade
            Federal do Rio Grande do Norte
          </h3>
        </div>

        <div
          onClick={() => toggleOpenMenu()}
          className={
            openMenu === true ? styles.mobileMenuOpen : styles.mobileMenu
          }
        >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <nav
          className={
            openMenu === false ? styles.navContainerClose : styles.navContainer
          }
        >   
            {menu.map((i) => (
                <ActiveLink activeClassName={styles.active} href={i.link} key={i.id}>
                    <a onClick={() => toggleOpenMenu()}>{i.name}</a>
                </ActiveLink>
            ))}
        </nav>
      </div>
    </header>
  );
}
