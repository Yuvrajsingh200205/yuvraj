import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../config/site";
import Icon from "./Icon";
import "./Contact.css";

const needs = ["Website", "CRM or dashboard", "Web app", "Shopify store", "Not sure yet"];
const budgets = ["Under ₹50k", "₹50k – ₹1.5L", "₹1.5L – ₹5L", "₹5L+", "Let's discuss"];

function buildMessage(f) {
  return [
    `Hi ${site.founder.name.split(" ")[0]},`,
    "",
    f.message,
    "",
    `Looking for: ${f.need.join(", ") || "Not specified"}`,
    `Budget: ${f.budget || "Not specified"}`,
    "",
    `${f.name}${f.company ? `, ${f.company}` : ""}`,
    f.email,
  ].join("\n");
}

export default function Contact({ heading = "h2" }) {
  const H = heading;
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    need: [],
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const { email, whatsapp, responseTime } = site.contact;

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggleNeed = (n) =>
    setForm((f) => ({
      ...f,
      need: f.need.includes(n) ? f.need.filter((x) => x !== n) : [...f.need, n],
    }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Add your name so I know who to reply to.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Add an email address I can reply to.";
    if (form.message.trim().length < 10)
      e.message = "Add a sentence or two about the project.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const subject = `New project: ${form.need.join(", ") || "enquiry"} from ${form.name}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMessage(form))}`;
    setSent(true);
  };

  const waLink = whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(
        `Hi ${site.founder.name.split(" ")[0]}, I'd like to talk about a project.`
      )}`
    : null;

  return (
    <section className="contact dark" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <H>Tell me what you're building.</H>
          <p>
            A few lines is enough. {responseTime} If it's not something I can do well, I'll
            say so and point you to someone who can.
          </p>
          <div className="contact-direct">
            <a href={`mailto:${email}`} className="contact-line">
              <Icon name="mail" size={20} />
              {email}
            </a>
            {waLink && (
              <a href={waLink} target="_blank" rel="noreferrer" className="contact-line">
                <Icon name="chat" size={20} />
                Message on WhatsApp
              </a>
            )}
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="field-row">
            <label className="field">
              <span>Your name</span>
              <input
                value={form.name}
                onChange={set("name")}
                autoComplete="name"
                aria-invalid={!!errors.name}
              />
              {errors.name && <em>{errors.name}</em>}
            </label>
            <label className="field">
              <span>Email</span>
              <input
                type="email"
                value={form.email}
                onChange={set("email")}
                autoComplete="email"
                aria-invalid={!!errors.email}
              />
              {errors.email && <em>{errors.email}</em>}
            </label>
          </div>

          <label className="field">
            <span>Business name (optional)</span>
            <input value={form.company} onChange={set("company")} autoComplete="organization" />
          </label>

          <fieldset className="field">
            <legend>What do you need?</legend>
            <div className="pick">
              {needs.map((n) => (
                <button
                  type="button"
                  key={n}
                  aria-pressed={form.need.includes(n)}
                  onClick={() => toggleNeed(n)}
                >
                  {n}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="field">
            <legend>Rough budget (optional)</legend>
            <div className="pick">
              {budgets.map((b) => (
                <button
                  type="button"
                  key={b}
                  aria-pressed={form.budget === b}
                  onClick={() => setForm((f) => ({ ...f, budget: f.budget === b ? "" : b }))}
                >
                  {b}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="field">
            <span>About the project</span>
            <textarea
              rows={5}
              value={form.message}
              onChange={set("message")}
              placeholder="What does your business do, and what should the new site or system fix?"
              aria-invalid={!!errors.message}
            />
            {errors.message && <em>{errors.message}</em>}
          </label>

          <div className="form-foot">
            <button type="submit" className="btn btn-primary">
              <Icon name="mail" />
              Send by email
            </button>
            <p>Opens your email app with this message filled in.</p>
          </div>

          <AnimatePresence>
            {sent && (
              <motion.p
                className="form-sent"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                role="status"
              >
                <Icon name="check" />
                Your email app should be open with the message ready. If it didn't open, write
                to {email} directly.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
