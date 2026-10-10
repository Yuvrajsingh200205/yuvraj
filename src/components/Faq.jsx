import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "../data/faq";
import Icon from "./Icon";
import "./Faq.css";

export default function Faq({ heading = "h2" }) {
  const H = heading;
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="section-head">
          <H>Questions I get asked</H>
          <p>
            The things worth knowing before you get in touch. If yours is not here, ask it
            in the form and I will answer it properly.
          </p>
        </div>

        <ul className="faq-list">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <h3>
                  <button
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon">
                      <Icon name="plus" size={20} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      className="faq-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.a}</p>
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
