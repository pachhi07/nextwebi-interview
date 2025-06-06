import styles from "./header.module.css";

//icons
import { IoCallSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import pic1 from "/assets/logo-color.png";
import { LuMenu } from "react-icons/lu";

export default function Header() {
  return (
    <>
      <header className={styles.wrapper}>
        <section className={styles.header_wrapper}>
          <section className={styles.header}>
            <section className={styles.header_logo}>
              <img src={pic1} alt="Company Logo" />
            </section>
            <section className={styles.header_sidebar} >
              <LuMenu />
            </section>
            <section className={styles.header_contact}>
              <ul>
                <li className={styles.header_contact_item}>
                  <section className={styles.header_contact_icon}>
                    <FaEnvelope />
                  </section>
                  <section className={styles.header_contact_info}>
                    <p className="pTag">Email</p>
                    <p className="pTag"><a href="mailto:hr@nextwebi.com">hr@nextwebi.com</a></p>
                  </section>
                </li>
                <li className={styles.header_contact_item}>
                  <section className={styles.header_contact_icon}>
                    <IoCallSharp />
                  </section>
                  <section className={styles.header_contact_info}>
                    <p className="pTag">Call Support</p>
                    <p className="pTag"><a href="tel:+91 9008310907">+91 9008310907</a></p>
                  </section>
                </li>
                <li className={styles.header_contact_item}>
                  <section className={styles.header_contact_icon}>
                    <FaClock />
                  </section>
                  <section className={styles.header_contact_info}>
                    <p className="pTag">Work Hour</p>
                    <p className="pTag"><a>Mon-Fri: 9am-6pm</a></p>
                  </section>
                </li>
              </ul>
            </section>
          </section>
        </section>
        <section className={styles.menu_wrapper}>
          <section className={styles.menu}>
            <ul>
              <li><a href ="#services">Services</a></li>
              <li><a href ="#whychooseus">Why Choose Us</a></li>
              <li><a href ="#counters">Counters</a></li>
              <li><a href ="#testimonials">Testimonials</a></li>
              <li><a href ="#blogs">Blogs</a></li>
            </ul>
            <div className={styles.menu_contact}>
              <p>Get a Quote</p>
            </div>
          </section>
        </section>
      </header>
    </>
  );
}