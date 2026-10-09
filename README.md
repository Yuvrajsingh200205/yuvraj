# Studio website

Portfolio and landing page for my web studio: websites, CRMs and custom web apps.
Every project on the site is real — each one links to a live site or public code.

Built with **React 18**, **Vite** and **Framer Motion**. Fonts are self-hosted
(Bricolage Grotesque + Figtree), so there are no third-party requests except the
GitHub API.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Change your details

Everything personal is in **`src/config/site.js`**:

| Setting | What it does |
| --- | --- |
| `brand` | Studio name in the nav, footer and page title |
| `contact.email` | **Placeholder — replace before going live.** Used by the contact form and email link |
| `contact.whatsapp` | Digits only, e.g. `919876543210`. Leave empty to hide the WhatsApp button |
| `github` | Account the live project list reads from |
| `hiddenRepos` | Repos to keep out of the project list |

Also update the `<title>` and `og:` tags in `index.html` if you change the brand.

## Projects

`src/data/projects.js` holds:

- `featured` — the case studies with screenshots (images live in `public/work/`)
- `crmShowcase` — the construction CRM module map
- `repoMeta` — friendly titles, one-line descriptions and categories for GitHub repos

## The live GitHub list

`src/hooks/useGitHubRepos.js` fetches public repos from the GitHub API when the page
loads (cached for 30 minutes per visitor). New repos appear automatically; add an
entry to `repoMeta` to give one a nicer title and a category. If GitHub is
unreachable, the site falls back to `src/data/github-snapshot.json`.

## Deploy

Works on any static host. On Vercel or Netlify: import the repo, build command
`npm run build`, output directory `dist`.

## Structure

```
public/
  favicon.svg
  work/                 project screenshots + profile photo
src/
  config/site.js        brand, contact, socials
  data/projects.js      case studies, CRM modules, repo descriptions
  data/github-snapshot.json
  hooks/useGitHubRepos.js
  components/
    Nav            sticky nav, mobile menu, active-section highlight
    Hero           headline + BlueprintSlider
    BlueprintSlider  drag to compare the "plan" with the shipped site
    Services       expandable service rows
    Work           case studies + CrmShowcase
    GitHubFeed     live, filterable repo list
    Process        four-step project timeline
    About          bio, experience, links
    Contact        enquiry form (opens the visitor's email app)
    Footer
  styles/global.css     design tokens, base styles, buttons
```
