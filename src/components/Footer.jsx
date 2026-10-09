import { site } from "../config/site";
import Icon from "./Icon";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <img src="/favicon.svg" alt="" width="32" height="32" />
          <div>
            <strong>{site.brand}</strong>
            <span>{site.brandLine}</span>
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#github">All projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
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
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
