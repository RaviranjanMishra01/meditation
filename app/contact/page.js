"use strict";

"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { m } from "framer-motion";
import styles from "./contact.module.css";
import FadeUp from "../../components/motion/FadeUp";
import StaggerContainer from "../../components/motion/StaggerContainer";
import { varStaggerItem } from "../../lib/motion/stagger";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setIsSent(true);
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setSubject("General Inquiry");
        setIsSent(false);
      }, 4000);
    }
  };

  const contactInfos = [
    {
      icon: <MapPin size={20} />,
      title: "Our Studio Location",
      desc: "452 Redwood Sanctuary Blvd, Suite 100, San Francisco, CA 94111",
    },
    {
      icon: <Phone size={20} />,
      title: "Phone Lines",
      desc: "+1 (800) 555-CALM (Direct support: 8 AM - 6 PM PST)",
    },
    {
      icon: <Mail size={20} />,
      title: "Email Correspondence",
      desc: "support@calmify.com (Inquiries answered within 12 hours)",
    },
    {
      icon: <Clock size={20} />,
      title: "Studio Operating Hours",
      desc: "Monday - Sunday: 06:00 AM - 09:00 PM (Local time)",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className={styles.container}>
          <FadeUp>
            <span className="section-subtitle">Reach Out</span>
            <h1 className={styles.title}>We Are Here To Support You</h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className={styles.subtitle}>
              Have questions about group memberships, private retreats, or specialized courses? Drop us a line.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Grid containing details and form */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Info Cards Column */}
            <div className={styles.infoCol}>
              <FadeUp>
                <h2 className={styles.sectionTitle}>Contact Information</h2>
                <p className={styles.sectionDesc}>
                  Whether you are an absolute beginner or looking to coordinate an enterprise wellness program, our team is ready to assist.
                </p>
              </FadeUp>

              {/* Staggered load of location cards */}
              <StaggerContainer staggerVal={0.1} className={styles.infoList}>
                {contactInfos.map((info, idx) => (
                  <m.div key={idx} variants={varStaggerItem} className={styles.infoCard}>
                    <div className={styles.iconWrapper}>{info.icon}</div>
                    <div>
                      <h3 className={styles.cardTitle}>{info.title}</h3>
                      <p className={styles.cardDesc}>{info.desc}</p>
                    </div>
                  </m.div>
                ))}
              </StaggerContainer>
            </div>

            {/* Form Column */}
            <FadeUp delay={0.2} className={styles.formCol}>
              <div className={styles.formContainer}>
                <h2 className={styles.formHeaderTitle}>Send Us a Message</h2>
                <p className={styles.formHeaderSubtitle}>Fill out the fields below, and our relations team will connect with you.</p>

                {isSent ? (
                  <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={styles.successBlock}
                  >
                    <CheckCircle size={48} className={styles.successIcon} />
                    <h3>Message Delivered!</h3>
                    <p>Thank you for reaching out, <strong>{name}</strong>. A client relations specialist has received your inquiry and will email you at <strong>{email}</strong> shortly.</p>
                  </m.div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-name">Full Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        placeholder="e.g. John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="contact-email">Email Address</label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="contact-subject">Inquiry Subject</label>
                      <select
                        id="contact-subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className={styles.formSelect}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Group & Corporate Deals">Group & Corporate Deals</option>
                        <option value="Instructor Partnerships">Instructor Partnerships</option>
                        <option value="Billing & Account Help">Billing & Account Help</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="contact-msg">Your Message</label>
                      <textarea
                        id="contact-msg"
                        required
                        placeholder="Describe how we can help you..."
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={styles.formTextarea}
                      />
                    </div>

                    <m.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="btn btn-primary"
                    >
                      <Send size={16} />
                      <span>Send Message</span>
                    </m.button>
                  </form>
                )}
              </div>
            </FadeUp>

          </div>
        </div>
      </section>
    </div>
  );
}
