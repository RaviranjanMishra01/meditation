"use strict";

"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, Send } from "lucide-react";
import styles from "./Footer.module.css";

// Custom SVG Social Icons to avoid version-dependent lucide-react build errors
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Leaf className={styles.logoIcon} />
              <span>Calmify</span>
            </Link>
            <p className={styles.brandDesc}>
              A quiet sanctuary for your mind and body. We help you establish a sustainable mindfulness and meditation practice for modern living.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram" className={styles.socialLink}><InstagramIcon /></a>
              <a href="#" aria-label="Facebook" className={styles.socialLink}><FacebookIcon /></a>
              <a href="#" aria-label="YouTube" className={styles.socialLink}><YoutubeIcon /></a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h3>Explore</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/classes">Our Classes</Link></li>
              <li><Link href="/guides">Meet Guides</Link></li>
              <li><Link href="/pricing">Pricing Plans</Link></li>
              <li><Link href="/blog">Wellness Blog</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h3>Classes</h3>
            <ul>
              <li><Link href="/classes?category=Meditation">Guided Meditation</Link></li>
              <li><Link href="/classes?category=Yoga">Gentle Hatha Yoga</Link></li>
              <li><Link href="/classes?category=Breathwork">Deep Breathing</Link></li>
              <li><Link href="/classes?category=Sound%20Healing">Sound Bath Therapy</Link></li>
              <li><Link href="/classes?category=Yoga">Vinyasa Flow</Link></li>
            </ul>
          </div>

          <div className={styles.newsletterCol}>
            <h3>Newsletter</h3>
            <p className={styles.newsletterDesc}>
              Receive weekly mindfulness exercises, class announcements, and wellness insights directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className={styles.subscribeInput}
              />
              <button type="submit" className={styles.subscribeBtn} aria-label="Subscribe">
                {subscribed ? "Subbed!" : <Send size={18} />}
              </button>
            </form>
            {subscribed && (
              <span className={styles.successMessage}>
                Thank you! You have successfully subscribed.
              </span>
            )}
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Calmify Wellness Inc. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
