// Real projects only. Every "live" link below was checked to load,
// and every "code" link points to a public repository.

export const categories = {
  website: "Websites",
  crm: "CRMs & dashboards",
  app: "Web apps",
};

// Hand-picked work shown as large case studies.
export const featured = [
  {
    id: "suh-admin",
    title: "SUH Tech admin panel",
    client: "SUH Tech Pvt. Ltd.",
    category: "crm",
    summary:
      "The back office for an IT services company: employees, job openings, projects, invoices, expenses, blog posts and contact messages, all behind one login.",
    built: [
      "Role-based login and protected routes",
      "Dashboard with revenue, expense and hiring counters",
      "Quick actions for the jobs the team does every day",
    ],
    stack: ["React", "REST APIs", "JWT auth"],
    image: "/work/suh-admin.webp",
    live: "https://admin-suh-tech.vercel.app/login",
    code: "https://github.com/suhtechpvtltdbuisness-collab/Admin_SUH_Tech",
    note: "Built with the SUH Tech team",
  },
  {
    id: "flavoro",
    title: "Flavoro food ordering",
    client: "Personal product build",
    category: "app",
    summary:
      "A menu-first ordering app: filter by meal, search dishes, and keep a cart that survives page changes.",
    built: [
      "Category filters and instant search",
      "Cart state with Redux Toolkit",
      "Toasts that confirm every cart change",
    ],
    stack: ["React", "Redux Toolkit", "Tailwind CSS"],
    image: "/work/flavoro.webp",
    live: "https://food-web-seven-alpha.vercel.app/",
    code: "https://github.com/Yuvrajsingh200205/food-web",
  },
  {
    id: "schotest",
    title: "Schotest Public School",
    client: "Built during my internship at Schotest, Gurgaon",
    category: "website",
    summary:
      "A school website parents can actually use: principal's message, admissions, news and events, and a gallery of student life.",
    built: [
      "Admissions call-to-action on every page",
      "News and events blocks the school can update",
      "Layout tested from phones to projector screens",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/work/schotest.webp",
    live: "https://school-template-11jv.vercel.app/",
    code: "https://github.com/Yuvrajsingh200205/School_template",
  },
  {
    id: "kings",
    title: "King's College International",
    client: "Education group landing page",
    category: "website",
    summary:
      "A bold landing page for a school network with campuses in Taunton, Doha, Riyadh and Gurugram.",
    built: [
      "Large-type brand hero",
      "Campus and leadership sections",
      "Partnership and updates feed",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/work/kings-college.webp",
    live: "https://king-s-codebase.vercel.app/",
    code: "https://github.com/Yuvrajsingh200205/king-s-codebase",
  },
  {
    id: "wendigo",
    title: "Wendigo IT health check",
    client: "Internship project",
    category: "website",
    summary:
      "A service page that explains a 2–3 week IT assessment for healthcare leaders, from the problem to the deliverables.",
    built: [
      "Process and deliverables sections",
      "Critical-areas breakdown",
      "Single clear call to book the assessment",
    ],
    stack: ["React", "Vite", "Lucide icons"],
    image: "/work/intern-project.webp",
    live: "https://intern-project-wheat.vercel.app/",
    code: "https://github.com/Yuvrajsingh200205/intern_project",
  },
];

// The construction CRM has no public demo (it needs its private backend),
// so it is shown through its real module list instead of a screenshot.
export const crmShowcase = {
  title: "Construction & project CRM",
  summary:
    "One system for a contracting business: from winning a tender to paying the site team. Every module below exists in the code.",
  code: "https://github.com/Yuvrajsingh200205/crm-project",
  stack: ["React", "Vite", "Recharts", "jsPDF"],
  groups: [
    { name: "Win work", modules: ["Tenders", "Quotations", "BOQ", "Contracts"] },
    { name: "Run sites", modules: ["Projects", "Sites", "Milestones", "Work orders", "Gantt view"] },
    { name: "Buy & stock", modules: ["Vendors", "Procurement", "Inventory", "Equipment", "Material reconciliation"] },
    { name: "Money", modules: ["Invoices", "Vouchers", "Bank", "Accounts", "TDS"] },
    { name: "People", modules: ["Employees", "Attendance", "Leave", "Payroll", "Reimbursements"] },
  ],
};

// Friendly names and one-line descriptions for the live GitHub feed.
// Repos not listed here still appear, using their GitHub description.
export const repoMeta = {
  "csv-viewer": { title: "CSV Viewer", category: "app", text: "Drop in a CSV and sort, filter and search it in the browser." },
  trivaanadds: { title: "Trivaan Ads website", category: "website", text: "Agency site with services, portfolio and blog pages in Next.js." },
  "wpp-site": { title: "Wedding Photo Planet", category: "website", text: "Photography studio site: gallery, about, blog and contact with map." },
  "autoapply-ai": { title: "AutoApply AI", category: "app", text: "Job matching and tailored applications. Next.js front end, NestJS API, Prisma." },
  "perfume-website": { title: "Maison Aurélia", category: "website", text: "Luxury perfume store with a scroll-driven 3D bottle and an admin panel." },
  "soumya_portfolio-": { title: "Product manager portfolio", category: "website", text: "Client portfolio in Next.js 15 with a working contact form." },
  "crm-project": { title: "Construction CRM", category: "crm", text: "Tenders, BOQ, sites, procurement, invoices and payroll in one app." },
  "Rent-car-management": { title: "Rent-a-car manager", category: "app", text: "Rental management system in Java, built around OOP principles." },
  "chat-box": { title: "Realtime chat", category: "app", text: "Direct and group chat with Socket.IO, MongoDB and Redis." },
  personal_portfolio: { title: "VS Code portfolio", category: "website", text: "A personal portfolio styled like a code editor." },
  "realtime-trading-platform": { title: "Realtime trading platform", category: "app", text: "Live order book and charts over WebSockets." },
  intern_project: { title: "Wendigo IT health check", category: "website", text: "Service landing page for an IT assessment." },
  School_template: { title: "Schotest Public School", category: "website", text: "School website with admissions, news and gallery." },
  "training-placement-landing": { title: "Training & placement platform", category: "website", text: "Landing page for SUH Tech's training programmes." },
  "surface-water-quality-app": { title: "Surface water quality", category: "app", text: "Reads and displays water quality data." },
  "king-s-codebase": { title: "King's College International", category: "website", text: "Landing page for an international school network." },
  "my-summarizer-app": { title: "AI meeting notes summarizer", category: "app", text: "Summarise notes with an AI API and email the result." },
  "new-webTemplate": { title: "Figma Land template", category: "website", text: "Landing page built from a Figma design." },
  "Drawsiness-and-Yawn-Detection-Public": { title: "Drowsiness detection", category: "app", text: "Python and dlib: alerts a driver when eyes close or they yawn." },
  "food-web": { title: "Flavoro food ordering", category: "app", text: "Menu filters, search and a Redux cart." },
  "fundraising-website": { title: "Fundraising dashboard", category: "crm", text: "Supabase-backed dashboard with rewards, transactions and learning modules." },
  health_challenge: { title: "Health challenge tracker", category: "app", text: "Angular app that tracks a health challenge with progress charts." },
  "-Ecommerce-Store": { title: "React e-commerce store", category: "website", text: "Catalogue, cart and Firebase auth with Redux." },
  "World-map": { title: "World map tracker", category: "app", text: "Mark visited countries; Express and PostgreSQL." },
  "Dice-game": { title: "Dice game", category: "app", text: "Two-player dice game in plain JavaScript." },
  "Amazon-clone": { title: "Amazon clone", category: "website", text: "Storefront layout practice in HTML and CSS." },
  "qr-generater": { title: "QR generator", category: "app", text: "Command-line tool that turns a URL into a QR image." },
  "MyBankSite-": { title: "Bank landing page", category: "website", text: "Responsive landing page for a bank." },
  "Drume-kit-": { title: "Drum kit", category: "app", text: "Play drums with your keyboard." },
  "chat-app": { title: "Chat room", category: "app", text: "WebSocket chat room with Express and PostgreSQL." },
  ACM: { title: "ACM chapter backend", category: "app", text: "Express and PostgreSQL API with email and security headers." },
  dotmeds: { title: "DotMeds", category: "website", text: "Order medicines online; Express and MySQL." },
};
