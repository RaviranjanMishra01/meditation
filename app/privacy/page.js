"use strict";

"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Eye, Key, Heart } from "lucide-react";
import styles from "./privacy.module.css";
import FadeUp from "../../components/motion/FadeUp";
import StaggerContainer from "../../components/motion/StaggerContainer";
import { varStaggerItem } from "../../lib/motion/stagger";

export default function PrivacyPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className={styles.container}>
          <FadeUp>
            <span className="section-subtitle">Sanctuary Guidelines</span>
            <h1>Privacy Policy</h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className={styles.subtitle}>
              Your privacy is a sanctuary. Learn how we safeguard your data and protect your mindfulness journey at Calmify.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Policy Details Container */}
      <section className={styles.container}>
        <FadeUp delay={0.25}>
          <div className={styles.contentBox}>
            <span className={styles.lastUpdated}>Last Updated: May 28, 2026</span>

            <StaggerContainer staggerVal={0.1}>
              {/* Introduction */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Introduction & Philosophy</h2>
                <p className={styles.text}>
                  Welcome to Calmify ("we," "our," or "us"). We believe that your mental well-being is deeply personal, and the details of your meditation, breathing patterns, and stress management should remain secure. This Privacy Policy details how we handle the collection, protection, and use of information gathered during your wellness sessions.
                </p>
                <p className={styles.text}>
                  By accessing or utilizing our guides, sound frequencies, and custom pathways, you explicitly consent to the data terms outlined in this document.
                </p>
              </m.div>

              {/* Data Collection */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Information We Gather</h2>
                <p className={styles.text}>
                  To personalize your guided meditation classes and suggest relevant breathing paths, we gather basic data fields:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Profile Identification:</strong> First name, email address, password token, and registration credentials.
                  </li>
                  <li className={styles.listItem}>
                    <strong>Mindfulness Logs:</strong> Completed sessions history, tracking stats, current streaks, and favorited audio frequencies.
                  </li>
                  <li className={styles.listItem}>
                    <strong>Payment Processing:</strong> Encrypted secure tokens used to complete membership activations (processed entirely through secure banking APIs).
                  </li>
                  <li className={styles.listItem}>
                    <strong>Technical Analytics:</strong> Device configurations, screen dimensions, network logs, and interaction timeframes.
                  </li>
                </ul>
              </m.div>

              {/* How We Use Info */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>3. How Your Data Is Utilized</h2>
                <p className={styles.text}>
                  Calmify strictly utilizes accumulated metrics to nurture and optimize your wellness routines. We use this information to:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Provide personalized yoga, breathwork, and audio soundscapes.</li>
                  <li className={styles.listItem}>Schedule live cohorts, coordinate bookings, and connect you with certified guides.</li>
                  <li className={styles.listItem}>Track progress metrics, streaks, and award milestone badges.</li>
                  <li className={styles.listItem}>Optimize layout responsiveness and identify network anomalies.</li>
                </ul>
              </m.div>

              {/* Security & Shield */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Sanctuary Security Practices</h2>
                <p className={styles.text}>
                  We implement production-grade security safeguards to prevent unapproved access, altering, or deletion of your logs:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>SSL Encrypted Connections:</strong> All data in transit is protected using transport layer security standards.
                  </li>
                  <li className={styles.listItem}>
                    <strong>Password Hash Protocols:</strong> Authentication parameters are hashed using cryptographic salt methods.
                  </li>
                  <li className={styles.listItem}>
                    <strong>Strict Token Expirations:</strong> JWT authentication credentials auto-expire after 7 days to lock session vulnerabilities.
                  </li>
                </ul>
              </m.div>

              {/* Data Rights */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Your Rights & Options</h2>
                <p className={styles.text}>
                  You hold full command over your sanctuary metrics. You can exercise these rights at any moment:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Export Log Details:</strong> You may request a compiled CSV archive of your complete meditation statistics.
                  </li>
                  <li className={styles.listItem}>
                    <strong>Profile Erasure:</strong> You can delete your account permanently, which completely wipes your profile and history from our servers.
                  </li>
                  <li className={styles.listItem}>
                    <strong>Opt-Out:</strong> Unsubscribe from non-essential newsletters or notification schedules.
                  </li>
                </ul>
              </m.div>

              {/* Contact sanctuary */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Contacting Our Guides Support</h2>
                <p className={styles.text}>
                  If you have questions regarding your data logs, cookies management, or specific security practices, please contact our support sanctuary:
                </p>
                <p className={styles.text}>
                  📧 Email: <strong>support@calmify-meditation.com</strong><br />
                  📍 Address: 108 Stillness Way, Suite 400, San Francisco, CA 94107
                </p>
              </m.div>

              {/* Back Link */}
              <m.div variants={varStaggerItem} style={{ marginTop: "48px", borderTop: "1px solid rgba(27, 58, 36, 0.08)", paddingTop: "32px" }}>
                <Link href="/" className="btn btn-secondary">
                  <ArrowLeft size={16} />
                  <span>Return to Homepage</span>
                </Link>
              </m.div>
            </StaggerContainer>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
