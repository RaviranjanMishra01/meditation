import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MotionProvider from "../components/motion/MotionProvider";

export const metadata = {
  title: "Calmify - Mindfulness, Yoga & Guided Meditation",

  description:
    "Find your inner peace with Calmify's premium classes, certified guides, and community support.",

  keywords:
    "meditation, yoga, mindfulness, sound healing, breathwork, wellness, classes, guides",

  verification: {
    google: "LvfK3mT7WHnlw8hhe2xFyzRS4PKD4qUsHyISWmWAKxY",
  },
};

export default function RootLayout({ children }) {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://meditation-nine-sigma.vercel.app/#organization",
        name: "Calmify",
        url: "https://meditation-nine-sigma.vercel.app",
        logo:
          "https://meditation-nine-sigma.vercel.app/images/hero_meditation.png",

        sameAs: [
          "https://www.facebook.com/calmify",
          "https://www.instagram.com/calmify",
          "https://twitter.com/calmify",
        ],
      },

      {
        "@type": "WebSite",

        "@id": "https://meditation-nine-sigma.vercel.app/#website",

        url: "https://meditation-nine-sigma.vercel.app",

        name: "Calmify - Mindfulness, Yoga & Guided Meditation",

        publisher: {
          "@id":
            "https://meditation-nine-sigma.vercel.app/#organization",
        },

        potentialAction: {
          "@type": "SearchAction",

          target:
            "https://meditation-nine-sigma.vercel.app/classes?search={search_term_string}",

          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "ItemList",

        "@id": "https://meditation-nine-sigma.vercel.app/#categories",

        name: "Calmify Wellness Categories",

        itemListElement: [
          {
            "@type": "ListItem",

            position: 1,

            name: "Mindfulness & Meditation",

            url:
              "https://meditation-nine-sigma.vercel.app/classes/category/meditation",
          },

          {
            "@type": "ListItem",

            position: 2,

            name: "Yoga & Somatics",

            url:
              "https://meditation-nine-sigma.vercel.app/classes/category/yoga",
          },

          {
            "@type": "ListItem",

            position: 3,

            name: "Breathwork & Energy",

            url:
              "https://meditation-nine-sigma.vercel.app/classes/category/breathwork",
          },

          {
            "@type": "ListItem",

            position: 4,

            name: "Sound Healing",

            url:
              "https://meditation-nine-sigma.vercel.app/classes/category/sound-healing",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(graphSchema),
          }}
        />

        <MotionProvider>
          <Navbar />

          <main
            style={{
              flex: 1,
              paddingTop: "72px",
            }}
          >
            {children}
          </main>

          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}