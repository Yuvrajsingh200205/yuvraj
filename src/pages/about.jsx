import { mount } from "./_mount";
import About from "../components/About";
import Process from "../components/Process";
import CtaBand from "../components/CtaBand";

mount(
  <>
    <About heading="h1" />
    <Process />
    <CtaBand
      title="Seen enough?"
      text="The work is all live and the code is public, so you can check it before you commit to anything."
      links={[
        { href: "/work/", label: "See the work" },
        { href: "/faq/", label: "Read the questions" },
        { href: "/contact/", label: "Start a project" },
      ]}
    />
  </>
);
