export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const ALL_POSTS = [
    {
      slug: "mindfulness-practices-for-daily-life",
      title: "Mindfulness practices for daily life",
      desc: "Integrate simple micro-meditations into your busy morning commute, lunch hour, and evening digital wind-down routines.",
      category: "Mindfulness",
    },
    {
      slug: "the-science-behind-sound-healing",
      title: "The science behind sound healing",
      desc: "Explore how acoustic resonance and brainwave entrainment can lower nervous system arousal and accelerate physical healing.",
      category: "Acoustics",
    },
    {
      slug: "gentle-yoga-poses-for-beginners",
      title: "Gentle yoga poses for beginners",
      desc: "Five fundamental, restorative poses you can practice right in your bed to release tension, stretch joints, and improve spinal alignment.",
      category: "Yoga",
    }
  ];

  const post = ALL_POSTS.find((p) => p.slug === slug) || ALL_POSTS[0];

  return {
    title: `${post.title} | Calmify Journal`,
    description: post.desc,
    keywords: `${post.category}, meditation blog, mindfulness article, sound bath, beginner yoga`,
  };
}

export default async function BlogPostLayout({ children, params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const ALL_POSTS = [
    {
      slug: "mindfulness-practices-for-daily-life",
      title: "Mindfulness practices for daily life",
      desc: "Integrate simple micro-meditations into your busy morning commute, lunch hour, and evening digital wind-down routines.",
      category: "Mindfulness",
      date: "May 25, 2026",
      readTime: "5 min read",
      img: "/images/blog1.png",
      author: "Emily Watson",
      authorImg: "/images/guide1.png",
    },
    {
      slug: "the-science-behind-sound-healing",
      title: "The science behind sound healing",
      desc: "Explore how acoustic resonance and brainwave entrainment can lower nervous system arousal and accelerate physical healing.",
      category: "Acoustics",
      date: "May 18, 2026",
      readTime: "7 min read",
      img: "/images/blog2.png",
      author: "Sarah Jenkins",
      authorImg: "/images/guide3.png",
    },
    {
      slug: "gentle-yoga-poses-for-beginners",
      title: "Gentle yoga poses for beginners",
      desc: "Five fundamental, restorative poses you can practice right in your bed to release tension, stretch joints, and improve spinal alignment.",
      category: "Yoga",
      date: "May 10, 2026",
      readTime: "6 min read",
      img: "/images/blog3.png",
      author: "Marcus Vance",
      authorImg: "/images/guide2.png",
    }
  ];

  const post = ALL_POSTS.find((p) => p.slug === slug) || ALL_POSTS[0];

  // Breadcrumbs: Home > Blog > Post Title
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
        "name": "Wellness Blog",
        "item": "https://calmify-meditation.vercel.app/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://calmify-meditation.vercel.app/blog/${post.slug}`
      }
    ]
  };

  // Article rich snippet markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.desc,
    "image": `https://calmify-meditation.vercel.app${post.img}`,
    "datePublished": "2026-05-28", // Simplified fallback for date format parsing
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://calmify-meditation.vercel.app/guides"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calmify Sanctuary",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calmify-meditation.vercel.app/next.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://calmify-meditation.vercel.app/blog/${post.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}
