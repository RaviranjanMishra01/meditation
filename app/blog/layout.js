export const metadata = {
  title: "Mindfulness & Wellness Blog | Calmify",
  description: "Read weekly articles on guided meditation, breathwork sequences, sound frequencies healing, and yoga flows from certified instructors.",
  keywords: "meditation blog, mindfulness articles, breathing guides, wellness tips, restorative yoga blog",
};

export default function BlogLayout({ children }) {
  // Breadcrumb List Schema (Home > Blog)
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
        "name": "Wellness Blog",
        "item": "https://meditation-nine-sigma.vercel.app/blog"
      }
    ]
  };

  // Blog categories schema representation
  const blogCategorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Blog Categories",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Mindfulness & Stillness",
        "description": "Guides and logs to manage anxiety, sharpen cognitive focus, and build sustainable daily stillness routines."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Yoga & Somatics",
        "description": "Physical recovery sequences, postural alignment, and somatic mind-muscle releases."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Breathwork & Energy",
        "description": "Techniques from alternate-nostril breathing to deep box breath cycles for focus and calming sleep."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Sound & Acoustic frequencies",
        "description": "Vibrational auditory therapies, Himalayan singing bowls, and gong sound baths."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCategorySchema) }}
      />
      {children}
    </>
  );
}
