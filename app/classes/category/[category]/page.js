"use strict";

import { use } from "react";
import ClassesPage from "../../page";

export default function ClassesCategoryPage({ params }) {
  const resolvedParams = use(params);
  const { category } = resolvedParams;

  const catMap = {
    meditation: "Meditation",
    yoga: "Yoga",
    breathwork: "Breathwork",
    "sound-healing": "Sound Healing",
  };

  const activeCategory = catMap[category.toLowerCase()] || category;

  return <ClassesPage initialCategory={activeCategory} />;
}
