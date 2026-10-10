import { site } from "../config/site";
import Icon from "./Icon";
import "./Footer.css";

const pageLinks = [
  { href: "/#services", label: "Services" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "Questions" },
  { href: "/contact/", label: "Start a project" },
];

const legalLinks = [
  { href: "/privacy/", label: "Privacy policy" },
  { href: "/terms/", label: "Terms and conditions" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <a href="/" aria-label={`${site.brand}, home`}>
            <img src="/favicon.svg" alt="" width="32" height="32" />
          </a>
          <div>
            <strong>{site.brand}</strong>
            <span>{site.brandLine}</span>
          </div>
        </div>
        <nav className="footer-links" aria-label="Pages">
          {pageLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="footer-social">
          <a href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" size={20} />
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" size={20} />
          </a>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>
          © {new Date().getFullYear()} {site.brand}. Designed and built in-house.
        </p>
        <nav className="footer-legal" aria-label="Legal">
          {legalLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
