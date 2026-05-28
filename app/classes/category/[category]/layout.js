export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  const titleMap = {
    meditation: "Guided Meditation Sessions & Classes | Calmify",
    yoga: "Somatic Restore Yoga Flow Classes | Calmify",
    breathwork: "Pranayama & Somatic Breathwork Sessions | Calmify",
    "sound-healing": "Sound Bath Healing & Singing Bowls Therapy | Calmify",
  };

  const displayCategory = category.toLowerCase() === "sound-healing" ? "Sound Healing" : category.charAt(0).toUpperCase() + category.slice(1);
  const title = titleMap[category.toLowerCase()] || `${displayCategory} Classes | Calmify`;

  return {
    title,
    description: `Join our live, group ${displayCategory} classes led by certified instructors. Align your mind, release tension, and find inner calmness.`,
    keywords: `${displayCategory}, classes, meditation classes, yoga scheduling, wellness, calmify`,
  };
}

export default async function ClassesCategoryLayout({ children, params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  
  const displayCategory = category.toLowerCase() === "sound-healing" ? "Sound Healing" : category.charAt(0).toUpperCase() + category.slice(1);

  // Breadcrumbs: Home > Classes > Category
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
        "name": "Classes",
        "item": "https://meditation-nine-sigma.vercel.app/classes"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": displayCategory,
        "item": `https://meditation-nine-sigma.vercel.app/classes/category/${category}`
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
