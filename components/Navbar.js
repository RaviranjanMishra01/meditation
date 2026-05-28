"use strict";

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import styles from "./Navbar.module.css";
import { easeCalm } from "../lib/motion/easing";
import { varStaggerContainer, varStaggerItem } from "../lib/motion/stagger";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Classes", href: "/classes" },
    { name: "Guides", href: "/guides" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Mobile menu links stagger variants
  const mobileDrawerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easeCalm,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: easeCalm,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 150, damping: 18 },
    },
  };

  return (
    <m.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easeCalm }}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
        <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href="/" className={styles.logo}>
            <Leaf className={styles.logoIcon} />
            <span>Calmify</span>
          </Link>
        </m.div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <m.div
                key={link.name}
                whileHover={{ y: -1 }}
                className={styles.linkWrapper}
              >
                <Link
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.active : ""}`}
                >
                  {link.name}
                  {/* layoutId active line creates a sliding highlight pill/line! */}
                  {isActive && (
                    <m.div
                      layoutId="active-nav-line"
                      className={styles.activeLine}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </m.div>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/classes" className="btn btn-primary btn-sm">
              Book a Class
            </Link>
          </m.div>
        </div>

        {/* Mobile Toggle */}
        <m.button
          whileTap={{ scale: 0.9 }}
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </m.button>
      </div>

      {/* Mobile Drawer using AnimatePresence with Staggered Link Reveals */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            key="mobile-nav-drawer"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileDrawerVariants}
            className={styles.mobileDrawer}
          >
            <div className={styles.drawerContainer}>
              <nav className={styles.mobileNav}>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <m.div
                      key={link.name}
                      variants={mobileLinkVariants}
                    >
                      <Link
                        href={link.href}
                        className={`${styles.mobileLink} ${isActive ? styles.mobileActive : ""}`}
                        onClick={() => setIsOpen(false)}
                        style={{ position: "relative", display: "block" }}
                      >
                        {link.name}
                        {isActive && (
                          <m.div
                            layoutId="active-mobile-line"
                            className={styles.activeMobileLine}
                            style={{
                              position: "absolute",
                              left: 0,
                              bottom: 0,
                              height: "2px",
                              width: "40px",
                              backgroundColor: "var(--accent-gold)",
                            }}
                          />
                        )}
                      </Link>
                    </m.div>
                  );
                })}
              </nav>
              <m.div variants={mobileLinkVariants} className={styles.drawerActions}>
                <Link
                  href="/classes"
                  className="btn btn-primary"
                  onClick={() => setIsOpen(false)}
                  style={{ width: "100%" }}
                >
                  Book a Class
                </Link>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
