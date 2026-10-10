// ─────────────────────────────────────────────────────────────
// Everything personal lives in this one file.
// Change the brand name, contact details and links here —
// the whole site updates from it.
// ─────────────────────────────────────────────────────────────

export const site = {
  // Live origin, no trailing slash, e.g. "https://yuvrajsingh.in".
  // Used for canonical URLs, sitemap.xml, robots.txt and the social
  // preview images. Leave it empty and the build will warn you.
  // TODO: set this when the custom domain is connected.
  url: "",

  // Your studio / startup name. Shown in the nav, footer and page title.
  brand: "Yuvraj Singh",
  // Small line under the brand in the footer.
  brandLine: "Independent web studio, Delhi NCR",

  founder: {
    name: "Yuvraj Singh",
    role: "Founder & full-stack developer",
    photo: "/work/founder.webp",
    location: "Delhi NCR, India",
  },

  // GitHub account the live project feed reads from.
  github: "Yuvrajsingh200205",

  // Repos that should never appear in the live feed
  // (empty repos, practice tasks, forks you don't want shown).
  hiddenRepos: [
    "Yuvrajsingh200205",
    "helo",
    "resume",
    "resume.html",
    "new-templates",
    "react-project",
    "food-web-site",
    "Schotest-project",
    "acm-backend",
    "ACM_BACKEND",
    "acm_task",
    "yuvraj",
    "wpp.com-next",
    "farmer_shops",
    "school_tempaltes",
    "School-management-",
  ],

  // ── Contact ─────────────────────────────────────────────────
  // TODO: replace these placeholders with your real details.
  // Leave whatsapp as "" to hide the WhatsApp button.
  contact: {
    email: "hello@yourstudio.in",
    whatsapp: "", // international format, digits only, e.g. "919876543210"
    responseTime: "I reply within one working day.",
  },

  // ── Legal pages ─────────────────────────────────────────────
  // These values are printed directly into the privacy policy and
  // the terms page. Nothing is invented: if a field is wrong, the
  // document is wrong, so check all three.
  legal: {
    // The name you trade under, as it should read in a legal document.
    entity: "Yuvraj Singh",
    // Whose law and which courts apply.
    jurisdiction: "Delhi NCR, India",
    // Date you last changed either document. Format: YYYY-MM-DD
    updated: "2026-10-10",
    // The company that hosts the site, named in the privacy policy
    // because their servers log every request. Fill this in once
    // hosting is decided, e.g. "Cloudflare, Inc." or "Vercel Inc."
    hostingProvider: "",
  },

  // ── Analytics ───────────────────────────────────────────────
  // Paste your GA4 measurement ID here, e.g. "G-XXXXXXXXXX".
  // While this is empty NO analytics script is loaded on any page,
  // and the privacy policy leaves out its analytics section.
  analytics: {
    ga4Id: "",
  },

  // ── Contact form ────────────────────────────────────────────
  // Empty endpoint: the form opens the visitor's own mail app.
  // Once the serverless function is live, put its URL here and the
  // form will POST to it, verify Cloudflare Turnstile and send
  // people to /thank-you/.
  form: {
    endpoint: "",
    turnstileSiteKey: "",
  },

  socials: {
    github: "https://github.com/Yuvrajsingh200205",
    linkedin: "https://www.linkedin.com/in/yuvrajsingh2002",
  },
};
