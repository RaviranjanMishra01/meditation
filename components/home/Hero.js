"use strict";

"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Shield, Star, Users } from "lucide-react";
import { m } from "framer-motion";
import styles from "./Hero.module.css";
import FadeUp from "../motion/FadeUp";
import FloatingElement from "../motion/FloatingElement";
import { varFade, varScaleIn } from "../../lib/motion/variants";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Copy & Actions */}
          <div className={styles.contentCol}>
            <m.div
              initial="hidden"
              animate="visible"
              variants={varFade}
              className={styles.badge}
            >
              <Shield size={14} className={styles.badgeIcon} />
              <span>Your Sanctuary for Mindfulness</span>
            </m.div>

            <FadeUp delay={0.1}>
              <h1 className={styles.title}>
                Embrace Your <br />
                <span className={styles.titleHighlight}>Inner Peace.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className={styles.desc}>
                A quiet space to find calmness and clarity inside your mind. Start your journey to a balanced, stress-free lifestyle with our premium guided courses.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className={styles.ctas}>
                <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/pricing" className="btn btn-primary">
                    Start for Free
                  </Link>
                </m.div>
                <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/classes" className="btn btn-secondary">
                    <Play size={16} fill="currentColor" />
                    <span>Explore Classes</span>
                  </Link>
                </m.div>
              </div>
            </FadeUp>

            {/* Micro Statistics */}
            <FadeUp delay={0.55}>
              <div className={styles.statsInline}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>50k+</span>
                  <span className={styles.statLabel}>Active Members</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statItem}>
                  <span className={styles.statNum}>250+</span>
                  <span className={styles.statLabel}>Certified Guides</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statItem}>
                  <span className={styles.statNum}>4.9/5</span>
                  <span className={styles.statLabel}>10k+ Reviews</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Visual Composition */}
          <div className={styles.visualCol}>
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={varScaleIn}
              className={styles.imageWrapper}
            >
              <Image
                src="/images/hero_meditation.png"
                alt="Woman meditating in a serene forest by a stream"
                fill
                priority
                className={styles.heroImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Floating micro-interactions */}
              <FloatingElement
                yOffset={-14}
                duration={5.5}
                className={`${styles.floatingCard} ${styles.floatTop}`}
              >
                <div className={styles.avatarGroup}>
                  <Image src="/images/user1.png" alt="User 1" width={32} height={32} />
                  <Image src="/images/user2.png" alt="User 2" width={32} height={32} />
                  <Image src="/images/user3.png" alt="User 3" width={32} height={32} />
                </div>
                <div>
                  <p className={styles.floatingTitle}>Join 50k+ members</p>
                  <div className={styles.floatingStars}>
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
              </FloatingElement>

              <FloatingElement
                yOffset={14}
                duration={6.5}
                delay={0.5}
                className={`${styles.floatingCard} ${styles.floatBottom}`}
              >
                <div className={styles.circleIcon}>
                  <Users size={16} />
                </div>
                <div>
                  <p className={styles.floatingTitle}>Group Classes</p>
                  <p className={styles.floatingSubtitle}>Daily live sessions</p>
                </div>
              </FloatingElement>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
