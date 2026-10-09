import "./Process.css";

const steps = [
  {
    title: "Call",
    time: "30 minutes",
    text: "You tell me what the business does and what's getting in the way. I ask a lot of questions.",
  },
  {
    title: "Plan & quote",
    time: "2–3 days",
    text: "A written scope: pages or modules, timeline and a fixed price. Nothing starts until you agree.",
  },
  {
    title: "Design & build",
    time: "2–8 weeks",
    text: "Weekly updates on a preview link you can open on your phone. Feedback goes straight in.",
  },
  {
    title: "Launch & support",
    time: "Ongoing",
    text: "I set up hosting and the domain, train your team, and stay on call for fixes after launch.",
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="section-head">
          <h2>How a project runs</h2>
          <p>Four steps from first call to launch. You always know what happens next.</p>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p className="step-time">{s.time}</p>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
