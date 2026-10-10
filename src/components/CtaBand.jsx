import Icon from "./Icon";
import "./CtaBand.css";

/**
 * The link block that closes a page. Every page passes its own
 * wording and its own onward links, so no two pages end with the
 * same sentence and every page links to at least two others.
 */
export default function CtaBand({ title, text, links }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <nav className="cta-band-links" aria-label="Where to next">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="btn btn-ghost">
              {l.label}
              <Icon name="external" size={16} />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
