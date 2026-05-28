"use strict";

"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import styles from "./FAQSection.module.css";
import FadeUp from "../motion/FadeUp";
import StaggerContainer from "../motion/StaggerContainer";
import { varStaggerItem } from "../../lib/motion/stagger";
import { easeCalm, easeInOutCalm } from "../../lib/motion/easing";

export default function FAQSection() {
  const faqs = [
    {
      q: "What is mindfulness meditation, and how does it help?",
      a: "Mindfulness meditation is the practice of training your mind to focus on the present moment with openness and curiosity, rather than judgment. It has been clinically proven to lower cortisol levels (stress hormone), reduce blood pressure, decrease ruminating thoughts, and increase emotional resilience.",
    },
    {
      q: "How do I choose the right class or schedule for me?",
      a: "We recommend starting with our 7-day 'Essentials of Mindfulness' course if you are a absolute beginner. If you need physical relief, our 'Gentle Yoga Stretching' is perfect. You can filter our classes catalog by difficulty or length to match your energy level.",
    },
    {
      q: "Can I cancel or change my subscription package anytime?",
      a: "Yes, absolutely! You can cancel, upgrade, or downgrade your membership directly from your account billing portal with a single click. If you choose yearly billing and cancel midway, you will retain access until the end of your billing cycle.",
    },
    {
      q: "Do you offer private, 1-on-1 coaching sessions?",
      a: "Yes! Our Premium membership includes one 30-minute private check-in per month. During this call, a certified guide reviews your meditation journal, corrects yoga postures via video, and designs a customized daily schedule tailored to your lifestyle.",
    },
    {
      q: "What equipment do I need to get started?",
      a: "For meditation, you only need a comfortable chair or cushion and a quiet space. For yoga, we recommend a non-slip yoga mat and comfortable clothing. Sound bath sessions are best enjoyed using high-quality stereo headphones.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const answerVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: { height: { duration: 0.3, ease: easeInOutCalm }, opacity: { duration: 0.2 } },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: { height: { duration: 0.35, ease: easeCalm }, opacity: { duration: 0.3, delay: 0.05 } },
    },
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Heading and Support Link */}
          <div className={styles.introCol}>
            <FadeUp>
              <span className="section-subtitle">FAQs</span>
              <h2 className="section-title">Any questions? <br />We got you</h2>
            </FadeUp>
            
            <FadeUp delay={0.15}>
              <p className={styles.introText}>
                Can't find the answers you're looking for? Reach out to our 24/7 client relations team. We are here to support your mindfulness journey.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.25}>
              <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                  <span>Contact Support</span>
                </Link>
              </m.div>
            </FadeUp>
          </div>

          {/* Right Column: Accordion Panels with Staggered entrance */}
          <div className={styles.faqCol}>
            <StaggerContainer staggerVal={0.1} className={styles.accordion}>
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <m.div
                    key={idx}
                    variants={varStaggerItem}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.995 }}
                    className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                  >
                    <button
                      className={styles.questionButton}
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                    >
                      <HelpCircle size={18} className={styles.helpIcon} />
                      
                      {/* Active Question Text Slide Shift */}
                      <m.span
                        animate={{ x: isOpen ? 6 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={styles.questionText}
                      >
                        {faq.q}
                      </m.span>
                      
                      {/* Chevron Rotation */}
                      <m.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} className={styles.arrowIcon} />
                      </m.div>
                    </button>
                    
                    {/* Expandable Panel Content utilizing AnimatePresence & height animations */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <m.div
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          variants={answerVariants}
                          className={styles.answerWrapper}
                        >
                          <div className={styles.answerContent}>
                            <p>{faq.a}</p>
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </m.div>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
