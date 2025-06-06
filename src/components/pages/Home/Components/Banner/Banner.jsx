
import styles from "./banner.module.css";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";

// img
import pic4 from "/assets/banner/banner-1.webp";

export default function Banner() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.banner}>
        <section className={styles.banner_items}>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={{
              nextEl: ".button-next-slide-banner",
              prevEl: ".button-prev-slide-banner",
            }}
            loop={true}
            //   autoplay={{
            //     delay: 3000,
            //   }}
            speed={1600}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <section className={styles.bannerContent}>
                <h3 className="firstTitle">Custom Software and ERP Solutions Company</h3>
                <p className="pTag">
                  We provide a professional service for private and commercial
                  customers.
                </p>
                <section className={styles.banner_button}>
                  <button className={styles.btn_primary}>Who We Are</button>
                  <button className={styles.btn_secondry}>Contact Us</button>
                </section>
              </section>
              <section className={styles.banner_overlay}></section>
              <section className={styles.slider_item}>
            <img src={pic4} />
              </section>
            </SwiperSlide>
          </Swiper>
        </section>
        {/* <div className={styles.swiper_button}>
          <button className="button-prev-slide-banner">
            <GrFormPrevious />
          </button>
          <button className="button-next-slide-banner">
            <GrFormNext />
          </button>
        </div> */}
      </section>
      
    </section>
  );
}
