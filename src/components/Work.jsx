import { featured, categories } from "../data/projects";
import CrmShowcase from "./CrmShowcase";
import Icon from "./Icon";
import "./Work.css";

function Browser({ project, large }) {
  const host = new URL(project.live).host;
  return (
    <a
      className={`browser ${large ? "is-large" : ""}`}
      href={project.live}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title} live site`}
    >
      <span className="browser-bar">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{host}</span>
      </span>
      <span className="browser-view">
        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
      </span>
    </a>
  );
}

function CaseStudy({ project, large }) {
  return (
    <article className={`case ${large ? "case-large" : ""}`}>
      <Browser project={project} large={large} />
      <div className="case-body">
        <p className="case-meta">
          <span className="case-kind">{categories[project.category]}</span>
          <span>{project.client}</span>
        </p>
        <h3>{project.title}</h3>
        <p className="case-summary">{project.summary}</p>
        {large && (
          <ul className="case-built">
            {project.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        <ul className="chips" aria-label="Built with">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="case-links">
          <a href={project.live} target="_blank" rel="noreferrer" className="case-link primary">
            <span className="live-dot" />
            Live site
          </a>
          {project.code && (
            <a href={project.code} target="_blank" rel="noreferrer" className="case-link">
              <Icon name="github" size={16} />
              Code
            </a>
          )}
        </div>
        {project.note && <p className="case-note">{project.note}</p>}
      </div>
    </article>
  );
}

export default function Work() {
  const [lead, ...rest] = featured;
  return (
    <section className="work dark" id="work">
      <div className="wrap">
        <div className="section-head">
          <h2>Selected work</h2>
          <p>
            Live sites you can click through right now, and the code behind them. Nothing
            here is a mock-up.
          </p>
        </div>

        <CaseStudy project={lead} large />
        <CrmShowcase />

        <div className="case-grid">
          {rest.map((p) => (
            <CaseStudy key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
