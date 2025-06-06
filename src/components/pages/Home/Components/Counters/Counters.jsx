import React, { useEffect } from "react";

//styles
import styles from "./counters.module.css";
import { FaTachometerAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
//
//<div ref={ref}>
//<div></div>
//{inView && <CountUp start={0} end={100} delay={0} duration={3} />}
//</div>
//
export default function Counters() {
  const { ref, inView } = useInView();
  return (
    <>
      <section className={styles.counterMainContainer} id="counters">
        <h5 className="firstTitle">Nextwebi <span>Deliveries</span></h5>
        <section className={styles.counterContainer} ref={ref}>
          <article>
          <FaTachometerAlt />
            <span>
              {inView && (
                <CountUp
                  suffix="+"
                  start={0}
                  end={9}
                  delay={0}
                  duration={2}
                />
              )}
            </span>
            <p className="pTag">Years in Business</p>
          </article>
          <article>
          <FaTachometerAlt />

            <span>
              {inView && (
                <CountUp suffix="%" start={0} end={1600} delay={0} duration={2} />
              )}
            </span>
            <p className="pTag">Projects Delivered</p>
          </article>
          <article>
          <FaTachometerAlt />
            <span>
              {inView && (
                <CountUp
                  suffix="+"
                  start={0}
                  end={600}
                  delay={0}
                  duration={2}
                />
              )}
            </span>
            <p className="pTag">Client Relationships</p>
          </article>

          <article>
          <FaTachometerAlt />
            <span>
              {inView && (
                <CountUp
                  suffix="+"
                  start={0}
                  end={20}
                  delay={0}
                  duration={2}
                />
              )}
            </span>
            <p className="pTag">Countries Serverd</p>
          </article>
        </section>
      </section>
    </>
  );
}
