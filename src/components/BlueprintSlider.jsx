import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import { featured, categories } from "../data/projects";
import Icon from "./Icon";
import "./BlueprintSlider.css";

// The four strongest live builds, one per kind of work.
const picks = ["suh-admin", "schotest", "flavoro", "kings"].map((id) =>
  featured.find((p) => p.id === id)
);

export default function BlueprintSlider() {
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState(8);
  const [dragging, setDragging] = useState(false);
  const frame = useRef(null);
  const reduce = useReducedMotion();
  const project = picks[index];

  // One orchestrated moment: the finished build "draws" over the blueprint.
  useEffect(() => {
    if (reduce) {
      setPos(55);
      return;
    }
    const controls = animate(8, 55, {
      delay: 1.1,
      duration: 1.8,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: setPos,
    });
    return () => controls.stop();
  }, [reduce]);

  const moveTo = (clientX) => {
    const rect = frame.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  const onPointerDown = (e) => {
    setDragging(true);
    frame.current.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  };

  return (
    <figure className="bp">
      <div
        ref={frame}
        className={`bp-frame ${dragging ? "is-dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={(e) => dragging && moveTo(e.clientX)}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={project.id}
            className="bp-layers"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bp-blueprint">
              <img src={project.image} alt="" draggable="false" />
              <span className="bp-tint" />
              <span className="bp-grid" />
            </div>
            <div className="bp-real" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
              <img
                src={project.image}
                alt={`${project.title} — live site screenshot`}
                draggable="false"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <span className="bp-tag bp-tag-left" style={{ opacity: pos > 18 ? 1 : 0 }}>
          Plan
        </span>
        <span className="bp-tag bp-tag-right" style={{ opacity: pos < 82 ? 1 : 0 }}>
          Shipped
        </span>

        <div
          className="bp-handle"
          style={{ left: `${pos}%` }}
          role="slider"
          tabIndex={0}
          aria-label="Compare the plan with the shipped site"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
        >
          <span className="bp-knob">
            <Icon name="drag" size={18} />
          </span>
        </div>
      </div>

      <figcaption className="bp-bar">
        <div className="bp-tabs" role="tablist" aria-label="Choose a project">
          {picks.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={i === index}
              className={i === index ? "is-active" : ""}
              onClick={() => setIndex(i)}
            >
              <span className="bp-tab-kind">{categories[p.category]}</span>
              <span className="bp-tab-title">{p.title}</span>
            </button>
          ))}
        </div>
        <a className="bp-open" href={project.live} target="_blank" rel="noreferrer">
          <span className="live-dot" />
          Open the live site
          <Icon name="external" size={16} />
        </a>
      </figcaption>
    </figure>
  );
}
