import React from "react";
import ReactDOM from "react-dom/client";
import { MotionConfig } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "@fontsource-variable/bricolage-grotesque/opsz.css";
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/600.css";
import "../styles/global.css";

/**
 * Every page boots through here, so the nav, footer and skip link
 * are identical across the site. Page titles and meta tags are NOT
 * set here: they are written into each page's HTML at build time
 * from src/config/pages.js.
 */
export function mount(page) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{page}</main>
        <Footer />
      </MotionConfig>
    </React.StrictMode>
  );
}
