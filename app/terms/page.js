"use strict";

"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import styles from "./terms.module.css";
import FadeUp from "../../components/motion/FadeUp";
import StaggerContainer from "../../components/motion/StaggerContainer";
import { varStaggerItem } from "../../lib/motion/stagger";

export default function TermsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className={styles.container}>
          <FadeUp>
            <span className="section-subtitle">Sanctuary Agreement</span>
            <h1>Terms of Service</h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className={styles.subtitle}>
              Agreement rules and responsibilities. Please read the Terms of Service before using the Calmify portal.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Terms Details Container */}
      <section className={styles.container}>
        <FadeUp delay={0.25}>
          <div className={styles.contentBox}>
            <span className={styles.lastUpdated}>Last Updated: May 28, 2026</span>

            <StaggerContainer staggerVal={0.1}>
              {/* Acceptance of Terms */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Acceptance of Sanctuary Agreement</h2>
                <p className={styles.text}>
                  By accessing, registering, or browsing the Calmify platform (referred to as "Service"), you agree to comply with and be bound by these Terms of Service. If you do not accept these rules, you are prohibited from utilizing our meditation directories, guide consultations, scheduler systems, or audio files.
                </p>
              </m.div>

              {/* Eligibility & Behavior */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Account Eligibility & User Conduct</h2>
                <p className={styles.text}>
                  To access our classes and cohort groups, you must:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Be at least 18 years of age (or have explicit parental/guardian authorization).</li>
                  <li className={styles.listItem}>Provide accurate registration parameters and protect your credentials.</li>
                  <li className={styles.listItem}>Commit to compassionate, respectful interactions inside community cohort chat boards and group sessions.</li>
                  <li className={styles.listItem}>Not distribute, alter, or exploit any custom meditation audios or source code files.</li>
                </ul>
              </m.div>

              {/* Memberships & Refunds */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Subscriptions, Payments & Cancellation</h2>
                <p className={styles.text}>
                  We offer Starter and Premium memberships. Billing is auto-renewed based on your chosen cycle (Monthly or Annually):
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Billing:</strong> Fees are charged on the date of activation. Annual subscriptions are billed upfront in full, saving 20% compared to monthly paths.
                  </li>
                  <li className={styles.listItem}>
                    <strong>14-Day Refund Trial:</strong> If you are unsatisfied, you can request a 100% refund within the first 14 days of activation.
                  </li>
                  <li className={styles.listItem}>
                    <strong>Cancellation:</strong> You can cancel your subscription renewal at any point via your account settings page.
                  </li>
                </ul>
              </m.div>

              {/* Medical Disclaimer */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Wellness & Medical Disclaimer</h2>
                <p className={styles.text}>
                  <strong>IMPORTANT DISCLOSURE:</strong> Calmify is a wellness and mindfulness portal. The meditation classes, guides coaching, breathwork exercises, and acoustic frequencies are intended for self-improvement and stress-reduction purposes.
                </p>
                <p className={styles.text}>
                  They do NOT constitute medical treatment, psychiatric counseling, or clinical diagnostic evaluations. If you are experiencing severe depression, clinical anxiety, or chronic physical health conditions, please consult a licensed medical professional.
                </p>
              </m.div>

              {/* Intellectual Property */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Proprietary Content Rights</h2>
                <p className={styles.text}>
                  All visual graphics, custom generated assets, text files, acoustic frequencies, layout designs, and custom animations used on this site are the exclusive property of Calmify Wellness Inc. Copying, republishing, or redistributing content without explicit written consent is strictly prohibited.
                </p>
              </m.div>

              {/* Liability Threshold */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Limitations of Liability</h2>
                <p className={styles.text}>
                  To the maximum extent permitted by applicable law, Calmify Wellness Inc. and its guides shall not be held liable for any direct, indirect, incidental, or mental wellness discomfort arising from your participation in online workshops or guided stillness practices.
                </p>
              </m.div>

              {/* Dispute Resolution */}
              <m.div variants={varStaggerItem} className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Governing Law</h2>
                <p className={styles.text}>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, USA, without regard to conflict of law principles. Any legal actions must be resolved in state or federal courts in San Francisco, CA.
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
