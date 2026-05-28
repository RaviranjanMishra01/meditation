# 🌿 Calmify — Next.js Wellness & Meditation Portal

A premium, interactive wellness and meditation portal built with Next.js App Router and React 19.  
Features an organic design system, cinematic onboarding welcome splash, custom animation system via Framer Motion, and full device responsiveness.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_React-FF5733?style=for-the-badge&logo=react&logoColor=white)

---

## 🌐 Live Demo

> 🚀 **Live Site:** [meditation-nine-sigma.vercel.app](https://meditation-nine-sigma.vercel.app)

---

## 📸 Screenshots
### 🌅 Sanctuary Hero & Welcomer

![](./public/images/hero_meditation.png)

### 🌿 Organic Community Banner & Interactive Polaroid

![](./public/images/plant_pot.png)

### 🧘 Expert Guides & Glassmorphism Interactive Overlays

![](./public/images/expert_guidance.png)

---

## ✨ Features

- 🌅 **Automatic Cinematic Splash Screen** — A peaceful 2-second breathing entrance overlay that automatically transitions into the homepage.
- 🧘 **Interactive Guides Directory** — Certified mentors directory featuring specialties listings, CV details, custom washi-taped Polaroid card frames, and glassmorphic hover bookings.
- 📅 **Interactive Classes Scheduler** — Filterable classes catalog with search features, category selectors, and custom session booking dialogues.
- 💳 **Membership Billing Switcher** — Plan subscriptions featuring monthly/yearly pro-rated layout switches, animated digits price flip, and simulated credit card checkout flows.
- 💬 **Live Blog Discussion** — Custom category-filtered article reader pages with interactive like states, share linkages, and reactive comment feeds.
- 🔄 **Staggered FAQ Accordion** — Fully animated collapsible panels utilizing height wraps in `AnimatePresence` to prevent layout shift.
- 🧭 **Dynamic Nav Indicator** — Sticky header with active path indicators that glide dynamically from link to link.

---

## 🗂️ Project Structure

```
meditation/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   ├── page.js          # Individual blog reader page
│   │   │   └── reader.module.css
│   │   ├── page.js              # Blog directory page
│   │   └── blog.module.css
│   ├── classes/
│   │   ├── page.js              # Classes scheduler
│   │   └── classes.module.css
│   ├── contact/
│   │   ├── page.js              # Contact and maps
│   │   └── contact.module.css
│   ├── guides/
│   │   ├── page.js              # Guides details directory
│   │   └── guides.module.css
│   ├── pricing/
│   │   ├── page.js              # Memberships and checkout
│   │   └── pricing.module.css
│   ├── globals.css              # Global styles, variables & fonts
│   ├── layout.js                # Global layout with MotionConfig
│   ├── page.js                  # Homepage builder
│   └── template.js              # PageTransition wrapper
│
├── components/
│   ├── home/
│   │   ├── Hero.js              # Hero section & stats
│   │   ├── GuidesSection.js     # Home guides panel
│   │   ├── Testimonials.js      # Swipeable testimonials slider
│   │   ├── CommunityBanner.js   # Custom polaroid community banner
│   │   └── FAQSection.js        # FAQs collapsible accordions
│   └── motion/
│       ├── MotionProvider.js    # LazyMotion Provider wrapper
│       ├── FadeUp.js            # Scroll reveals with reduced-motion support
│       ├── ModalTransition.js   # Animated modal backdrop & scale zooms
│       └── SplashWelcome.js     # Automatic onboarding welcomer
│
├── lib/
│   └── motion/
│       ├── easing.js            # Calm bezier curves & spring physics
│       ├── transitions.js       # Shared springs transition presets
│       └── variants.js          # Shared entrance & scale motion variants
│
└── public/
    └── images/                  # Resized, cropped visual assets
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm / yarn / pnpm

---

### 1. Clone the repo

```bash
git clone https://github.com/RaviranjanMishra01/meditation_app.git
cd meditation
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start Development Server

```bash
npm run dev
```

App runs on `http://localhost:3000`

---

### 4. Build for Production

```bash
npm run build
```

This compiles the static optimizer pages bundle.

---

## 📁 Routes Directory Map

| Route          | Component / File            | Description                                              | Type     |
|----------------|-----------------------------|----------------------------------------------------------|----------|
| `/`            | `app/page.js`               | Homepage (Hero, Testimonials, Community, FAQs)           | Static   |
| `/classes`     | `app/classes/page.js`       | Interactive meditation scheduler & search directory      | Static   |
| `/guides`      | `app/guides/page.js`        | Detailed instructor profiles & booking modal             | Static   |
| `/pricing`     | `app/pricing/page.js`       | Subscription pathways & checkout credit card modal       | Static   |
| `/blog`        | `app/blog/page.js`          | Category filters blog feed                               | Static   |
| `/blog/[slug]` | `app/blog/[slug]/page.js`   | Article reader page with comment feed                    | Dynamic  |
| `/contact`     | `app/contact/page.js`       | Inquiries form & location details                        | Static   |

---

## 🎨 Easing & Transitions System

Calmify uses specialized spring physics and custom cubic-beziers instead of standard linear transitions to preserve the calming user experience:

### Physics Settings (`/lib/motion/easing.js`)
* **Calm Ease**: `[0.25, 1, 0.5, 1]` (custom deceleration curve)
* **Calm Spring**: `stiffness: 200`, `damping: 15`
* **Quick Spring**: `stiffness: 300`, `damping: 20`

---

## 🔐 Onboarding Flow

```
SplashWelcome Screen (2s) → Fade Logo (0.5s) → Auto-Exit (1.6s) → Mount Landing Page
                                                                          ↓
                                                                  Hero Page Reveal
                                                                          ↓
                                                              PageTransition Navigate
```

---

## 🛡️ Accessibility & Optimization Notes

- **Reduced Motion Settings** — Automatically detects browser `prefers-reduced-motion` settings. Disables translation coordinates and falls back to simple opacity fades.
- **LazyMotion & Bundle Shrink** — Leverages Framer Motion's `<LazyMotion>` with `domAnimation` features to keep Next.js compile bundles as small as possible.
- **Mobile Swipe Table Wrapping** — Keeps comparison charts readable and prevents page horizontal overflow via responsive local scrolling boundaries (`.tableScroll`).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Raviranjan Mishra**  
GitHub: [@RaviranjanMishra01](https://github.com/RaviranjanMishra01)
