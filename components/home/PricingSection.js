"use strict";

"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Info } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import styles from "./PricingSection.module.css";
import FadeUp from "../motion/FadeUp";
import StaggerContainer from "../motion/StaggerContainer";
import { varStaggerItem } from "../../lib/motion/stagger";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or yearly

  const plans = [
    {
      name: "Starter Plan",
      priceMonthly: 19,
      priceYearly: 14,
      desc: "Perfect for establishing a basic, sustainable daily breathing and meditation routine.",
      features: [
        "Access to 50+ basic meditations",
        "5 live group sessions per month",
        "Community chat board access",
        "Guided breathing exercises (essential)",
        "Progress tracking & streaks dashboard",
      ],
      highlight: false,
      cta: "Choose Starter Plan",
    },
    {
      name: "Premium Plan",
      priceMonthly: 49,
      priceYearly: 39,
      desc: "Our most popular tier. Unlimited guidance, custom schedules, and coaching support.",
      features: [
        "Unlimited access to 500+ classes",
        "Unlimited live daily group sessions",
        "1-on-1 monthly 30-min coach check-in",
        "Access to specialized Masterclasses",
        "Offline downloads on our mobile app",
        "Priority customer support lines",
      ],
      highlight: true,
      cta: "Go Premium Today",
    },
  ];

  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <FadeUp>
            <span className="section-subtitle">Pricing Plans</span>
            <h2 className="section-title">
              Choose your wellness path from the comfort of home
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p className={styles.headerDesc}>
              Transparent, flexible plans that can be paused or cancelled at any time. No hidden setup fees or contracts.
            </p>
          </FadeUp>

          {/* Billing Switcher Toggle */}
          <FadeUp delay={0.2}>
            <div className={styles.toggleContainer}>
              <span className={`${styles.cycleLabel} ${billingCycle === "monthly" ? styles.activeCycle : ""}`}>
                Monthly
              </span>
              <button
                className={styles.toggleBtn}
                onClick={() => setBillingCycle((prev) => (prev === "monthly" ? "yearly" : "monthly"))}
                aria-label="Toggle billing cycle"
              >
                {/* layoutId on circle handles slide animations smoothly! */}
                <m.div
                  layout
                  className={styles.toggleCircle}
                  style={{
                    marginLeft: billingCycle === "yearly" ? "28px" : "0px",
                    backgroundColor: billingCycle === "yearly" ? "var(--accent-gold)" : "var(--primary-dark)",
                  }}
                />
              </button>
              <span className={`${styles.cycleLabel} ${billingCycle === "yearly" ? styles.activeCycle : ""}`}>
                Yearly
                <span className={styles.saveBadge}>Save 20%</span>
              </span>
            </div>
          </FadeUp>
        </div>

        {/* Pricing Cards Container */}
        <StaggerContainer staggerVal={0.15} className={styles.grid}>
          {plans.map((plan, idx) => {
            const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;
            return (
              <m.div
                key={idx}
                variants={varStaggerItem}
                whileHover={{ y: -8, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`${styles.card} ${plan.highlight ? styles.cardHighlight : ""}`}
              >
                {plan.highlight && <div className={styles.popularRibbon}>Most Popular</div>}
                
                <div className={styles.cardHeader}>
                  <h3 className={plan.highlight ? styles.planNameHighlight : styles.planName}>
                    {plan.name}
                  </h3>
                  <p className={styles.planDesc}>{plan.desc}</p>
                  
                  {/* Digital Price Flips using AnimatePresence */}
                  <div className={styles.priceRow}>
                    <span className={styles.currency}>$</span>
                    <div style={{ overflow: "hidden", display: "inline-block", height: "56px" }}>
                      <AnimatePresence mode="wait">
                        <m.span
                          key={price}
                          initial={{ y: 24, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -24, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className={styles.amount}
                          style={{ display: "block" }}
                        >
                          {price}
                        </m.span>
                      </AnimatePresence>
                    </div>
                    <span className={styles.period}>/month</span>
                  </div>
                  
                  {billingCycle === "yearly" && (
                    <span className={styles.yearlyNote}>
                      Billed yearly (${price * 12}/yr)
                    </span>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.featuresHeading}>Includes:</p>
                  <ul className={styles.featuresList}>
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className={styles.featureItem}>
                        <Check size={16} className={styles.checkIcon} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardFooter}>
                  <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: "100%" }}>
                    <Link
                      href={`/pricing?plan=${plan.name.replace(/\s+/g, "-")}&cycle=${billingCycle}`}
                      className={`btn ${plan.highlight ? "btn-accent" : "btn-primary"} ${styles.ctaButton}`}
                    >
                      {plan.cta}
                    </Link>
                  </m.div>
                  <p className={styles.disclaimer}>Cancel or switch tiers anytime</p>
                </div>
              </m.div>
            );
          })}
        </StaggerContainer>

        <FadeUp delay={0.4}>
          <div className={styles.guaranteeBox}>
            <Info size={18} className={styles.guaranteeIcon} />
            <span>Need custom rates for families, studios, or enterprise teams? <Link href="/contact">Get in touch with support</Link></span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
