import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./styles.module.scss";
export function SwiperComponent() {
  return (
    <>
      <div className={styles.container}>
        <Swiper
          className={styles.swiper}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/Carrossel/foto1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/Carrossel/IMG_1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/Carrossel/IMG_2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
