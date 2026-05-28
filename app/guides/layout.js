export const metadata = {
  title: "Meet Our Certified Mindfulness Guides | Calmify",
  description: "Connect with certified meditation, yoga, and sound therapy coaches. Read about their bios, specialties, and schedules.",
  keywords: "meditation coaches, yoga guides, mindfulness instructors, certified sound bath therapists",
};

export default function GuidesLayout({ children }) {
  // Breadcrumb List Schema (Home > Guides)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://meditation-nine-sigma.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Mindfulness Guides",
        "item": "https://meditation-nine-sigma.vercel.app/guides"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
