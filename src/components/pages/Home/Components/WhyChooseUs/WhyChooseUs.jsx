import React from "react";
import styles from "./whychooseus.module.css";
import pic1 from "/assets/wychooseus/choosebanner-1.webp";
export default function WhyChooseUs() {
  return (
    <section className={styles.wrapper} id="whychooseus">
      <h5 className="firstTitle">
        Whychoose <span>Us</span>
      </h5>
      <section className={styles.quality_alpha}>
        <section className={styles.quality_container}>
          <div>
            <h3 className="firstTitle">
              No need to wonder Working with us is Wonderful.
            </h3>
            <p className="pTag">
              At Nextwebi, we are building secure and scalable digital
              infrastructure for our clients while efficiently automating
              business workflows. We are agile and specialize in delivering
              customized software services and solutions with AI-driven
              innovations for startups and enterprise companies
            </p>

            <section className={styles.quality_content}>
              <div>
                <span className="firstTitle">9+</span>
                <p className="pTag">Years in Bangalore</p>
              </div>
              <div>
                <span className="firstTitle">600+</span>
                <p className="pTag">Client relationships</p>
              </div>
              <div>
                <span className="firstTitle">20+</span>
                <p className="pTag">Countries Served</p>
              </div>
            </section>
          </div>
          <section className={styles.quality_image}>
            <img src={pic1} />
          </section>
        </section>
      </section>
    </section>
  );
}
