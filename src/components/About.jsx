import { site } from "../config/site";
import Icon from "./Icon";
import "./About.css";

const experience = [
  {
    role: "Frontend developer",
    where: "SUH Tech Pvt. Ltd.",
    when: "Nov 2024 – present",
    text: "Client websites, admin dashboards and custom Shopify stores, working with the backend team on APIs.",
  },
  {
    role: "Full-stack developer intern",
    where: "Farmer Shop",
    when: "3 months",
    text: "Built features across the front end and the API for an online farm store.",
  },
  {
    role: "Web development intern",
    where: "Schotest Pvt. Ltd., Gurgaon",
    when: "Feb – Jul 2024",
    text: "Responsive website templates and REST APIs for the company's mobile app.",
  },
];

const promises = [
  "You talk to the person writing the code, not an account manager.",
  "You own the code, the domain and the hosting accounts.",
  "Progress is a link you can open, not a status email.",
];

export default function About({ heading = "h2" }) {
  const H = heading;
  const { founder } = site;
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-photo">
          <img src={founder.photo} alt={founder.name} loading="lazy" />
          <p>
            <strong>{founder.name}</strong>
            <span>{founder.role}</span>
          </p>
        </div>

        <div className="about-text">
          <H>Hi, I'm {founder.name.split(" ")[0]}.</H>
          <p className="about-lead">
            I'm a full-stack developer from {founder.location}, trained in computer science
            (B.Tech CSE, Delhi Technical Campus). Since early 2024 I've been building
            websites, admin panels and CRMs for real businesses, and I started this studio to
            do that work directly for the owners who need it.
          </p>

          <ul className="about-promises">
            {promises.map((p) => (
              <li key={p}>
                <Icon name="check" size={18} />
                {p}
              </li>
            ))}
          </ul>

          <h3 className="about-sub">Where I've worked</h3>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.where}>
                <div className="timeline-head">
                  <strong>{e.role}</strong>
                  <span>{e.when}</span>
                </div>
                <p className="timeline-where">{e.where}</p>
                <p>{e.text}</p>
              </li>
            ))}
          </ol>

          <div className="about-links">
            <a href={site.socials.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Icon name="github" />
              GitHub
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Icon name="linkedin" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
