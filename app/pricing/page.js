"use strict";

"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, ShieldCheck, Heart, Award, ArrowRight, CreditCard } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import styles from "./pricing.module.css";
import FadeUp from "../../components/motion/FadeUp";
import StaggerContainer from "../../components/motion/StaggerContainer";
import ModalTransition from "../../components/motion/ModalTransition";
import { varStaggerItem } from "../../lib/motion/stagger";

const COMPARISON_FEATURES = [
  { name: "Guided meditations library", starter: "50+ basic", premium: "500+ classes" },
  { name: "Live sessions / month", starter: "5 sessions", premium: "Unlimited sessions" },
  { name: "Personal 1-on-1 coaching", starter: <X size={16} style={{ color: "var(--text-muted)", opacity: 0.5 }} />, premium: "30 mins / month" },
  { name: "Masterclasses & Workshops", starter: <X size={16} style={{ color: "var(--text-muted)", opacity: 0.5 }} />, premium: "Unlimited access" },
  { name: "Offline mobile downloads", starter: <X size={16} style={{ color: "var(--text-muted)", opacity: 0.5 }} />, premium: "Yes, full access" },
  { name: "Community support channels", starter: "Board only", premium: "Private channels & Cohorts" },
  { name: "Streaks & tracking metrics", starter: "Yes", premium: "Yes (Advanced reports)" },
  { name: "Priority support line", starter: <X size={16} style={{ color: "var(--text-muted)", opacity: 0.5 }} />, premium: "24/7 dedicated line" },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [checkoutPlan, setCheckoutPlan] = useState(null); // Selected plan for checkout modal
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const priceStarter = billingCycle === "monthly" ? 19 : 14;
  const pricePremium = billingCycle === "monthly" ? 49 : 39;

  const handleOpenCheckout = (planName, price) => {
    setCheckoutPlan({ name: planName, price: price });
    setIsSuccess(false);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (cardNumber.replace(/\s+/g, "").length === 16 && cardExpiry && cardCVV.length === 3) {
      setIsSuccess(true);
      setTimeout(() => {
        setCheckoutPlan(null);
        setCardNumber("");
        setCardExpiry("");
        setCardCVV("");
        setIsSuccess(false);
      }, 3500);
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className={styles.container}>
          <FadeUp>
            <span className="section-subtitle">Membership</span>
            <h1 className={styles.title}>Flexible Pricing Pathways</h1>
          </FadeUp>
          
          <FadeUp delay={0.15}>
            <p className={styles.subtitle}>
              Invest in your mental hygiene. Choose a structured membership that aligns with your wellness goals.
            </p>
          </FadeUp>

          {/* Billing Switcher Toggle using layoutId */}
          <FadeUp delay={0.25}>
            <div className={styles.toggleContainer}>
              <span className={`${styles.cycleLabel} ${billingCycle === "monthly" ? styles.activeCycle : ""}`}>
                Monthly billing
              </span>
              <button
                className={styles.toggleBtn}
                onClick={() => setBillingCycle((prev) => (prev === "monthly" ? "yearly" : "monthly"))}
                aria-label="Toggle billing cycle"
              >
                <m.div
                  layout
                  className={styles.toggleCircle}
                  style={{
                    marginLeft: billingCycle === "yearly" ? "28px" : "0px",
                    backgroundColor: billingCycle === "yearly" ? "var(--accent-gold)" : "var(--bg-light)",
                  }}
                />
              </button>
              <span className={`${styles.cycleLabel} ${billingCycle === "yearly" ? styles.activeCycle : ""}`}>
                Yearly billing
                <span className={styles.saveBadge}>Save 20%</span>
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={styles.plansSection}>
        <div className={styles.container}>
          <StaggerContainer staggerVal={0.15} className={styles.grid}>
            {/* Starter Card */}
            <m.div
              variants={varStaggerItem}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={styles.card}
            >
              <h3 className={styles.planName}>Starter Plan</h3>
              <p className={styles.planDesc}>Excellent for starting a simple, daily breathing and stillness habit.</p>
              
              <div className={styles.priceRow}>
                <span className={styles.currency}>$</span>
                <div style={{ overflow: "hidden", display: "inline-block", height: "56px" }}>
                  <AnimatePresence mode="wait">
                    <m.span
                      key={priceStarter}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -24, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className={styles.amount}
                      style={{ display: "block" }}
                    >
                      {priceStarter}
                    </m.span>
                  </AnimatePresence>
                </div>
                <span className={styles.period}>/month</span>
              </div>
              
              <ul className={styles.featuresList}>
                <li><Check size={16} /> <span>50+ basic meditations</span></li>
                <li><Check size={16} /> <span>5 live sessions per month</span></li>
                <li><Check size={16} /> <span>Community chat board access</span></li>
                <li><Check size={16} /> <span>Progress streaks dashboard</span></li>
              </ul>

              <m.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOpenCheckout("Starter Plan", priceStarter)}
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "auto" }}
              >
                Choose Starter
              </m.button>
            </m.div>

            {/* Premium Card */}
            <m.div
              variants={varStaggerItem}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`${styles.card} ${styles.cardHighlight}`}
            >
              <div className={styles.ribbon}>Most Popular</div>
              <h3 className={styles.planNameHighlight}>Premium Plan</h3>
              <p className={styles.planDesc}>Unlimited guides coaching, live classes, and acoustic frequencies.</p>
              
              <div className={styles.priceRow}>
                <span className={styles.currency}>$</span>
                <div style={{ overflow: "hidden", display: "inline-block", height: "56px" }}>
                  <AnimatePresence mode="wait">
                    <m.span
                      key={pricePremium}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -24, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className={styles.amount}
                      style={{ display: "block" }}
                    >
                      {pricePremium}
                    </m.span>
                  </AnimatePresence>
                </div>
                <span className={styles.period}>/month</span>
              </div>
              
              <ul className={styles.featuresList}>
                <li><Check size={16} /> <span>Unlimited access to 500+ classes</span></li>
                <li><Check size={16} /> <span>Unlimited live daily group sessions</span></li>
                <li><Check size={16} /> <span>1-on-1 monthly 30-min coach check-in</span></li>
                <li><Check size={16} /> <span>Specialized Masterclasses</span></li>
                <li><Check size={16} /> <span>Offline downloads on our mobile app</span></li>
              </ul>

              <m.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOpenCheckout("Premium Plan", pricePremium)}
                className="btn btn-accent"
                style={{ width: "100%", marginTop: "auto" }}
              >
                Go Premium
              </m.button>
            </m.div>
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className={styles.matrixSection}>
        <div className={styles.container}>
          <FadeUp>
            <h2 className={styles.matrixTitle}>Compare Plan Details</h2>
          </FadeUp>
          
          <FadeUp delay={0.15} className={styles.tableWrapper}>
            <div className={styles.tableScroll}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Starter</th>
                    <th>Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_FEATURES.map((feat, idx) => (
                    <tr key={idx}>
                      <td className={styles.featName}>{feat.name}</td>
                      <td>{feat.starter}</td>
                      <td className={styles.premiumCell}>{feat.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Security Info */}
      <section className={styles.securitySection}>
        <div className={styles.container}>
          <div className={styles.securityGrid}>
            <FadeUp delay={0.1} className={styles.secItem}>
              <ShieldCheck size={32} className={styles.secIcon} />
              <h4>Secure Checkout</h4>
              <p>All transaction details are encrypted using banking-grade SSL layers.</p>
            </FadeUp>
            <FadeUp delay={0.2} className={styles.secItem}>
              <Heart size={32} className={styles.secIcon} />
              <h4>100% Satisfaction</h4>
              <p>If you cancel within your first 14 days, you can request a full refund.</p>
            </FadeUp>
            <FadeUp delay={0.3} className={styles.secItem}>
              <Award size={32} className={styles.secIcon} />
              <h4>Flexible Upgrades</h4>
              <p>Instantly transition between tiers. Pro-rated billing applied instantly.</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Checkout Modal Dialog wrapping ModalTransition */}
      <ModalTransition isOpen={!!checkoutPlan} onClose={() => setCheckoutPlan(null)}>
        {checkoutPlan && (
          <div className={styles.modalContent} style={{ padding: 0, border: "none" }}>
            <button
              className={styles.closeBtn}
              onClick={() => setCheckoutPlan(null)}
              aria-label="Close checkout"
              style={{ zIndex: 10 }}
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleCheckoutSubmit} className={styles.checkoutForm} style={{ padding: "40px" }}>
                <div className={styles.checkoutHeader}>
                  <CreditCard size={24} className={styles.checkoutIcon} />
                  <h3>Calmify Secure Checkout</h3>
                </div>
                <div className={styles.summaryBox}>
                  <p><strong>Selected Plan:</strong> {checkoutPlan.name}</p>
                  <p><strong>Billing:</strong> {billingCycle === "monthly" ? "Monthly" : "Yearly"}</p>
                  <p className={styles.totalPrice}><strong>Total Due:</strong> ${checkoutPlan.price}{billingCycle === "monthly" ? "/mo" : "/mo (billed annually)"}</p>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="card-name">Cardholder Name</label>
                  <input type="text" id="card-name" required placeholder="John Doe" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="card-number">Credit Card Number</label>
                  <input
                    type="text"
                    id="card-number"
                    required
                    placeholder="4111 2222 3333 4444"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    maxLength={19}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup} style={{ flex: 1 }}>
                    <label htmlFor="card-expiry">Expiry Date</label>
                    <input
                      type="text"
                      id="card-expiry"
                      required
                      placeholder="MM/YY"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      maxLength={5}
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup} style={{ flex: 1 }}>
                    <label htmlFor="card-cvv">CVV Code</label>
                    <input
                      type="password"
                      id="card-cvv"
                      required
                      placeholder="123"
                      value={cardCVV}
                      onChange={(e) => setCardCVV(e.target.value.replace(/\D/g, ""))}
                      maxLength={3}
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <m.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "12px" }}
                >
                  Pay and Start Membership
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
                <h3>Subscription Activated!</h3>
                <p className={styles.successText}>
                  Your payment has cleared successfully! Welcome to the Calmify community.
                </p>
                <div className={styles.receiptBox}>
                  <p><strong>Subscription:</strong> {checkoutPlan.name}</p>
                  <p><strong>Status:</strong> Active</p>
                  <p><strong>Next Billing Date:</strong> {new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString()}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </ModalTransition>
    </div>
  );
}
