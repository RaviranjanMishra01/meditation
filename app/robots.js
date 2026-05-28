export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://meditation-nine-sigma.vercel.app/sitemap.xml",
  };
}
