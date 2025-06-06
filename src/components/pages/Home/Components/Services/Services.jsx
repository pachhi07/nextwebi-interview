import React from "react";
import styles from "./services.module.css";
import services from "../../../../data/Service/services.json";

export default function Services() {
  return (
    <section className={styles.wrapper} id="services">
      <section className={styles.whychoose_heading}>
        <div>
          <h5 className="firstTitle">Our <span>Services</span></h5>
          <p className="pTag">
            BREAKTHROUGH YOUR LIMITS: FROM EARLY PREPARATION TO FUTURE SUCCESS
          </p>
          <p className="pTag">
            Become technology-driven with custom software development services We strategically empower your business with tech-savvy teams, and end-to-end customizable IT services. As a reliable IT outsourcing company, our proven methods, agile DevOps, and full stack expertise take away your stress of technological challenges for optimum growth & scalability.
          </p>
        </div>
        <section className={styles.whychoose_container}>
          {services.map((chooseItem) => {
            return (
              <div className={styles.whychoose_item} key={chooseItem.id}>
                <img
                  src={`/assets/services/${chooseItem.image}`}
                  alt="logo"
                  width={50}
                  height={50}
                />
                <div className={styles.whychoose_content}>
                  <h3 className="secondTitle">{chooseItem.title}</h3>
                  <p className="pTag">{chooseItem.description}</p>
                </div>
                <div className={styles.overlay}>
                  <button className={styles.read_more_btn}>Read More</button>
                </div>
              </div>
            );
          })}
        </section> 
      </section>
    </section>
  );
}