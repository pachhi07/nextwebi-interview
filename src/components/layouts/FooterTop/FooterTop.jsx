import React from "react";
import styles from "./footertop.module.css";

export default function Footertop() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.wrapper_img}>
        <div className={styles.wrapper_bg}></div>
        <div className={styles.wrapper_text}>
          <h2 className="firstTitle">
            Dont hesitate to <span>contact us</span>
          </h2>
          <p className="pTag">
            Our professional team works to increase productivity and cost
            effectiveness on the market
          </p>
        </div>
        <div className={styles.menu_contact}>
          <p className="pTag"><a href="tel:+91 9008310907">Say Hello</a></p>
        </div>
      </section>
    </section>
  );
}
