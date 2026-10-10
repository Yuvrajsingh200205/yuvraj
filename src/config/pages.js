// ─────────────────────────────────────────────────────────────
// One row per page. This file is the only place a page title,
// meta description or share image is written.
//
// At build time vite.config.js reads this list and injects the
// real <title>, <meta name="description">, canonical link and
// Open Graph tags into each page's HTML. Nothing is set by
// JavaScript at runtime, because the crawlers that build link
// previews (WhatsApp, LinkedIn, Slack) do not run JavaScript.
//
// Adding a page means: a row here, an HTML file at `file`, and
// an entry module at `entry`. The build fails loudly if an HTML
// file has no row.
// ─────────────────────────────────────────────────────────────

export const pages = [
  {
    file: "index.html",
    path: "/",
    entry: "/src/pages/home.jsx",
    title: "Yuvraj Singh | websites, CRMs and web apps",
    description:
      "I design and build websites, CRMs and custom web apps for schools, studios, shops and service companies in Delhi NCR. Every project has a live link or public code.",
    image: "/work/suh-website.webp",
    imageAlt: "The SUH Tech website, built and running live",
    sitemap: { priority: "1.0", changefreq: "monthly" },
  },
  {
    file: "work/index.html",
    path: "/work/",
    entry: "/src/pages/work.jsx",
    title: "Work: live sites, CRMs and web apps | Yuvraj Singh",
    description:
      "Case studies with a live link or public repository for each one: an IT company admin panel, a food ordering app, school websites and a construction CRM.",
    image: "/work/suh-admin.webp",
    imageAlt: "The SUH Tech admin panel dashboard",
    sitemap: { priority: "0.9", changefreq: "monthly" },
  },
  {
    file: "about/index.html",
    path: "/about/",
    entry: "/src/pages/about.jsx",
    title: "About Yuvraj Singh, full-stack developer in Delhi NCR",
    description:
      "A full-stack developer from Delhi NCR building websites, admin panels and CRMs for real businesses since early 2024. Where I have worked and how I work with clients.",
    image: "/work/yuvraj.webp",
    imageAlt: "Yuvraj Singh",
    sitemap: { priority: "0.7", changefreq: "yearly" },
  },
  {
    file: "faq/index.html",
    path: "/faq/",
    entry: "/src/pages/faq.jsx",
    title: "Questions about working with me | Yuvraj Singh",
    description:
      "Timelines, pricing, who owns the code, what happens after launch, and what I need from you before a project starts. Answered plainly, before you get in touch.",
    image: "/work/suh-website.webp",
    imageAlt: "The SUH Tech website, built and running live",
    sitemap: { priority: "0.8", changefreq: "monthly" },
  },
  {
    file: "contact/index.html",
    path: "/contact/",
    entry: "/src/pages/contact.jsx",
    title: "Start a project | Yuvraj Singh",
    description:
      "Tell me what the business does and what is getting in the way. A short brief is enough to start, and you will hear back within one working day.",
    image: "/work/suh-website.webp",
    imageAlt: "The SUH Tech website, built and running live",
    sitemap: { priority: "0.9", changefreq: "yearly" },
  },
  {
    file: "privacy/index.html",
    path: "/privacy/",
    entry: "/src/pages/privacy.jsx",
    title: "Privacy policy | Yuvraj Singh",
    description:
      "What this site collects, why, how long it is kept and how to have it deleted. Covers the contact form, website analytics and server logs.",
    image: "/work/suh-website.webp",
    imageAlt: "The SUH Tech website, built and running live",
    sitemap: { priority: "0.3", changefreq: "yearly" },
  },
  {
    file: "terms/index.html",
    path: "/terms/",
    entry: "/src/pages/terms.jsx",
    title: "Terms and conditions | Yuvraj Singh",
    description:
      "The terms for using this website and the terms that apply to project work: quotes, payment, ownership of the code, revisions and liability.",
    image: "/work/suh-website.webp",
    imageAlt: "The SUH Tech website, built and running live",
    sitemap: { priority: "0.3", changefreq: "yearly" },
  },
  {
    file: "thank-you/index.html",
    path: "/thank-you/",
    entry: "/src/pages/thank-you.jsx",
    title: "Message received | Yuvraj Singh",
    description:
      "Your message reached me. Here is what happens next and when to expect a reply.",
    image: "/work/suh-website.webp",
    imageAlt: "The SUH Tech website, built and running live",
    // Kept out of the sitemap and out of search results: it is a step
    // in a flow, not a page anyone should land on from Google.
    noindex: true,
    sitemap: false,
  },
  {
    file: "404.html",
    path: "/404.html",
    entry: "/src/pages/not-found.jsx",
    title: "Page not found | Yuvraj Singh",
    description: "That page does not exist. Here are the pages that do.",
    image: "/work/suh-website.webp",
    imageAlt: "The SUH Tech website, built and running live",
    noindex: true,
    sitemap: false,
  },
];

export const pageByFile = (file) => pages.find((p) => p.file === file);
