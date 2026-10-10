# Studio website

Portfolio and landing page for my web studio: websites, CRMs and custom web apps.
Every project on the site is real, and each one links to a live site or public code.

Built with **React 18**, **Vite** and **Framer Motion**. Fonts are self-hosted
(Bricolage Grotesque and Figtree), so there are no third-party requests except the
GitHub API.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Pages

This is a multi-page site, not a single-page app. Each page is its own HTML file with
its own real `<title>` and meta tags in the source, because the crawlers that build
link previews (WhatsApp, LinkedIn, Slack) do not run JavaScript.

| URL | HTML file | Entry module |
| --- | --- | --- |
| `/` | `index.html` | `src/pages/home.jsx` |
| `/work/` | `work/index.html` | `src/pages/work.jsx` |
| `/about/` | `about/index.html` | `src/pages/about.jsx` |
| `/faq/` | `faq/index.html` | `src/pages/faq.jsx` |
| `/contact/` | `contact/index.html` | `src/pages/contact.jsx` |
| `/privacy/` | `privacy/index.html` | `src/pages/privacy.jsx` |
| `/terms/` | `terms/index.html` | `src/pages/terms.jsx` |
| `/thank-you/` | `thank-you/index.html` | `src/pages/thank-you.jsx` |
| `/404.html` | `404.html` | `src/pages/not-found.jsx` |

### Adding a page

1. Add a row to **`src/config/pages.js`** with its title, meta description and share image.
2. Create the HTML file at the `file` path (copy any existing one, change the script src).
3. Create the entry module, which calls `mount()` from `src/pages/_mount.jsx`.

The build fails with a clear error if an HTML file has no row in `pages.js`, so a page
can never ship without a title and description.

## SEO is generated, not hand-written

`src/config/pages.js` is the only place a page title, meta description or share image
is written. At build time the `seo-head` plugin in `vite.config.js` injects into every
page:

- `<title>` and `<meta name="description">`
- `<link rel="canonical">` and `og:url`
- `og:title`, `og:description`, `og:image`, `og:image:alt`, `og:site_name`, `twitter:card`
- `noindex` on `/thank-you/` and `/404.html`
- JSON-LD: `ProfessionalService` on the home page, `FAQPage` on `/faq/`
- the Google Analytics snippet, but only when a measurement ID is set

The same plugin writes **`sitemap.xml`** and **`robots.txt`** into `dist/` on every
build. The sitemap lists only indexable pages.

## Change your details

Everything personal is in **`src/config/site.js`**:

| Setting | What it does |
| --- | --- |
| `url` | **Required before launch.** Live origin, no trailing slash. Without it, canonical links, share images and the sitemap cannot be absolute, and the build warns you |
| `brand` | Studio name in the nav and footer |
| `contact.email` | **Placeholder, replace before going live.** Used by the form, the legal pages and the email links |
| `contact.whatsapp` | Digits only, e.g. `919876543210`. Leave empty to hide the WhatsApp button |
| `github` | Account the live project list reads from |
| `hiddenRepos` | Repos to keep out of the project list |
| `legal.entity` | The name you trade under, printed in the privacy policy and terms |
| `legal.jurisdiction` | Whose law and which courts apply |
| `legal.updated` | Date the legal pages last changed, `YYYY-MM-DD` |
| `legal.hostingProvider` | **Required before launch.** Named in the privacy policy, because their servers log every request |
| `analytics.ga4Id` | GA4 measurement ID. While empty, no analytics script loads anywhere and the privacy policy says so |
| `form.endpoint` | Server endpoint for the contact form. While empty, the form opens the visitor's own mail app |
| `form.turnstileSiteKey` | Cloudflare Turnstile key. While empty, no spam-protection section appears in the privacy policy |

Page titles and meta tags are **not** here, they are in `src/config/pages.js`.

## The legal pages write themselves from config

`src/components/PrivacyPolicy.jsx` describes what the site actually does, not what it
might do later. Switch analytics on in `site.js` and the analytics section, the cookie
wording and the retention paragraph appear in the same commit. If a field the documents
cannot be correct without is missing, both pages show a visible "this document is not
finished" notice, so an incomplete policy cannot be published quietly.

## Content rules

- **`src/data/testimonials.js` is empty on purpose.** The testimonials section renders
  nothing at all while it is empty: no placeholder quotes, no sample names, no stars.
  Add an entry only for a real, attributed quote you have permission to publish.
- **`src/data/faq.js`** answers only restate things the site already says, and each one
  records which section it came from. The questions that need your own answer (payments,
  revisions, remote clients, maintenance) are listed at the top of that file, unanswered.

## Projects

`src/data/projects.js` holds:

- `featured`, the case studies with screenshots (images live in `public/work/`)
- `crmShowcase`, the construction CRM module map
- `repoMeta`, friendly titles, one-line descriptions and categories for GitHub repos

The home page shows the lead case study plus two more and links on to `/work/`, which
shows all of them with the CRM walkthrough and the GitHub list.

## The live GitHub list

`src/hooks/useGitHubRepos.js` fetches public repos from the GitHub API when the page
loads (cached for 30 minutes per visitor). New repos appear automatically; add an
entry to `repoMeta` to give one a nicer title and a category. If GitHub is
unreachable, the site falls back to `src/data/github-snapshot.json`.

## Deploy

Static host, build command `npm run build`, output directory `dist`.

Two things to check on the host:

1. **Clean URLs.** `/work/` must serve `work/index.html`. Cloudflare Pages, Netlify and
   Vercel do this by default for a static output directory.
2. **The 404 page.** The host has to be told to serve `404.html` for unknown paths.
   Cloudflare Pages and Netlify pick it up automatically; Vercel does too for static
   builds. Do not add an SPA catch-all rewrite, it would hide the 404.

After the first deploy, submit `https://your-domain/sitemap.xml` in Google Search
Console (Indexing, then Sitemaps) and link the Search Console property to the GA4
property under GA4 Admin, Product links.

## Structure

```
public/
  favicon.svg
  work/                   project screenshots + profile photo
index.html                one HTML file per page, heads injected at build
work/ about/ faq/ contact/ privacy/ terms/ thank-you/
404.html
src/
  config/site.js          brand, contact, legal, analytics, form
  config/pages.js         every page's title, description and share image
  data/projects.js        case studies, CRM modules, repo descriptions
  data/faq.js             FAQ questions, with the source of each answer
  data/testimonials.js    empty until a real quote exists
  data/github-snapshot.json
  hooks/useGitHubRepos.js
  pages/                  one entry module per page, all booting via _mount.jsx
  components/
    Nav              sticky nav, mobile menu, current-page highlight
    Hero             headline + BlueprintSlider
    BlueprintSlider  drag to compare the "plan" with the shipped site
    Services         expandable service rows
    Work             case studies + CrmShowcase, capped by `limit` on the home page
    GitHubFeed       live, filterable repo list
    Process          four-step project timeline
    About            bio, experience, links
    Faq              accordion, shares its data with the FAQPage structured data
    Testimonials     renders nothing while the data file is empty
    Contact          enquiry form
    CtaBand          the onward links that close each page
    Legal            shell for the privacy and terms pages
    PrivacyPolicy    content, driven by what site.js actually enables
    Terms            content
    MessagePage      shell for the thank-you and 404 pages
    ThankYou
    NotFound
    Footer
  styles/global.css       design tokens, base styles, buttons
```
