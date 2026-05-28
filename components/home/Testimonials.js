"use strict";

"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import styles from "./Testimonials.module.css";
import FadeUp from "../motion/FadeUp";

export default function Testimonials() {
  const reviews = [
    {
      name: "Anna Sullivan",
      location: "San Francisco, CA",
      text: "Calmify completely shifted my daily routine. The 10-minute guided morning meditation helps me manage my startup anxiety and start the day with incredible focus.",
      rating: 5,
      img: "/images/user1.png",
    },
    {
      name: "David Vance",
      location: "Austin, TX",
      text: "The breathwork sessions are a game changer. I've suffered from mild sleep issues for years, and the evening sound baths and breathing sequences have dramatically improved my sleep quality.",
      rating: 5,
      img: "/images/user2.png",
    },
    {
      name: "Chloe Chen",
      location: "New York, NY",
      text: "Having direct access to experienced guides makes a massive difference. The trainers are so responsive, and the community cohort groups kept me accountable throughout my 30-day challenge.",
      rating: 5,
      img: "/images/user3.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = Left, 1 = Right

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Drag Gesture handler to switch slides
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  const activeReview = reviews[activeIndex];

  // Carousel slider animation presets
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    }),
  };

  // Rating stars sequential light up
  const starContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const starItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  return (
    <section className={styles.testimonialSection}>
      {/* Floating Background Leaf with continuous breathing drift */}
      <m.div
        animate={{
          rotate: [0, 10, -5, 0],
          y: [0, 15, -10, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
        className={styles.leafContainer}
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 180C70 160 110 110 130 60C140 35 150 10 180 20C170 50 160 80 140 110C110 150 60 170 20 180Z"
            fill="#e2ebd4"
            opacity="0.6"
          />
        </svg>
      </m.div>

      <div className={styles.container}>
        <div className={styles.header}>
          <FadeUp>
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">What our users say</h2>
          </FadeUp>
        </div>

        {/* Carousel Visual Frame */}
        <div className={styles.carouselContainer}>
          <div className={styles.slider} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <m.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className={styles.slide}
                style={{
                  cursor: "grab",
                }}
              >
                <div className={styles.card}>
                  <Quote className={styles.quoteIcon} />
                  
                  {/* Staggered Stars Light-Up */}
                  <m.div
                    variants={starContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className={styles.rating}
                  >
                    {[...Array(activeReview.rating)].map((_, i) => (
                      <m.div
                        key={i}
                        variants={starItemVariants}
                        style={{ display: "inline-block" }}
                      >
                        <Star size={16} fill="currentColor" className={styles.star} />
                      </m.div>
                    ))}
                  </m.div>

                  <p className={styles.reviewText}>"{activeReview.text}"</p>
                  <div className={styles.author}>
                    <div className={styles.avatarWrapper}>
                      <Image
                        src={activeReview.img}
                        alt={activeReview.name}
                        width={48}
                        height={48}
                        className={styles.avatar}
                      />
                    </div>
                    <div>
                      <h4 className={styles.authorName}>{activeReview.name}</h4>
                      <span className={styles.authorLoc}>{activeReview.location}</span>
                    </div>
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </div>

          {/* Navigation Handles */}
          <div className={styles.navigation}>
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className={styles.navBtn}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </m.button>
            
            <div className={styles.dots}>
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ""}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className={styles.navBtn}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </m.button>
          </div>
        </div>
      </div>
    </section>
  );
}
