import { useState } from "react";
import { motion } from "framer-motion";
import { crmShowcase } from "../data/projects";
import Icon from "./Icon";

export default function CrmShowcase() {
  const [active, setActive] = useState(0);
  const total = crmShowcase.groups.reduce((n, g) => n + g.modules.length, 0);

  return (
    <article className="crm">
      <div className="crm-intro">
        <p className="case-meta">
          <span className="case-kind">CRMs & dashboards</span>
          <span>Contracting business</span>
        </p>
        <h3>{crmShowcase.title}</h3>
        <p className="case-summary">{crmShowcase.summary}</p>
        <ul className="chips" aria-label="Built with">
          {crmShowcase.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="case-links">
          <a href={crmShowcase.code} target="_blank" rel="noreferrer" className="case-link">
            <Icon name="github" size={16} />
            Read the code
          </a>
        </div>
        <p className="case-note">
          No public demo: it needs its private backend to run. {total} modules across{" "}
          {crmShowcase.groups.length} stages of the business.
        </p>
      </div>

      <div className="crm-board">
        <div className="crm-stages" role="tablist" aria-label="Stages of the business">
          {crmShowcase.groups.map((g, i) => (
            <button
              key={g.name}
              role="tab"
              aria-selected={i === active}
              className={i === active ? "is-active" : ""}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
            >
              <span className="crm-step">{i + 1}</span>
              {g.name}
              {i === active && (
                <motion.span
                  layoutId="crm-pill"
                  className="crm-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="crm-modules">
          {crmShowcase.groups.map((g, gi) =>
            g.modules.map((m) => (
              <motion.span
                key={m}
                layout
                className={`crm-module ${gi === active ? "is-on" : ""}`}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {m}
              </motion.span>
            ))
          )}
        </div>
      </div>
    </article>
  );
}
