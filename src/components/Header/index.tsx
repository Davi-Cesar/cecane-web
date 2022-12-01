import React, { useState } from "react";
import { Nav } from "../Nav";

import styles from "./styles.module.scss";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleOpenMenu() {
    setOpenMenu(!openMenu);
  }

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
        <Nav onChange={toggleOpenMenu} openMenu={openMenu}></Nav>
      </div>
    </header>
  );
}
