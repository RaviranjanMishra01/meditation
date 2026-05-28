"use strict";

"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Calendar, Clock, User, Check, AlertCircle, X } from "lucide-react";
import { m } from "framer-motion";
import styles from "./classes.module.css";
import FadeUp from "../../components/motion/FadeUp";
import StaggerContainer from "../../components/motion/StaggerContainer";
import ModalTransition from "../../components/motion/ModalTransition";
import { varStaggerItem } from "../../lib/motion/stagger";

const ALL_CLASSES = [
  {
    id: 1,
    title: "Vipassana Silent Insight Meditation",
    category: "Meditation",
    duration: "45 mins",
    level: "Intermediate",
    guide: "Emily Watson",
    desc: "A traditional mindfulness practice focusing on the deep interconnection of mind and body through self-observation.",
    slots: ["07:00 AM", "09:00 AM", "06:00 PM"],
  },
  {
    id: 2,
    title: "Somatic Breathwork for Stress Release",
    category: "Breathwork",
    duration: "30 mins",
    level: "Beginner",
    guide: "Marcus Vance",
    desc: "Active circular breathing techniques designed to release emotional tension and reset the nervous system.",
    slots: ["08:00 AM", "12:00 PM", "05:30 PM"],
  },
  {
    id: 3,
    title: "Tibetan Brass Singing Bowls Therapy",
    category: "Sound Healing",
    duration: "60 mins",
    level: "All Levels",
    guide: "Sarah Jenkins",
    desc: "An acoustic journey using singing bowls, gongs, and chimes to align brainwaves and restore cellular vibration.",
    slots: ["10:00 AM", "03:00 PM", "07:30 PM"],
  },
  {
    id: 4,
    title: "Slow Flow Spinal Alignment Yoga",
    category: "Yoga",
    duration: "50 mins",
    level: "Beginner",
    guide: "Marcus Vance",
    desc: "Slow transitions emphasizing spinal extension, hip opening, and conscious breathing to relax rigid joints.",
    slots: ["06:30 AM", "09:30 AM", "04:00 PM"],
  },
  {
    id: 5,
    title: "Mindfulness-Based Stress Reduction (MBSR)",
    category: "Meditation",
    duration: "40 mins",
    level: "All Levels",
    guide: "Emily Watson",
    desc: "Clinical meditation practices centered around body scans, emotional regulation, and cognitive reframing.",
    slots: ["11:00 AM", "02:00 PM", "08:00 PM"],
  },
  {
    id: 6,
    title: "Power Vinyasa Flow Challenge",
    category: "Yoga",
    duration: "60 mins",
    level: "Advanced",
    guide: "Marcus Vance",
    desc: "A fast-paced, cardiovascular yoga flow linking breath with movement to build core strength and physical stamina.",
    slots: ["07:30 AM", "05:00 PM"],
  },
  {
    id: 7,
    title: "Gong Bath Sound meditation",
    category: "Sound Healing",
    duration: "45 mins",
    level: "All Levels",
    guide: "Sarah Jenkins",
    desc: "Surrender to the deep, powerful vibrational waves of planetary gongs that induce a deep state of meditation.",
    slots: ["11:30 AM", "04:30 PM", "08:30 PM"],
  },
  {
    id: 8,
    title: "Morning Pranayama Core Breathing",
    category: "Breathwork",
    duration: "20 mins",
    level: "Beginner",
    guide: "Emily Watson",
    desc: "Traditional yogic breathing practices to stimulate metabolic rate, purify lungs, and energize the mind.",
    slots: ["06:00 AM", "08:30 AM"],
  },
];

function ClassesCatalog() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedClass, setSelectedClass] = useState(null); // For booking modal
  const [bookingDate, setBookingDate] = useState("");
  const [bookingSlot, setBookingSlot] = useState("");
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const categories = ["All", "Meditation", "Yoga", "Breathwork", "Sound Healing"];

  const filteredClasses = ALL_CLASSES.filter((cls) => {
    const matchesSearch =
      cls.title.toLowerCase().includes(search.toLowerCase()) ||
      cls.desc.toLowerCase().includes(search.toLowerCase()) ||
      cls.guide.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = activeCategory === "All" || cls.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleOpenBooking = (cls) => {
    setSelectedClass(cls);
    setBookingSlot(cls.slots[0]);
    // Set tomorrow as default date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setBookingDate(tomorrow.toISOString().split("T")[0]);
    setIsBooked(false);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (bookingName.trim() && bookingEmail.trim()) {
      setIsBooked(true);
      setTimeout(() => {
        setSelectedClass(null);
        setBookingName("");
        setBookingEmail("");
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
            <span className="section-subtitle">Our Catalog</span>
            <h1 className={styles.title}>Find Your Perfect Class</h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className={styles.subtitle}>
              Explore our diverse range of mindfulness sessions, alignment yoga flow, breathwork therapy, and immersive sound healing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Content Catalog */}
      <section className={styles.catalogSection}>
        <div className={styles.container}>
          
          {/* Controls Bar */}
          <div className={styles.controlsBar}>
            {/* Category tabs */}
            <div className={styles.tabs}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`${styles.tabBtn} ${activeCategory === cat ? styles.activeTab : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className={styles.searchWrapper}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search classes, guides, keywords..."
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

          {/* Grid of cards */}
          {filteredClasses.length > 0 ? (
            <StaggerContainer staggerVal={0.08} className={styles.grid}>
              {filteredClasses.map((cls) => (
                <m.div
                  key={cls.id}
                  variants={varStaggerItem}
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={styles.card}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.categoryTag}>{cls.category}</span>
                    <span className={styles.levelTag}>{cls.level}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{cls.title}</h3>
                  <p className={styles.cardDesc}>{cls.desc}</p>
                  
                  <div className={styles.cardDetails}>
                    <div className={styles.detailItem}>
                      <Clock size={14} className={styles.detailIcon} />
                      <span>{cls.duration}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <User size={14} className={styles.detailIcon} />
                      <span>Guide: {cls.guide}</span>
                    </div>
                  </div>

                  <m.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleOpenBooking(cls)}
                    className={`btn btn-primary ${styles.bookBtn}`}
                  >
                    Book Class Session
                  </m.button>
                </m.div>
              ))}
            </StaggerContainer>
          ) : (
            <div className={styles.noResults}>
              <AlertCircle size={40} className={styles.noResultsIcon} />
              <h3>No Classes Found</h3>
              <p>We couldn't find any classes matching your filters. Try clearing your search.</p>
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

      {/* Interactive Booking Modal Dialog wrapping ModalTransition */}
      <ModalTransition isOpen={!!selectedClass} onClose={() => setSelectedClass(null)}>
        {selectedClass && (
          <div className={styles.modalContent} style={{ padding: 0, border: "none" }}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedClass(null)}
              aria-label="Close dialog"
              style={{ zIndex: 10 }}
            >
              <X size={20} />
            </button>

            {!isBooked ? (
              <form onSubmit={handleConfirmBooking} className={styles.bookingForm} style={{ padding: "40px" }}>
                <h3 className={styles.modalTitle}>Book Your Slot</h3>
                <p className={styles.modalSubtitle}>
                  Reserve a virtual seat for <strong>{selectedClass.title}</strong> with {selectedClass.guide}.
                </p>

                <div className={styles.formGroup}>
                  <label htmlFor="booking-date">Select Date</label>
                  <input
                    type="date"
                    id="booking-date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Available Timeslots</label>
                  <div className={styles.slotsGrid}>
                    {selectedClass.slots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setBookingSlot(slot)}
                        className={`${styles.slotBtn} ${bookingSlot === slot ? styles.activeSlotBtn : ""}`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="booking-name">Your Full Name</label>
                  <input
                    type="text"
                    id="booking-name"
                    required
                    placeholder="Enter your name"
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="booking-email">Your Email Address</label>
                  <input
                    type="email"
                    id="booking-email"
                    required
                    placeholder="name@example.com"
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <m.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "8px" }}
                >
                  Confirm Class Reservation
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
                <h3>Reservation Confirmed!</h3>
                <p className={styles.successText}>
                  You're all set! We have sent a calendar invite and video link for <strong>{selectedClass.title}</strong> to <strong>{bookingEmail}</strong>.
                </p>
                <div className={styles.successDetails}>
                  <p><strong>Instructor:</strong> {selectedClass.guide}</p>
                  <p><strong>Date:</strong> {bookingDate}</p>
                  <p><strong>Time:</strong> {bookingSlot} (local time)</p>
                </div>
              </div>
            )}
          </div>
        )}
      </ModalTransition>
    </div>
  );
}

export default function ClassesPage() {
  return (
    <Suspense fallback={<div className={styles.pageWrapper} style={{ textAlign: "center", padding: "100px" }}>Loading class catalog...</div>}>
      <ClassesCatalog />
    </Suspense>
  );
}
