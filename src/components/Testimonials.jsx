import { testimonials } from "../data/testimonials";
import "./Testimonials.css";

/**
 * Renders nothing at all until src/data/testimonials.js holds a real,
 * attributed quote. There is no placeholder state on purpose.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="quotes" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <h2>What clients said</h2>
        </div>
        <ul className="quote-list">
          {testimonials.map((t) => (
            <li key={`${t.name}-${t.company}`} className="quote">
              <blockquote>
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="quote-by">
                <strong>{t.name}</strong>
                <span>
                  {t.role}, {t.company}
                </span>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
