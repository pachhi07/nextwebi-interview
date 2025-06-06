import React from "react";
import styles from "./footer.module.css";
import pic1 from "/assets/logo-white.png";
// icons
import { IoCallSharp } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.footer_content}>
        <section className={styles.footer_logo}>
          <img src={pic1} />
          <p class="pTag">
Creativity is our heartbeat. We constantly challange ourselves to further our technical prowess and help our customers to deliver execeptional customer experience.
          </p>
          <section className={styles.footer_call}>
            <IoCallSharp />
            <a href="tel:+91 9008310907">+91 9008310907</a>
          </section>
          <section className={styles.social_medias}>
            <ul className={styles.menu_icons}>
              <li>
                <a href="">
                  <MdFacebook />
                </a>
              </li>
              <li>
                <a href="">
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section className={styles.footer_navbar}>
          <h5 class="secondTitle">Additional Menu</h5>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Why Us</a>
            </li>
            <li>
              <a href="">Counters</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
        </section>
        <section className={styles.footer_subscribe}>
          <h5 class="secondTitle">Subscribe Newsletter</h5>
          <p class="pTag">
            Subscribe our newsletter to get our latest update & news.
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Mail"
          />
          <button className={styles.button_btn}>Subscribe</button>
        </section>
      </section>
      <div className={styles.copy_rights}>
        <p className="pTag">© Copyright 2024. All Rights Reserved.</p>
        <p className="pTag">
          Designed & Developed By &nbsp;
          <a href="">Nextwebi</a>
        </p>
      </div>
    </section>
  );
}
