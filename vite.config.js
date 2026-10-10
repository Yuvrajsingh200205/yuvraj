import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { relative, resolve } from "node:path";
import { writeFileSync } from "node:fs";
import { pages, pageByFile } from "./src/config/pages.js";
import { site } from "./src/config/site.js";
import { faq } from "./src/data/faq.js";

const root = fileURLToPath(new URL(".", import.meta.url));
const origin = site.url.replace(/\/+$/, "");
const absolute = (path) => (origin ? origin + path : path);

// index.html -> "index", work/index.html -> "work"
const inputs = Object.fromEntries(
  pages.map((p) => [p.file.replace(/\/?index\.html$/, "").replace(/\.html$/, "") || "index", resolve(root, p.file)])
);

/** Which row in src/config/pages.js does this HTML file belong to? */
function rowFor(filename) {
  const file = relative(root, filename).split("\\").join("/");
  const row = pageByFile(file);
  if (!row) {
    throw new Error(
      `No entry in src/config/pages.js for "${file}". Every page needs a title and a meta description, so the build stops here.`
    );
  }
  return row;
}

function jsonLd(data) {
  return { tag: "script", attrs: { type: "application/ld+json" }, children: JSON.stringify(data), injectTo: "head" };
}

function structuredData(page) {
  if (page.path === "/") {
    return [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: site.brand,
        description: page.description,
        url: absolute("/"),
        image: absolute(page.image),
        areaServed: site.founder.location,
        founder: {
          "@type": "Person",
          name: site.founder.name,
          jobTitle: site.founder.role,
          sameAs: [site.socials.github, site.socials.linkedin],
        },
        sameAs: [site.socials.github, site.socials.linkedin],
      }),
    ];
  }
  if (page.path === "/faq/") {
    return [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }),
    ];
  }
  return [];
}

function analyticsTags() {
  const id = site.analytics.ga4Id.trim();
  if (!id) return [];
  return [
    {
      tag: "script",
      attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${id}` },
      injectTo: "head",
    },
    {
      tag: "script",
      children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(id)});`,
      injectTo: "head",
    },
  ];
}

/**
 * Writes the <head> of every page from src/config/pages.js, so a page
 * title, description or share image is never duplicated by hand.
 */
function seoHead() {
  return {
    name: "seo-head",
    transformIndexHtml: {
      // "post" matters: these tags are added after Vite has finished
      // rewriting asset URLs. Injected earlier, Vite treats the
      // canonical href ("/work/") as an asset path and tries to read
      // the directory, which fails the build.
      order: "post",
      handler(_html, ctx) {
        const page = rowFor(ctx.filename);
        const tags = [
          { tag: "title", children: page.title, injectTo: "head" },
          { tag: "meta", attrs: { name: "description", content: page.description }, injectTo: "head" },
          { tag: "meta", attrs: { name: "theme-color", content: "#0e1726" }, injectTo: "head" },
          { tag: "link", attrs: { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }, injectTo: "head" },
          { tag: "meta", attrs: { property: "og:type", content: "website" }, injectTo: "head" },
          { tag: "meta", attrs: { property: "og:site_name", content: site.brand }, injectTo: "head" },
          { tag: "meta", attrs: { property: "og:title", content: page.title }, injectTo: "head" },
          { tag: "meta", attrs: { property: "og:description", content: page.description }, injectTo: "head" },
          { tag: "meta", attrs: { property: "og:image", content: absolute(page.image) }, injectTo: "head" },
          { tag: "meta", attrs: { property: "og:image:alt", content: page.imageAlt }, injectTo: "head" },
          { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" }, injectTo: "head" },
          ...structuredData(page),
          ...analyticsTags(),
        ];

        if (page.noindex) {
          tags.push({ tag: "meta", attrs: { name: "robots", content: "noindex, follow" }, injectTo: "head" });
        } else {
          tags.push(
            { tag: "link", attrs: { rel: "canonical", href: absolute(page.path) }, injectTo: "head" },
            { tag: "meta", attrs: { property: "og:url", content: absolute(page.path) }, injectTo: "head" }
          );
        }

        return { html: _html, tags };
      },
    },
  };
}

/** Generates sitemap.xml and robots.txt into the build output. */
function sitemapAndRobots() {
  let outDir = "dist";
  return {
    name: "sitemap-and-robots",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      if (!origin) {
        this.warn(
          "site.url is empty, so sitemap.xml, canonical links and share images cannot use absolute URLs. Set it in src/config/site.js once the domain is connected, then build again."
        );
      }
      const lastmod = new Date().toISOString().slice(0, 10);
      const urls = pages
        .filter((p) => p.sitemap)
        .map(
          (p) =>
            `  <url>\n    <loc>${absolute(p.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n` +
            `    <changefreq>${p.sitemap.changefreq}</changefreq>\n    <priority>${p.sitemap.priority}</priority>\n  </url>`
        )
        .join("\n");

      writeFileSync(
        resolve(root, outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      );

      // Nothing is disallowed: /thank-you/ and /404.html carry a noindex
      // meta tag instead, and a crawler has to be allowed in to read it.
      writeFileSync(
        resolve(root, outDir, "robots.txt"),
        ["User-agent: *", "Allow: /", "", `Sitemap: ${absolute("/sitemap.xml")}`, ""].join("\n")
      );
    },
  };
}

export default defineConfig({
  appType: "mpa",
  plugins: [react(), seoHead(), sitemapAndRobots()],
  build: {
    rollupOptions: { input: inputs },
  },
});
