"use strict";

"use client";

import Link from "next/link";
import { Music, Wind, Sun, Compass, ArrowRight } from "lucide-react";
import { m } from "framer-motion";
import styles from "./ClassesPreview.module.css";
import FadeUp from "../motion/FadeUp";
import StaggerContainer from "../motion/StaggerContainer";
import { varStaggerItem } from "../../lib/motion/stagger";

export default function ClassesPreview() {
  const classes = [
    {
      id: "sound-therapy",
      icon: <Music size={24} />,
      title: "Sound Therapy",
      desc: "Use acoustic frequencies to calm your nervous system, align mental energy, and wash away daily tension.",
      link: "/classes?category=Sound%20Healing",
    },
    {
      id: "breathing-exercises",
      icon: <Wind size={24} />,
      title: "Breathing Exercises",
      desc: "Learn somatic breathwork to lower cortisol levels instantly, increase lung capacity, and improve focus.",
      link: "/classes?category=Breathwork",
    },
    {
      id: "gentle-yoga",
      icon: <Sun size={24} />,
      title: "Gentle Yoga",
      desc: "Reconnect mind and body through slow transitions, deep alignment stretching, and muscle relaxation flows.",
      link: "/classes?category=Yoga",
    },
    {
      id: "guided-meditation",
      icon: <Compass size={24} />,
      title: "Guided Meditation",
      desc: "Develop present-moment mindfulness and self-compassion under simple, structured visual guide paths.",
      link: "/classes?category=Meditation",
    },
  ];

  return (
    <section className={styles.classesSection}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.titleCol}>
            <FadeUp>
              <span className="section-subtitle">Our Classes</span>
              <h2 className="section-title">
                Wellness training at your own pace
              </h2>
            </FadeUp>
          </div>
          <div className={styles.descCol}>
            <FadeUp delay={0.15}>
              <p>
                We provide bite-sized practices and multi-week training courses designed to fit any lifestyle. Gain peace, control stress, and elevate your sleep pattern with our structured learning models.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <Link href="/classes" className={styles.exploreAllLink}>
                <span>View All Classes</span>
                <ArrowRight size={16} />
              </Link>
            </FadeUp>
          </div>
        </div>

        {/* Sequential Grid Reveals using StaggerContainer */}
        <StaggerContainer staggerVal={0.12} className={styles.grid}>
          {classes.map((cls, idx) => (
            <m.div
              key={cls.id}
              variants={varStaggerItem}
              whileHover={{ y: -8, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`${styles.card} ${idx % 2 === 1 ? styles.cardHighlight : ""}`}
            >
              <div className={styles.iconWrapper}>{cls.icon}</div>
              <h3 className={styles.cardTitle}>{cls.title}</h3>
              <p className={styles.cardDesc}>{cls.desc}</p>
              <Link href={cls.link} className={styles.cardLink}>
                <span>Learn More</span>
                <ArrowRight size={14} className={styles.arrow} />
              </Link>
            </m.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
