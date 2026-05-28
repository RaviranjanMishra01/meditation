export default async function sitemap() {
  const baseUrl = "https://meditation-nine-sigma.vercel.app";
  
  // Base static pages
  const staticPages = [
    "",
    "/classes",
    "/blog",
    "/pricing",
    "/guides",
    "/contact",
    "/privacy",
    "/terms",
  ];

  // Blog posts slugs
  const postSlugs = [
    "mindfulness-practices-for-daily-life",
    "the-science-behind-sound-healing",
    "gentle-yoga-poses-for-beginners",
    "how-breathing-resets-your-nervous-system",
    "establishing-a-sustainable-morning-routine",
    "vibrational-frequencies-and-anxiety",
  ];

  // Blog categories
  const blogCategories = ["mindfulness", "yoga", "breathwork", "acoustics"];

  // Classes categories
  const classesCategories = ["meditation", "yoga", "breathwork", "sound-healing"];

  // Map static pages to sitemap objects
  const staticUrls = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Map blog posts
  const postUrls = postSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Map blog categories
  const blogCatUrls = blogCategories.map((cat) => ({
    url: `${baseUrl}/blog/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Map classes categories
  const classesCatUrls = classesCategories.map((cat) => ({
    url: `${baseUrl}/classes/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticUrls, ...postUrls, ...blogCatUrls, ...classesCatUrls];
}
