import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MotionProvider from "../components/motion/MotionProvider";

export const metadata = {
  title: "Calmify - Mindfulness, Yoga & Guided Meditation",
  description: "Find your inner peace with Calmify's premium classes, certified guides, and community support.",
  keywords: "meditation, yoga, mindfulness, sound healing, breathwork, wellness, classes, guides",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <MotionProvider>
          <Navbar />
          <main style={{ flex: 1, paddingTop: "72px" }}>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
