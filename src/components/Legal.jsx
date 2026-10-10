import { site } from "../config/site";
import "./Legal.css";

const PLACEHOLDER_EMAIL = "hello@yourstudio.in";

/** Fields these documents cannot be correct without. */
function gaps() {
  const missing = [];
  if (!site.legal.entity.trim()) missing.push("the name you trade under");
  if (!site.contact.email.trim() || site.contact.email === PLACEHOLDER_EMAIL)
    missing.push("a real contact email address");
  if (!site.legal.hostingProvider.trim()) missing.push("the name of the hosting company");
  if (!site.url.trim()) missing.push("the live domain");
  return missing;
}

function formatted(iso) {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function Legal({ title, intro, children }) {
  const missing = gaps();

  return (
    <article className="legal">
      <div className="wrap legal-wrap">
        <header className="legal-head">
          <h1>{title}</h1>
          <p className="legal-intro">{intro}</p>
          <p className="legal-updated">Last updated {formatted(site.legal.updated)}</p>
        </header>

        {missing.length > 0 && (
          <div className="legal-draft" role="note">
            <strong>This document is not finished.</strong>
            <p>
              It is missing {missing.join(", ")}. Until those are filled in
              (src/config/site.js) the page below is a draft and should not be relied on.
            </p>
          </div>
        )}

        <div className="legal-body">{children}</div>
      </div>
    </article>
  );
}
