import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import "./Services.css";

const services = [
  {
    id: "websites",
    title: "Websites",
    line: "A fast, clear site that turns visitors into enquiries.",
    detail:
      "For schools, studios, agencies and local businesses. I plan the pages around the questions your customers ask, then build a site you can update without calling me.",
    includes: [
      "Page plan and copy structure",
      "Custom design, not a theme",
      "Mobile-first build, tested on real phones",
      "SEO basics, analytics and contact forms",
      "Hosting setup and domain connection",
    ],
    stack: "React, Next.js, Tailwind CSS",
    seen: [
      { label: "Schotest Public School", href: "https://school-template-11jv.vercel.app/" },
      { label: "King's College International", href: "https://king-s-codebase.vercel.app/" },
      { label: "Wendigo IT health check", href: "https://intern-project-wheat.vercel.app/" },
    ],
  },
  {
    id: "crm",
    title: "CRMs & dashboards",
    line: "Replace the spreadsheets and WhatsApp threads your team juggles.",
    detail:
      "A system built around how your business already works: leads, projects, invoices, stock, staff. Each person sees what they need, and you see everything.",
    includes: [
      "Workflow mapping with your team",
      "Role-based logins and permissions",
      "Dashboards, filters and PDF exports",
      "Invoices, payroll, inventory or any module you need",
      "Data import from your existing sheets",
    ],
    stack: "React, Node.js, PostgreSQL / MongoDB",
    seen: [
      { label: "SUH Tech admin panel", href: "https://admin-suh-tech.vercel.app/login" },
      { label: "Construction CRM (code)", href: "https://github.com/Yuvrajsingh200205/crm-project" },
    ],
  },
  {
    id: "apps",
    title: "Custom web apps",
    line: "When your idea doesn't fit a template.",
    detail:
      "Ordering apps, chat, booking, AI tools, realtime dashboards. I take it from a rough idea to something people can log into and use.",
    includes: [
      "Scope and first version in weeks, not months",
      "Auth, payments and email built in",
      "Realtime features with WebSockets",
      "AI features through APIs such as OpenAI or RapidAPI",
      "Deployment and monitoring",
    ],
    stack: "React, Next.js, NestJS, Express, Socket.IO",
    seen: [
      { label: "Flavoro food ordering", href: "https://food-web-seven-alpha.vercel.app/" },
      { label: "Realtime chat (code)", href: "https://github.com/Yuvrajsingh200205/chat-box" },
      { label: "AutoApply AI (code)", href: "https://github.com/Yuvrajsingh200205/autoapply-ai" },
    ],
  },
  {
    id: "shopify",
    title: "Shopify stores",
    line: "Sell online with a store that looks like your brand.",
    detail:
      "Custom Shopify themes and changes in Liquid: product pages, gift builders, collections and checkout tweaks for stores that have outgrown a stock theme.",
    includes: [
      "Custom theme or changes to your current one",
      "Product, collection and landing pages",
      "Speed and mobile fixes",
      "App setup and payment configuration",
    ],
    stack: "Shopify, Liquid, JavaScript",
    seen: [],
  },
];

export default function Services() {
  const [open, setOpen] = useState("websites");

  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head">
          <h2>What I build</h2>
          <p>
            Four kinds of work. Open one to see what's included and where you can see it
            running.
          </p>
        </div>

        <ul className="svc-list">
          {services.map((s) => {
            const isOpen = open === s.id;
            return (
              <li key={s.id} className={`svc ${isOpen ? "is-open" : ""}`}>
                <h3>
                  <button
                    className="svc-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`svc-${s.id}`}
                    onClick={() => setOpen(isOpen ? null : s.id)}
                  >
                    <span className="svc-title">{s.title}</span>
                    <span className="svc-line">{s.line}</span>
                    <span className="svc-icon">
                      <Icon name="plus" size={20} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`svc-${s.id}`}
                      className="svc-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="svc-grid">
                        <div className="svc-detail">
                          <p>{s.detail}</p>
                          <p className="svc-stack">
                            Usually built with <strong>{s.stack}</strong>
                          </p>
                        </div>
                        <ul className="svc-includes">
                          {s.includes.map((item) => (
                            <li key={item}>
                              <Icon name="check" size={16} />
                              {item}
                            </li>
                          ))}
                        </ul>
                        {s.seen.length > 0 && (
                          <div className="svc-seen">
                            <p>See it running</p>
                            {s.seen.map((x) => (
                              <a key={x.href} href={x.href} target="_blank" rel="noreferrer">
                                {x.label}
                                <Icon name="external" size={14} />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
