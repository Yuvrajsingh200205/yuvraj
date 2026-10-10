import { mount } from "./_mount";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import CtaBand from "../components/CtaBand";

mount(
  <>
    <Hero />
    <Services />
    <Work limit={2} />
    <Process />
    <Testimonials />
    <CtaBand
      title="Still deciding?"
      text="Read how a project runs and what it costs before you write to me. Or go straight to the work and check the live links yourself."
      links={[
        { href: "/faq/", label: "Read the questions" },
        { href: "/work/", label: "See the work" },
        { href: "/contact/", label: "Start a project" },
      ]}
    />
  </>
);
