"use strict";

"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Heart, Wind } from "lucide-react";
import { m } from "framer-motion";
import styles from "./MindfulnessIntro.module.css";
import FadeUp from "../motion/FadeUp";
import ModalTransition from "../motion/ModalTransition";

export default function MindfulnessIntro() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Permanently force mute and volume 0 when user unmutes native controls
  const handleVolumeChange = (e) => {
    e.target.muted = true;
    e.target.volume = 0;
  };

  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Heading and Brand Story */}
          <div className={styles.textCol}>
            <FadeUp>
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title">
                Helping you find peace through mindfulness
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.15}>
              <p className={styles.descMain}>
                Calmify was founded with a single mission: to make meditation and mental wellness accessible, modern, and deeply impactful. We integrate time-tested techniques with contemporary psychological principles.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className={styles.descSub}>
                Whether you are struggling with stress, seeking better sleep, or aiming to sharpen your focus, our structured classes provide the guidance you need. We believe that small, daily mindfulness habits lead to profound life transformations.
              </p>
            </FadeUp>
            
            <div className={styles.features}>
              <FadeUp delay={0.35} className={styles.featureItem}>
                <div className={styles.featureIcon}><Heart size={20} /></div>
                <div>
                  <h4>Compassionate Guides</h4>
                  <p>Our trainers provide empathetic, personalized coaching.</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.45} className={styles.featureItem}>
                <div className={styles.featureIcon}><Wind size={20} /></div>
                <div>
                  <h4>Science-backed Methods</h4>
                  <p>Classes designed around neuroplasticity and stress-reduction science.</p>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Right Column: Video Play Card */}
          <div className={styles.videoCol}>
            <FadeUp delay={0.3} className={styles.videoCard}>
              <div className={styles.imageContainer}>
                <Image
                  src="/images/how_we_work.png"
                  alt="Yoga class inside a modern wellness room"
                  fill
                  className={styles.videoImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.overlay} />
                
                {/* Play Button Trigger centering fix */}
                <div className={styles.playButtonWrapper}>
                  <m.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.playButton}
                    onClick={() => setIsVideoOpen(true)}
                    aria-label="Play introductory video"
                  >
                    <Play size={28} fill="currentColor" className={styles.playIcon} />
                  </m.button>
                </div>

                <div className={styles.cardBadge}>
                  <span>How We Work</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay using central ModalTransition wrapper */}
      <ModalTransition
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        maxWidth="800px"
      >
        <div className={styles.modalContent}>
          <button
            className={styles.closeButton}
            onClick={() => setIsVideoOpen(false)}
            aria-label="Close video"
          >
            <X size={24} />
          </button>
          
          <div className={styles.videoPlayerContainer}>
            <video
              src="/video/meditationvodeo.mp4"
              controls
              autoPlay
              loop
              playsInline
              muted
              onVolumeChange={handleVolumeChange}
              className={styles.videoElement}
              style={{ width: "100%", height: "100%", borderRadius: "8px", backgroundColor: "#000" }}
            />
          </div>
        </div>
      </ModalTransition>
    </section>
  );
}
