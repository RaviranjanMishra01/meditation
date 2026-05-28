"use strict";

"use client";

import { useEffect } from "react";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import Lenis from "lenis";
import { springCalm } from "../../lib/motion/easing";

export default function MotionProvider({ children }) {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig transition={springCalm}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
