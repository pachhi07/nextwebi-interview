import React from "react";
import styles from "./blogs.module.css";
import pic1 from "/assets/blogs/blog-1.png";
import pic2 from "/assets/blogs/blog-2.png";
import pic3 from "/assets/blogs/blog-3.png";

export default function Blogs() {
  return (
    <section className={styles.wrapper} id="blogs">
      <section className={styles.information_container}>
        <h5 className="firstTitle">
          Recent <span>Blogs</span>
        </h5>
        <section className={styles.information_cards}>
          <section>
            <img src={pic1} />
            <h5 className="secondTitle">
            Microsoft SharePoint
            </h5>
            <p className="pTag">June 6th , 2025</p>
            <p className="pTag">
              Enhance your SharePoint experience with custom solutions that boost collobartions, Productivity and workflows...
            </p>
          </section>
          <section>
            <img src={pic2} />
            <h5 className="secondTitle">
              OffShore Software Development
            </h5>
            <p className="pTag">June 6th , 2025</p>
            <p className="pTag">
              Enhance your SharePoint experience with custom solutions that boost collobartions, Productivity and workflows...
            </p>
          </section>
          <section>
            <img src={pic3} />
            <h5 className="secondTitle">
              ERP
            </h5>
            <p className="pTag">June 6th , 2025</p>
            <p className="pTag">
                   Enhance your ERP experience with custom solutions that boost collobartions, Productivity and workflows...
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}
