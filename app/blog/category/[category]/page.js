"use strict";

import { use } from "react";
import BlogPage from "../../page";

export default function BlogCategoryPage({ params }) {
  const resolvedParams = use(params);
  const { category } = resolvedParams;

  const catMap = {
    mindfulness: "Mindfulness",
    yoga: "Yoga",
    breathwork: "Breathwork",
    acoustics: "Acoustics",
  };

  const activeCategory = catMap[category.toLowerCase()] || category;

  return <BlogPage initialCategory={activeCategory} />;
}
