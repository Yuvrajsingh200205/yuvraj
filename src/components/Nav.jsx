import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../config/site";
import Icon from "./Icon";
import "./Nav.css";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
];

const withSlash = (p) => (p.endsWith("/") ? p : `${p}/`);

/** Marks the page you are on, ignoring links that point at a section. */
function isCurrent(href, path) {
  if (href.includes("#")) return false;
  if (href === "/") return path === "/";
  return path.startsWith(href);
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [path] = useState(() => withSlash(window.location.pathname));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a
          href="/"
          className="nav-brand"
          onClick={() => setOpen(false)}
          aria-current={path === "/" ? "page" : undefined}
        >
          <img src="/favicon.svg" alt="" width="28" height="28" />
          <span>{site.brand}</span>
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => {
            const current = isCurrent(l.href, path);
            return (
              <a
                key={l.href}
                href={l.href}
                className={current ? "is-active" : ""}
                aria-current={current ? "page" : undefined}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <a href="/contact/" className="btn btn-primary nav-cta">
          Start a project
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {[...links, { href: "/contact/", label: "Start a project" }].map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(l.href, path) ? "page" : undefined}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
