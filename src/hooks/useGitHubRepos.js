import { useEffect, useState } from "react";
import snapshot from "../data/github-snapshot.json";
import { repoMeta } from "../data/projects";
import { site } from "../config/site";

const CACHE_KEY = `gh-repos:${site.github}`;
const CACHE_MS = 30 * 60 * 1000;

function shape(repo) {
  const meta = repoMeta[repo.name] || {};
  return {
    name: repo.name,
    title: meta.title || repo.name.replace(/[-_]+/g, " ").trim(),
    text: meta.text || repo.description || "",
    category: meta.category || "app",
    language: repo.language || null,
    pushedAt: repo.pushed_at,
    stars: repo.stargazers_count || 0,
    url: repo.html_url,
    live: repo.homepage || null,
  };
}

function clean(list) {
  const hidden = new Set(site.hiddenRepos);
  return list
    .filter((r) => !r.fork && !hidden.has(r.name) && r.size !== 0)
    .map(shape)
    .sort((a, b) => new Date(b.pushedAt) - new Date(a.pushedAt));
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, data } = JSON.parse(raw);
    return Date.now() - at < CACHE_MS ? data : null;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {
    /* storage unavailable — fine, we just refetch next time */
  }
}

/**
 * Reads public repositories straight from the GitHub API, so new work
 * shows up on the site as soon as it's pushed. If GitHub can't be reached
 * (offline, rate-limited), it falls back to a bundled snapshot.
 */
export function useGitHubRepos() {
  const [state, setState] = useState(() => {
    const cached = readCache();
    return cached
      ? { repos: cached, source: "live", loading: false }
      : { repos: clean(snapshot), source: "snapshot", loading: true };
  });

  useEffect(() => {
    if (state.source === "live") return;
    const ctrl = new AbortController();
    fetch(
      `https://api.github.com/users/${site.github}/repos?per_page=100&sort=pushed`,
      { signal: ctrl.signal, headers: { Accept: "application/vnd.github+json" } }
    )
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        const repos = clean(data);
        writeCache(repos);
        setState({ repos, source: "live", loading: false });
      })
      .catch((err) => {
        if (err?.name === "AbortError") return;
        setState((s) => ({ ...s, loading: false }));
      });
    return () => ctrl.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
