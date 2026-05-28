"use strict";

"use client";

import { useState } from "react";
import SplashWelcome from "../components/motion/SplashWelcome";
import Hero from "../components/home/Hero";
import MindfulnessIntro from "../components/home/MindfulnessIntro";
import ClassesPreview from "../components/home/ClassesPreview";
import ExpertGuidance from "../components/home/ExpertGuidance";
import GuidesSection from "../components/home/GuidesSection";
import Testimonials from "../components/home/Testimonials";
import CommunityBanner from "../components/home/CommunityBanner";
import PricingSection from "../components/home/PricingSection";
import FAQSection from "../components/home/FAQSection";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      {!hasEntered && (
        <SplashWelcome onEnter={() => setHasEntered(true)} />
      )}
      <div style={{ 
        opacity: hasEntered ? 1 : 0, 
        visibility: hasEntered ? "visible" : "hidden",
        transition: "opacity 1.2s ease, visibility 1.2s ease" 
      }}>
        <Hero />
        <MindfulnessIntro />
        <ClassesPreview />
        <ExpertGuidance />
        <GuidesSection />
        <Testimonials />
        <CommunityBanner />
        <PricingSection />
        <FAQSection />
      </div>
    </>
  );
}
