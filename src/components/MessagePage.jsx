import "./MessagePage.css";

/** Shared layout for the short standalone pages: thank you and 404. */
export default function MessagePage({ eyebrow, title, children, links }) {
  return (
    <section className="msg">
      <div className="wrap msg-wrap">
        {eyebrow && <p className="msg-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <div className="msg-body">{children}</div>
        <nav className="msg-links" aria-label="Pages on this site">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>
                  <strong>{l.label}</strong>
                  <span>{l.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
