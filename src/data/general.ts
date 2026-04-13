// ============================================================
// GENERAL PORTFOLIO CONFIG
// This is the source of truth for the public-facing portfolio.
// To create a tailored version for a specific company, duplicate
// this file (e.g. ramp.ts), change the values below, and create
// a matching page in src/pages/ that imports from it.
// ============================================================

export const config = {
  meta: {
    title: "Sharon Hadden Milone — Content Systems Portfolio",
    description:
      "Strategic content leader and editorial systems builder with 10+ years across B2B, FinTech and AI.",
    noindex: false,
  },

  nav: {
    name: "Sharon Hadden Milone",
    links: [
      { href: "#about",   label: "About" },
      { href: "#writing", label: "Writing" },
      { href: "#results", label: "Results" },
      { href: "#systems", label: "Systems" },
    ],
  },

  hero: {
    eyebrow: "Content Futurist & Editorial Leader",
    headline: "Sharon Hadden Milone",
    tagline:  "Building what's next in content, tech and AI",
  },

  // Set to true and fill in the fields below to show a personal
  // note / VSL letter at the top of a tailored version.
  vsl: {
    enabled:   false,
    recipient: "",
    body:      "",
    signOff:   "With joy,",
  },
} as const;
