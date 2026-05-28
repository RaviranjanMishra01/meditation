export const metadata = {
  title: "Membership Pathways & Pricing | Calmify",
  description: "Invest in your mental hygiene. Choose a Starter or Premium membership plan that fits your mindfulness schedule.",
  keywords: "meditation pricing, mindfulness subscription, yoga class cost, premium sound bath subscription",
};

export default function PricingLayout({ children }) {
  // Breadcrumb List Schema (Home > Pricing)
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
        "name": "Membership Pathways",
        "item": "https://meditation-nine-sigma.vercel.app/pricing"
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
