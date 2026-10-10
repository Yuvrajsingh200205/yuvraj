import { site } from "../config/site";
import MessagePage from "./MessagePage";

export default function ThankYou() {
  const { contact } = site;

  return (
    <MessagePage
      eyebrow="Enquiry received"
      title="Thanks, I have your message."
      links={[
        { href: "/work/", label: "The work", note: "Live sites and the code behind them" },
        { href: "/faq/", label: "Questions", note: "Timelines, pricing and who owns what" },
        { href: "/about/", label: "About me", note: "Who you will be working with" },
        { href: "/", label: "Home", note: "Back to the start" },
      ]}
    >
      <p>{contact.responseTime}</p>
      <p>
        My reply comes from {contact.email}, so if nothing has arrived by then it is worth
        checking your spam folder. You can also write to me directly at{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
      <p>
        If you did not send a message and landed here by accident, nothing has been recorded
        and you can safely close this page.
      </p>
    </MessagePage>
  );
}
