"use strict";

"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { m } from "framer-motion";
import styles from "./GuidesSection.module.css";
import FadeUp from "../motion/FadeUp";
import StaggerContainer from "../motion/StaggerContainer";
import { varStaggerItem } from "../../lib/motion/stagger";

export default function GuidesSection() {
  const guides = [
    {
      name: "Emily Watson",
      role: "Meditation Specialist",
      rating: "5.0",
      reviews: "1.2k",
      img: "/images/guide1.png",
      desc: "Specializes in Vipassana and MBSR (Mindfulness-Based Stress Reduction) with 8+ years of teaching experience.",
    },
    {
      name: "Marcus Vance",
      role: "Yoga & Vinyasa Coach",
      rating: "4.9",
      reviews: "950",
      img: "/images/guide2.png",
      desc: "Focuses on alignment, slow-flow recovery yoga, and somatic muscle-mind release therapies.",
    },
    {
      name: "Sarah Jenkins",
      role: "Sound Healing therapist",
      rating: "4.9",
      reviews: "820",
      img: "/images/guide3.png",
      desc: "Master of Himalayan singing bowls and gong acoustic therapy, helping clients release deep emotional blockage.",
    },
  ];

  return (
    <section className={styles.guidesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <FadeUp>
            <span className="section-subtitle">Meet Our Guides</span>
            <h2 className="section-title">Your guides to a calmer, healthier life</h2>
          </FadeUp>
        </div>

        {/* Sequential Reveals of the entire grid */}
        <StaggerContainer staggerVal={0.15} className={styles.grid}>
          
          {/* Intro Information Card */}
          <m.div variants={varStaggerItem} className={styles.introCard}>
            <h3 className={styles.introTitle}>Certified Experts</h3>
            <p className={styles.introText}>
              Our guides are globally certified practitioners with deep clinical or traditional training. They are dedicated to supporting your unique wellness journey with empathy and expertise.
            </p>
            <div className={styles.introStats}>
              <div className={styles.statLine}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Vetted Instructors</span>
              </div>
              <div className={styles.statLine}>
                <span className={styles.statValue}>15k+</span>
                <span className={styles.statLabel}>Coaching Hours</span>
              </div>
            </div>
            <m.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ marginTop: "auto" }}
            >
              <Link href="/guides" className="btn btn-light" style={{ width: "100%" }}>
                <span>View All Guides</span>
                <ArrowRight size={16} />
              </Link>
            </m.div>
          </m.div>

          {/* Guides Cards List */}
          {guides.map((guide, idx) => (
            <m.div
              key={idx}
              variants={{
                ...varStaggerItem,
                hover: { y: -6, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 25 } }
              }}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.99 }}
              className={styles.guideCard}
              style={{ position: "relative" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={guide.img}
                  alt={guide.name}
                  fill
                  className={styles.guideImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
                
                {/* Hover overlay animated backdrop controlled by parent hover state */}
                <m.div
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
                  }}
                  className={styles.cardHoverOverlay}
                >
                  <p className={styles.guideHoverDesc}>{guide.desc}</p>
                  <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href={`/guides#${guide.name.replace(/\s+/g, "-")}`} className={styles.bookingBtn}>
                      Book Consultation
                    </Link>
                  </m.div>
                </m.div>
              </div>
              
              <div className={styles.guideInfo}>
                <span className={styles.guideRole}>{guide.role}</span>
                <h4 className={styles.guideName}>{guide.name}</h4>
                <div className={styles.guideRating}>
                  <Star size={14} fill="currentColor" className={styles.starIcon} />
                  <span>{guide.rating} ({guide.reviews} reviews)</span>
                </div>
              </div>
            </m.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
