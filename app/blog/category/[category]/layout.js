export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  const titleMap = {
    mindfulness: "Mindfulness & Meditation Articles | Calmify Journal",
    yoga: "Yoga, Somatics & Stretching Guides | Calmify Journal",
    breathwork: "Breathwork & Conscious Breathing Techniques | Calmify Journal",
    acoustics: "Acoustics & Sound Healing Science | Calmify Journal",
  };

  const title = titleMap[category.toLowerCase()] || `${category.charAt(0).toUpperCase() + category.slice(1)} Articles | Calmify Journal`;

  return {
    title,
    description: `Browse the best articles, guides, and professional advice on ${category}. Restore balance, mindfulness, and inner peace.`,
    keywords: `${category}, meditation, yoga, breathwork, sound healing, calmify journal`,
  };
}

export default async function BlogCategoryLayout({ children, params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  
  const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);

  // Breadcrumbs: Home > Blog > Category
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": displayCategory,
        "item": `https://meditation-nine-sigma.vercel.app/blog/category/${category}`
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
