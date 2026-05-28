"use strict";

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { m } from "framer-motion";
import styles from "./BlogPreview.module.css";
import FadeUp from "../motion/FadeUp";
import StaggerContainer from "../motion/StaggerContainer";
import { varStaggerItem } from "../../lib/motion/stagger";

export default function BlogPreview() {
  const blogs = [
    {
      slug: "mindfulness-practices-for-daily-life",
      title: "Mindfulness practices for daily life",
      desc: "Integrate simple micro-meditations into your busy morning commute, lunch hour, and evening digital wind-down routines.",
      category: "Mindfulness",
      date: "May 25, 2026",
      readTime: "5 min read",
      img: "/images/blog1.png",
    },
    {
      slug: "the-science-behind-sound-healing",
      title: "The science behind sound healing",
      desc: "Explore how acoustic resonance and brainwave entrainment can lower nervous system arousal and accelerate physical healing.",
      category: "Acoustics",
      date: "May 18, 2026",
      readTime: "7 min read",
      img: "/images/blog2.png",
    },
    {
      slug: "gentle-yoga-poses-for-beginners",
      title: "Gentle yoga poses for beginners",
      desc: "Five fundamental, restorative poses you can practice right in your bed to release tension, stretch joints, and improve spinal alignment.",
      category: "Yoga",
      date: "May 10, 2026",
      readTime: "6 min read",
      img: "/images/blog3.png",
    },
  ];

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <FadeUp>
              <span className="section-subtitle">Our Blog</span>
              <h2 className="section-title">Wellness tips & inspiration</h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/blog" className="btn btn-secondary">
                <span>Explore All Articles</span>
                <ArrowRight size={16} />
              </Link>
            </m.div>
          </FadeUp>
        </div>

        {/* Sequential Reveals using StaggerContainer */}
        <StaggerContainer staggerVal={0.12} className={styles.grid}>
          {blogs.map((blog, idx) => (
            <m.div
              key={idx}
              variants={varStaggerItem}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className={styles.blogImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
                <span className={styles.tag}>{blog.category}</span>
              </div>
              <div className={styles.info}>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <Calendar size={12} className={styles.metaIcon} />
                    <span>{blog.date}</span>
                  </span>
                  <span className={styles.metaItem}>
                    <Clock size={12} className={styles.metaIcon} />
                    <span>{blog.readTime}</span>
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className={styles.cardDesc}>{blog.desc}</p>
                <Link href={`/blog/${blog.slug}`} className={styles.cardLink}>
                  <span>Read Article</span>
                  <ArrowRight size={14} className={styles.arrow} />
                </Link>
              </div>
            </m.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
