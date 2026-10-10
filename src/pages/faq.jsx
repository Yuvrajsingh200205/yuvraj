import { mount } from "./_mount";
import Faq from "../components/Faq";
import CtaBand from "../components/CtaBand";

mount(
  <>
    <Faq heading="h1" />
    <CtaBand
      title="Question not answered?"
      text="Put it in the form. I would rather answer it before you commit than leave you guessing."
      links={[
        { href: "/contact/", label: "Ask it here" },
        { href: "/work/", label: "See the work" },
        { href: "/about/", label: "About me" },
      ]}
    />
  </>
);
