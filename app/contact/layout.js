export const metadata = {
  title: "Contact Our Sanctuary Support | Calmify",
  description: "Get in touch with our wellness support team. Ask about memberships, cohort challenge groups, and group corporate plans.",
  keywords: "contact meditation support, corporate wellness contact, calmify support mail",
};

export default function ContactLayout({ children }) {
  // Breadcrumb List Schema (Home > Contact)
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
        "name": "Contact Sanctuary",
        "item": "https://meditation-nine-sigma.vercel.app/contact"
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
