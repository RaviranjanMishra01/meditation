import Script from "next/script";

export const metadata = {
  title: "Guided Meditation & Yoga Classes | Calmify",
  description: "Schedule live meditation, deep breathwork, sound healing therapy, and gentle restore yoga classes with certified coaches.",
  keywords: "meditation classes, yoga schedules, live breathwork, sound bath events, mindfulness training",
};

export default function ClassesLayout({ children }) {
  // Breadcrumb List Schema (Home > Classes)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://calmify-meditation.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Classes",
        "item": "https://calmify-meditation.vercel.app/classes"
      }
    ]
  };

  // Course / Category Schema for rich Google search categories focus
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "Guided Meditation Sessions",
        "description": "Daily 10-minute and 30-minute mindfulness classes focusing on breathing, calmness, and stress-reduction.",
        "provider": {
          "@type": "Organization",
          "name": "Calmify Sanctuary",
          "sameAs": "https://calmify-meditation.vercel.app/"
        }
      },
      {
        "@type": "Course",
        "name": "Gentle Restore Yoga",
        "description": "Align your posture and release muscle-mind tensions with slow recovery Vinyasa flow.",
        "provider": {
          "@type": "Organization",
          "name": "Calmify Sanctuary",
          "sameAs": "https://calmify-meditation.vercel.app/"
        }
      },
      {
        "@type": "Course",
        "name": "Sound Bath Healing Therapy",
        "description": "Himalayan singing bowls and gong sound frequencies to clear emotional blockage and facilitate sleep.",
        "provider": {
          "@type": "Organization",
          "name": "Calmify Sanctuary",
          "sameAs": "https://calmify-meditation.vercel.app/"
        }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {children}
    </>
  );
}
