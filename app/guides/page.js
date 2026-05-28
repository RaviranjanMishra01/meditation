"use strict";

"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Mail, Award, Clock, Heart, Check, X } from "lucide-react";
import { m } from "framer-motion";
import styles from "./guides.module.css";
import FadeUp from "../../components/motion/FadeUp";
import StaggerContainer from "../../components/motion/StaggerContainer";
import ModalTransition from "../../components/motion/ModalTransition";
import { varStaggerItem } from "../../lib/motion/stagger";

const GUIDES = [
  {
    id: 1,
    name: "Emily Watson",
    role: "Meditation & Mindfulness Specialist",
    rating: "5.0",
    reviews: "1,240",
    img: "/images/guide1.png",
    bio: "Emily is a leading mindfulness practitioner with over 8 years of clinical instruction experience. She completed her post-graduate study in Mindfulness-Based Stress Reduction (MBSR) at the UC San Diego Center for Mindfulness. Her classes emphasize practical, sustainable Vipassana meditations designed for high-stress professional environments.",
    specialties: ["Vipassana Insight", "Clinical MBSR Coaching", "Corporate stress-reduction", "Spinal alignment sitting"],
    schedule: ["Mon 07:00 AM", "Wed 09:00 AM", "Fri 06:00 PM"],
    email: "emily@calmify.com",
    awards: ["Certified MBSR Teacher", "Author of 'Daily Breath'"],
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Restorative Yoga & Somatic Coach",
    rating: "4.9",
    reviews: "950",
    img: "/images/guide2.png",
    bio: "Marcus combines traditional Hatha alignment with contemporary somatic release therapies. With a certification from the Rishikesh Yoga Alliance in India, he spent six years teaching slow-flow Vinyasa in leading retreats worldwide. His coaching style focuses heavily on restoring joint mobility, deep muscle stretching, and breathing integration.",
    specialties: ["Slow-flow Hatha", "Vinyasa flow yoga", "Somatic trigger release", "Pranayama breath control"],
    schedule: ["Tue 08:00 AM", "Thu 12:00 PM", "Fri 04:00 PM"],
    email: "marcus@calmify.com",
    awards: ["RYT-500 Certified Practitioner", "Therapeutic alignment specialist"],
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Sound Healing & Acoustic Therapist",
    rating: "4.9",
    reviews: "820",
    img: "/images/guide3.png",
    bio: "Sarah is a trained musicologist and acoustic therapist specializing in Himalayan singing bowl dynamics. She has spent years studying the neuro-cognitive effects of sound vibration on anxiety and physical pain. Her highly popular immersive sound bath journeys combine gongs, Tibetan bowls, and crystal chimes to stimulate deep delta brainwave states.",
    specialties: ["Tibetan Singing Bowls", "Gong Sound Bath immersion", "Brainwave frequency tuning", "Vibrational anxiety relief"],
    schedule: ["Tue 10:00 AM", "Thu 03:00 PM", "Sat 11:30 AM"],
    email: "sarah@calmify.com",
    awards: ["Vibrational Therapy Certification", "Clinical Musicologist (MA)"],
  },
];

export default function GuidesPage() {
  const [selectedGuide, setSelectedGuide] = useState(null); // Consultation booking modal
  const [consultName, setConsultName] = useState("");
  const [consultEmail, setConsultEmail] = useState("");
  const [consultMessage, setConsultMessage] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const handleOpenConsultation = (guide) => {
    setSelectedGuide(guide);
    setIsBooked(false);
  };

  const handleConfirmConsult = (e) => {
    e.preventDefault();
    if (consultName.trim() && consultEmail.trim()) {
      setIsBooked(true);
      setTimeout(() => {
        setSelectedGuide(null);
        setConsultName("");
        setConsultEmail("");
        setConsultMessage("");
        setIsBooked(false);
      }, 3500);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className={styles.container}>
          <FadeUp>
            <span className="section-subtitle">Our Guides</span>
            <h1 className={styles.title}>Meet Our Certified Guides</h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className={styles.subtitle}>
              Empathic, highly certified wellness experts who walk hand in hand with you on your path to mental clarity.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Guides List Section */}
      <section className={styles.guidesListSection}>
        <div className={styles.container}>
          <StaggerContainer staggerVal={0.2} className={styles.stack}>
            {GUIDES.map((guide) => (
              <m.div
                key={guide.id}
                id={guide.name.replace(/\s+/g, "-")}
                variants={varStaggerItem}
                className={styles.guideBlock}
              >
                {/* Visual Column */}
                <div className={styles.imageCol}>
                  <m.div whileHover={{ scale: 1.02 }} className={styles.imageFrame}>
                    <Image
                      src={guide.img}
                      alt={guide.name}
                      fill
                      className={styles.guidePhoto}
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </m.div>
                  
                  <div className={styles.quickStats}>
                    <div className={styles.ratingLine}>
                      <Star size={16} fill="currentColor" className={styles.starIcon} />
                      <span className={styles.ratingValue}>{guide.rating}</span>
                      <span className={styles.reviewsCount}>({guide.reviews} reviews)</span>
                    </div>
                    <a href={`mailto:${guide.email}`} className={styles.emailLink}>
                      <Mail size={14} />
                      <span>{guide.email}</span>
                    </a>
                  </div>
                </div>

                {/* Info Content Column */}
                <div className={styles.infoCol}>
                  <span className={styles.guideRole}>{guide.role}</span>
                  <h2 className={styles.guideName}>{guide.name}</h2>
                  
                  <p className={styles.bioText}>{guide.bio}</p>

                  <div className={styles.detailsGrid}>
                    {/* Specialties */}
                    <div className={styles.detailsBlock}>
                      <h4 className={styles.detailTitle}>
                        <Heart size={16} className={styles.titleIcon} />
                        <span>Specialties</span>
                      </h4>
                      <ul className={styles.specialtiesList}>
                        {guide.specialties.map((spec, sIdx) => (
                          <li key={sIdx} className={styles.specItem}>{spec}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications & Awards */}
                    <div className={styles.detailsBlock}>
                      <h4 className={styles.detailTitle}>
                        <Award size={16} className={styles.titleIcon} />
                        <span>Credentials</span>
                      </h4>
                      <ul className={styles.credentialsList}>
                        {guide.awards.map((aw, aIdx) => (
                          <li key={aIdx} className={styles.credItem}>{aw}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Schedule & Booking */}
                  <div className={styles.footerRow}>
                    <div className={styles.scheduleBox}>
                      <span className={styles.scheduleLabel}>
                        <Clock size={14} />
                        <span>Live Session Slots:</span>
                      </span>
                      <div className={styles.slots}>
                        {guide.schedule.map((slot, idx) => (
                          <span key={idx} className={styles.slotTag}>{slot}</span>
                        ))}
                      </div>
                    </div>
                    
                    <m.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleOpenConsultation(guide)}
                      className="btn btn-primary"
                    >
                      Book 1-on-1 Consultation
                    </m.button>
                  </div>
                </div>

              </m.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Interactive Consultation Modal wrapping ModalTransition */}
      <ModalTransition isOpen={!!selectedGuide} onClose={() => setSelectedGuide(null)}>
        {selectedGuide && (
          <div className={styles.modalContent} style={{ padding: 0, border: "none" }}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedGuide(null)}
              aria-label="Close dialog"
              style={{ zIndex: 10 }}
            >
              <X size={20} />
            </button>

            {!isBooked ? (
              <form onSubmit={handleConfirmConsult} className={styles.consultForm} style={{ padding: "40px" }}>
                <h3 className={styles.modalTitle}>Request Consultation</h3>
                <p className={styles.modalSubtitle}>
                  Fill out the form below to schedule a private 30-min intake assessment with <strong>{selectedGuide.name}</strong>.
                </p>

                <div className={styles.formGroup}>
                  <label htmlFor="consult-name">Your Full Name</label>
                  <input
                    type="text"
                    id="consult-name"
                    required
                    placeholder="Enter your name"
                    value={consultName}
                    onChange={(e) => setConsultName(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="consult-email">Your Email Address</label>
                  <input
                    type="email"
                    id="consult-email"
                    required
                    placeholder="name@example.com"
                    value={consultEmail}
                    onChange={(e) => setConsultEmail(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="consult-msg">Describe what you hope to address (Optional)</label>
                  <textarea
                    id="consult-msg"
                    placeholder="e.g., managing sleep anxiety, muscle rigidity, breathing rhythm..."
                    rows={3}
                    value={consultMessage}
                    onChange={(e) => setConsultMessage(e.target.value)}
                    className={styles.formTextarea}
                  />
                </div>

                <m.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "8px" }}
                >
                  Submit Consultation Request
                </m.button>
              </form>
            ) : (
              <div className={styles.successWrapper} style={{ padding: "40px" }}>
                <m.div
                  initial={{ scale: 0.5, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className={styles.successCircle}
                >
                  <Check size={32} />
                </m.div>
                <h3>Request Submitted!</h3>
                <p className={styles.successText}>
                  Your request has been delivered to <strong>{selectedGuide.name}</strong>. They will email you directly at <strong>{consultEmail}</strong> within 24 hours to coordinate dates and times.
                </p>
                <div className={styles.successTip}>
                  <span>Check your spam folder if you do not see our message.</span>
                </div>
              </div>
            )}
          </div>
        )}
      </ModalTransition>
    </div>
  );
}
