"use strict";

"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { springCalm } from "../../lib/motion/easing";

export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig transition={springCalm}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
