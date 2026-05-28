"use strict";

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Waves } from "lucide-react";
import { m } from "framer-motion";
import styles from "./CommunityBanner.module.css";
import FadeUp from "../motion/FadeUp";
import { varScaleIn } from "../../lib/motion/variants";

export default function CommunityBanner() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={varScaleIn}
          className={styles.bannerWrapper}
        >
          
          {/* Overlapping Plant Pot Image with soft hover drift */}
          <m.div
            initial={{ rotate: -4, y: 0 }}
            whileHover={{ y: -12, rotate: 1, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={styles.plantOverlay}
          >
            <div className={styles.polaroidFrame}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/plant_pot.png"
                  alt="Potted snake plant decoration"
                  width={150}
                  height={150}
                  className={styles.plantImage}
                />
              </div>
              <span className={styles.polaroidCaption}>calm space</span>
            </div>
          </m.div>

          {/* Banner Text & Action */}
          <div className={styles.content}>
            <FadeUp>
              <h2 className={styles.title}>Join Our Calmness Community</h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className={styles.desc}>
                Start your 14-day free trial today. Gain instant access to live sessions, certified guides, and custom wellness pathways to find your inner balance.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className={styles.btnRow}>
                <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/pricing" className="btn btn-light">
                    <span>Get Started Now</span>
                    <ArrowRight size={16} />
                  </Link>
                </m.div>
                <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact" className={styles.learnMore}>
                    Learn about group deals
                  </Link>
                </m.div>
              </div>
            </FadeUp>
          </div>

          {/* Right Vector Graphics with continuous breathing rotation */}
          <div className={styles.vectorContainer}>
            <m.div
              animate={{ rotate: [0, 6, 0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className={styles.waveLayer}
            >
              <Waves size={120} strokeWidth={1} />
            </m.div>
            <m.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className={styles.circleBg}
            >
              <div className={styles.circleBgInner} />
            </m.div>
          </div>

        </m.div>
      </div>
    </section>
  );
}
