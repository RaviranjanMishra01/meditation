"use strict";

"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, m } from "framer-motion";
import styles from "./ExpertGuidance.module.css";
import FadeUp from "../motion/FadeUp";
import StaggerContainer from "../motion/StaggerContainer";
import { varStaggerItem } from "../../lib/motion/stagger";
import { varScaleIn } from "../../lib/motion/variants";

// Custom SVG animated check icon
const AnimatedCheckIcon = ({ idx }) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", stiffness: 100, damping: 12, delay: idx * 0.1 + 0.2 },
        opacity: { duration: 0.1, delay: idx * 0.1 + 0.2 },
      },
    },
  };

  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <m.path d="M20 6 9 17l-5-5" variants={draw} />
    </svg>
  );
};

export default function ExpertGuidance() {
  const sectionRef = useRef(null);

  // Parallax Scroll calculations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const points = [
    {
      title: "Experienced Instructors",
      desc: "All Calmify guides are certified in clinical mindfulness practices, traditional yoga anatomy, or sound therapy techniques.",
    },
    {
      title: "Flexible Schedules",
      desc: "Attend daily 15-minute live morning warmups, 60-minute deep flows, or stream from our library of 500+ pre-recorded videos.",
    },
    {
      title: "A Community of Support",
      desc: "Share reflection logs, participate in 30-day cohort challenges, and receive mutual encouragement in active group chats.",
    },
    {
      title: "Holistic Approach",
      desc: "We coordinate somatic workouts, mental meditation, dietary guidelines, and sleep journaling for a fully balanced lifestyle.",
    },
  ];

  return (
    <section ref={sectionRef} className={styles.guidanceSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Benefits Content */}
          <div className={styles.contentCol}>
            <FadeUp>
              <span className="section-subtitle">Why Choose Us</span>
              <h2 className="section-title">
                Transform your mind and body with expert guidance
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.15}>
              <p className={styles.mainDesc}>
                Mental hygiene is just as critical as physical fitness. We provide a structured ecosystem designed to support your wellness goals without feeling like a chore.
              </p>
            </FadeUp>

            {/* Staggered lists entrance */}
            <StaggerContainer staggerVal={0.12}>
              <ul className={styles.pointsList}>
                {points.map((pt, idx) => (
                  <m.li
                    key={idx}
                    variants={varStaggerItem}
                    className={styles.pointItem}
                  >
                    <m.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={styles.checkWrapper}
                    >
                      {/* Draws checkmark path when list item scrolls into view */}
                      <AnimatedCheckIcon idx={idx} />
                    </m.div>
                    <div>
                      <h3 className={styles.pointTitle}>{pt.title}</h3>
                      <p className={styles.pointDesc}>{pt.desc}</p>
                    </div>
                  </m.li>
                ))}
              </ul>
            </StaggerContainer>
          </div>

          {/* Right Column: Organic Blob Image with Parallax Scroll */}
          <div className={styles.visualCol}>
            <m.div
              style={{ y: yParallax }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={varScaleIn}
              className={styles.blobWrapper}
            >
              {/* Drift background blob */}
              <m.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className={styles.blobBackground}
              />
              <div className={styles.imageContainer}>
                <Image
                  src="/images/expert_guidance.png"
                  alt="Yoga instructor demonstrating a pose in peaceful setting"
                  fill
                  className={styles.instructorImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
