/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";

interface GalleryPros {
  img: string;
  title: string;
}

export function Gallery({ img, title }: GalleryPros) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function handleOpenModal() {
    setIsOpenModal(!isOpenModal);
  }
  function handleCloseModal() {
    setIsOpenModal(false);
  }
  return (
    <>
    <div className={styles.Gallery}>
      <img src={img} alt={title} onClick={handleOpenModal} />
      <div className={styles.down}>
        <p>{title}</p>
      </div>
    </div>
    <Modal
      isOpen={isOpenModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      className={styles.reactModalContent}
      overlayClassName={styles.reactModaOverlay}
      style={
        { content: {
          overflow: 'hidden',
          top: '40px',
          left: '150px',
          right: '150px',
          bottom: '40px',
          borderRadius: '0px',  
          padding: '0'
        } }
      }
      
      >
    <div className={styles.galleryModal}>
      <img src={img} alt={title} className={styles.imgModal} onClick={handleOpenModal} />
      <div className={styles.down}>
        <p>{title}</p>
      </div>
    </div>
    </Modal>
    </>
  );
}
