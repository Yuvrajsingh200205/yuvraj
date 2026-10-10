import { mount } from "./_mount";
import Work from "../components/Work";
import GitHubFeed from "../components/GitHubFeed";
import CtaBand from "../components/CtaBand";

mount(
  <>
    <Work heading="h1" />
    <GitHubFeed />
    <CtaBand
      title="Want something like one of these?"
      text="Tell me which project is closest to what you need and I will tell you what yours would take."
      links={[
        { href: "/contact/", label: "Start a project" },
        { href: "/faq/", label: "Timelines and pricing" },
        { href: "/about/", label: "Who builds it" },
      ]}
    />
  </>
);
