import { motion } from "framer-motion";
import BlueprintSlider from "./BlueprintSlider";
import "./Hero.css";

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.09, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-copy">
          <h1>
            {["I build the website", "your customers see", "and the CRM your", "team runs on."].map(
              (line, i) => (
                <span className="hero-line" key={line}>
                  <motion.span custom={i} variants={rise} initial="hidden" animate="show">
                    {line}
                  </motion.span>
                </span>
              )
            )}
          </h1>

          <motion.div
            className="hero-side"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            <p>
              Websites, CRMs and custom web apps for schools, studios, shops and service
              companies. Every project on this page has a live link or public code you can
              check yourself.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Start a project
              </a>
              <a href="#work" className="btn btn-ghost">
                See the work
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <BlueprintSlider />
        </motion.div>
      </div>
    </section>
  );
}
