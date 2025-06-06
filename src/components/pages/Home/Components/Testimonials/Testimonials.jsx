import styles from "./testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Testimonials() {
  return (
    <section className={styles.wrapper} id="testimonials">
      <h5 className="firstTitle">
        Client <span>testimonials</span>
      </h5>
      <section className={styles.ourteam_container}>
        <section className={styles.ourteam_section}>
          <Swiper
            slidesPerView={1}
            spaceBetween={0} // Set to 0 for no space between slides
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.slide_content}>
                <RiDoubleQuotesL />
                <p className="pTag">
                  I wanted to redesigning and revamp the website of my
                  institution. I contacted Nextwebi and they understood the
                  vision of an organization and through several discussions and
                  timely suggestions, the website was delivered and deployed
                  successfully.
                </p>
                <span>- Team Lead</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.slide_content}>
                <RiDoubleQuotesL />
                <p className="pTag">
                  Nextwebi, Without a doubt they have what it takes to make a
                  great web application, not to mention with a competitive price
                  too. Now on seeing the end product I am satisfied and know
                  that the web app is in safe hands. Thank you to the entire
                  team.
                </p>
                <span>- TeamNextwebi</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.slide_content}>
                <RiDoubleQuotesL />
                <p className="pTag">
                  I wanted to redesigning and revamp the website of my
                  institution. I contacted Nextwebi and they understood the
                  vision of an organization and through several discussions and
                  timely suggestions, the website was delivered and deployed
                  successfully.
                </p>
                <span>- Ayush Uday</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
    </section>
  );
}
