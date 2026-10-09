import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import { categories } from "../data/projects";
import { site } from "../config/site";
import Icon from "./Icon";
import "./GitHubFeed.css";

const langColor = {
  JavaScript: "#e8c800",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  Python: "#3572a5",
  Java: "#b07219",
  CSS: "#663399",
};

const PAGE = 8;

function timeAgo(iso) {
  const days = Math.floor((Date.now() - new Date(iso)) / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return months === 1 ? "a month ago" : `${months} months ago`;
  const years = Math.floor(months / 12);
  return years === 1 ? "a year ago" : `${years} years ago`;
}

export default function GitHubFeed() {
  const { repos, source, loading } = useGitHubRepos();
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);

  const counts = useMemo(() => {
    const c = { all: repos.length };
    Object.keys(categories).forEach((k) => {
      c[k] = repos.filter((r) => r.category === k).length;
    });
    return c;
  }, [repos]);

  const list = filter === "all" ? repos : repos.filter((r) => r.category === filter);
  const shown = expanded ? list : list.slice(0, PAGE);
  const lastPush = repos[0]?.pushedAt;

  return (
    <section className="feed" id="github">
      <div className="wrap">
        <div className="feed-head">
          <div className="section-head">
            <h2>Everything I've built, straight from GitHub</h2>
            <p>
              This list reads my public repositories when the page loads, so new work shows up
              here the day it's pushed.
            </p>
          </div>

          <a
            className="feed-source"
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={22} />
            <span>
              <strong>github.com/{site.github}</strong>
              <span className="feed-status">
                {loading ? (
                  "Checking GitHub…"
                ) : source === "live" ? (
                  <>
                    <span className="live-dot" /> Synced just now
                    {lastPush && `, last push ${timeAgo(lastPush)}`}
                  </>
                ) : (
                  "Showing saved copy, GitHub didn't respond"
                )}
              </span>
            </span>
          </a>
        </div>

        <div className="feed-filters" role="group" aria-label="Filter projects">
          {[["all", "All"], ...Object.entries(categories)].map(([key, label]) => (
            <button
              key={key}
              aria-pressed={filter === key}
              className={filter === key ? "is-active" : ""}
              onClick={() => {
                setFilter(key);
                setExpanded(false);
              }}
            >
              {label}
              <span className="feed-count">{counts[key]}</span>
            </button>
          ))}
        </div>

        <motion.ul layout className="feed-list">
          <AnimatePresence initial={false} mode="popLayout">
            {shown.map((r) => (
              <motion.li
                layout
                key={r.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <a className="repo" href={r.url} target="_blank" rel="noreferrer">
                  <span className="repo-main">
                    <span className="repo-title">{r.title}</span>
                    {r.text && <span className="repo-text">{r.text}</span>}
                  </span>
                  <span className="repo-meta">
                    {r.language && (
                      <span className="repo-lang">
                        <i style={{ background: langColor[r.language] || "#9aa4b6" }} />
                        {r.language}
                      </span>
                    )}
                    <span className="repo-date">Updated {timeAgo(r.pushedAt)}</span>
                  </span>
                  <span className="repo-go">
                    <Icon name="code" size={18} />
                    <span className="sr-only">View code on GitHub</span>
                  </span>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {list.length > PAGE && (
          <button className="btn btn-ghost feed-more" onClick={() => setExpanded((e) => !e)}>
            {expanded ? "Show fewer" : `Show all ${list.length}`}
          </button>
        )}
      </div>
    </section>
  );
}
