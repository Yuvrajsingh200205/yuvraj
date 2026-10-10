import { mount } from "./_mount";
import Contact from "../components/Contact";
import CtaBand from "../components/CtaBand";

mount(
  <>
    <Contact heading="h1" />
    <CtaBand
      title="Before you write"
      text="Worth a look if you have not been through these yet: what the work looks like, and the answers to the questions most people ask first."
      links={[
        { href: "/work/", label: "See the work" },
        { href: "/faq/", label: "Read the questions" },
        { href: "/privacy/", label: "What happens to your details" },
      ]}
    />
  </>
);
