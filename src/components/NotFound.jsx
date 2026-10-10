import { site } from "../config/site";
import MessagePage from "./MessagePage";

export default function NotFound() {
  return (
    <MessagePage
      eyebrow="404"
      title="That page is not here."
      links={[
        { href: "/", label: "Home", note: "What I build and who for" },
        { href: "/work/", label: "The work", note: "Live sites, CRMs and web apps" },
        { href: "/about/", label: "About me", note: "Who you will be working with" },
        { href: "/faq/", label: "Questions", note: "Timelines, pricing and who owns what" },
        { href: "/contact/", label: "Start a project", note: "Tell me what you need" },
      ]}
    >
      <p>
        The address you came to does not match any page on this site. It may have been a
        typed URL, or a link to something I have since moved.
      </p>
      <p>
        If a link on this site sent you here, I would like to fix it. Tell me where you
        clicked and I will: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
      </p>
    </MessagePage>
  );
}
