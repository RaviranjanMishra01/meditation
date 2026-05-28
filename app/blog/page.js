"use strict";

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, AlertCircle, X } from "lucide-react";
import { m } from "framer-motion";
import styles from "./blog.module.css";
import FadeUp from "../../components/motion/FadeUp";
import StaggerContainer from "../../components/motion/StaggerContainer";
import { varStaggerItem } from "../../lib/motion/stagger";

const ALL_POSTS = [
  {
    slug: "mindfulness-practices-for-daily-life",
    title: "Mindfulness practices for daily life",
    desc: "Integrate simple micro-meditations into your busy morning commute, lunch hour, and evening digital wind-down routines to restore neurological calmness.",
    category: "Mindfulness",
    date: "May 25, 2026",
    readTime: "5 min read",
    img: "/images/blog1.png",
    author: "Emily Watson",
  },
  {
    slug: "the-science-behind-sound-healing",
    title: "The science behind sound healing",
    desc: "Explore how acoustic resonance, vibrational frequencies, and bilateral brainwave entrainment can lower cortisol and accelerate neurological cell recovery.",
    category: "Acoustics",
    date: "May 18, 2026",
    readTime: "7 min read",
    img: "/images/blog2.png",
    author: "Sarah Jenkins",
  },
  {
    slug: "gentle-yoga-poses-for-beginners",
    title: "Gentle yoga poses for beginners",
    desc: "Five fundamental, restorative stretching postures you can practice directly in bed or on a rug to align joints, release fascia, and invite slow breathing.",
    category: "Yoga",
    date: "May 10, 2026",
    readTime: "6 min read",
    img: "/images/blog3.png",
    author: "Marcus Vance",
  },
  {
    slug: "how-breathing-resets-your-nervous-system",
    title: "How breathing resets your nervous system",
    desc: "A deep dive into the autonomic nervous system. Learn the physiological mechanics of how elongated exhalations activate the vagus nerve.",
    category: "Breathwork",
    date: "April 28, 2026",
    readTime: "8 min read",
    img: "/images/how_we_work.png",
    author: "Emily Watson",
  },
  {
    slug: "establishing-a-sustainable-morning-routine",
    title: "Establishing a sustainable morning routine",
    desc: "Ditch the digital scrolling. Learn how a simple 10-minute sequence of stretching, breathing, and focused stillness sets a clear mental tone for your day.",
    category: "Mindfulness",
    date: "April 15, 2026",
    readTime: "5 min read",
    img: "/images/hero_meditation.png",
    author: "Marcus Vance",
  },
  {
    slug: "vibrational-frequencies-and-anxiety",
    title: "Vibrational frequencies and anxiety",
    desc: "An investigation into how sound frequencies interact with somatic anxiety centers. Why singing bowls stimulate alpha waves and lower heart-rate variability.",
    category: "Acoustics",
    date: "April 02, 2026",
    readTime: "9 min read",
    img: "/images/blog2.png",
    author: "Sarah Jenkins",
  },
];

export default function BlogPage({ initialCategory = "All" }) {
  const categories = ["All", "Mindfulness", "Yoga", "Breathwork", "Acoustics"];

  const normalizedCategory = categories.find(
    (c) => c.toLowerCase() === initialCategory.toLowerCase()
  ) || "All";

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(normalizedCategory);

  useEffect(() => {
    setActiveCategory(normalizedCategory);
  }, [initialCategory, normalizedCategory]);

  const filteredPosts = ALL_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.desc.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className={styles.container}>
          <FadeUp>
            <span className="section-subtitle">Wellness Insights</span>
            <h1 className={styles.title}>The Calmify Journal</h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className={styles.subtitle}>
              Explore weekly wellness guides, scientific breakdowns of sound therapies, guided yoga structures, and mindful living inspiration.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Blog directory content */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          
          {/* Controls Bar */}
          <div className={styles.controlsBar}>
            {/* Category tabs */}
            <div className={styles.tabs}>
              {categories.map((cat) => {
                const isSelected = activeCategory.toLowerCase() === cat.toLowerCase();
                const categoryPath = cat === "All" ? "/blog" : `/blog/category/${cat.toLowerCase()}`;
                return (
                  <Link
                    key={cat}
                    href={categoryPath}
                    onClick={() => setActiveCategory(cat)}
                    className={`${styles.tabBtn} ${isSelected ? styles.activeTab : ""}`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>

            {/* Search Input */}
            <div className={styles.searchWrapper}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
              />
              {search && (
                <button onClick={() => setSearch("")} className={styles.clearSearchBtn}>
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Cards Directory */}
          {filteredPosts.length > 0 ? (
            <StaggerContainer staggerVal={0.08} className={styles.grid}>
              {filteredPosts.map((post, idx) => (
                <m.article
                  key={idx}
                  variants={varStaggerItem}
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={styles.card}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className={styles.blogImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <span className={styles.tag}>{post.category}</span>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.meta}>
                      <span className={styles.metaItem}>
                        <Calendar size={12} className={styles.metaIcon} />
                        <span>{post.date}</span>
                      </span>
                      <span className={styles.metaItem}>
                        <Clock size={12} className={styles.metaIcon} />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                    <h3 className={styles.cardTitle}>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className={styles.cardDesc}>{post.desc}</p>
                    
                    <div className={styles.cardFooter}>
                      <span className={styles.authorName}>By {post.author}</span>
                      <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                        <span>Read Article</span>
                        <ArrowRight size={14} className={styles.arrow} />
                      </Link>
                    </div>
                  </div>
                </m.article>
              ))}
            </StaggerContainer>
          ) : (
            <div className={styles.noResults}>
              <AlertCircle size={40} className={styles.noResultsIcon} />
              <h3>No Articles Found</h3>
              <p>We couldn't find any articles matching your filters. Try resetting search.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
