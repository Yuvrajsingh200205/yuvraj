import { site } from "../config/site";
import Legal from "./Legal";

// ─────────────────────────────────────────────────────────────
// Two halves: terms for using this website, and the terms that
// apply if you hire me. Everything specific to a single project
// (price, dates, payment stages, how many rounds of revisions)
// is deliberately left to the written scope, because it differs
// per project and this page must not contradict it.
//
// Before launch, read the liability and portfolio sections and
// confirm you are happy to be held to them.
// ─────────────────────────────────────────────────────────────

export default function Terms() {
  const { legal, contact, brand } = site;
  const mail = <a href={`mailto:${contact.email}`}>{contact.email}</a>;

  return (
    <Legal
      title="Terms and conditions"
      intro={`The terms for using this website, and the terms that apply to project work for ${brand}.`}
    >
      <section>
        <h2>Who these terms are with</h2>
        <p>
          This website and the work described on it are provided by{" "}
          <strong>{legal.entity}</strong>, based in {legal.jurisdiction}. By using the site
          you accept the terms in the first half of this page. The second half applies only
          if you go on to hire me.
        </p>
      </section>

      <section>
        <h2>Using this website</h2>
        <p>
          The writing, design and code of this site are mine. The client work shown in the
          case studies belongs to the clients it was built for, and their names and logos are
          theirs. You are welcome to read, link to and quote this site. You may not copy it
          wholesale and present it as your own.
        </p>
        <p>
          Several pages link to live client sites and to public code repositories. Those are
          run by other people and I cannot control what they show or whether they stay
          online. The screenshots here were accurate when taken.
        </p>
        <p>
          Nothing on this site is a binding offer, and the prices or timelines described are
          typical rather than promised. A project exists once there is a written scope that we
          have both agreed to.
        </p>
      </section>

      <section>
        <h2>If we work together</h2>

        <h3>Scope, price and timeline</h3>
        <p>
          Before work starts you get a written scope: what is being built, when, and one fixed
          price for it. That document is the agreement. Where it says something different from
          this page, the scope wins. Payment stages and the number of revision rounds are set
          out there, because they differ from project to project.
        </p>
        <p>
          Anything you ask for that is not in the scope is a change. I will tell you what it
          costs and what it does to the timeline before I build it, not after.
        </p>

        <h3>What I need from you</h3>
        <p>
          Projects run on time when the content, logins and feedback arrive when they are
          needed. If they are held up the dates move by roughly the same amount, and I will
          tell you when that happens rather than letting the deadline pass quietly.
        </p>

        <h3>Who owns what</h3>
        <p>
          The code I write for your project is yours. The domain and the hosting accounts are
          registered in your name, and you keep the logins. Open source libraries and any paid
          components used in the build stay under their own licences, which carry over to you.
          I keep the right to reuse the general techniques and non-client-specific utilities I
          wrote, as any developer does.
        </p>

        <h3>Third party services</h3>
        <p>
          Hosting, domains, email, payment gateways and similar services are bought from other
          companies in your name, and you pay those companies directly. I will set them up and
          explain them, but their prices, uptime and terms are theirs, not mine.
        </p>

        <h3>Showing the work</h3>
        <p>
          I may show your project on this site and in my portfolio, with your name and a link.
          Tell me at any point that you would rather I did not, and I will take it down.
        </p>

        <h3>After launch</h3>
        <p>
          I fix problems in what I built. Changes to how it works, new features, and faults
          caused by someone else editing the code or by a third party service are separate
          work, quoted separately.
        </p>
      </section>

      <section>
        <h2>What I do not promise</h2>
        <p>
          I build sites to current SEO and accessibility practice, but nobody can promise a
          particular position in Google results, a volume of traffic or a level of sales. I
          also cannot promise that a service run by another company will stay available or
          keep its current pricing.
        </p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>
          If something I build goes wrong and it is my fault, I will put it right. Beyond that,
          my total liability for a project is limited to the fees you have paid me for it, and I
          am not liable for indirect losses such as lost profit, lost data held by a third party
          or lost business opportunity. Nothing here limits liability that cannot be limited by
          law.
        </p>
      </section>

      <section>
        <h2>Ending a project</h2>
        <p>
          Either of us can stop a project in writing. You pay for the work completed up to that
          point and you receive it, including the code as it stands. Work already invoiced is not
          refunded.
        </p>
      </section>

      <section>
        <h2>Law and changes</h2>
        <p>
          These terms are governed by the laws of India and the courts of {legal.jurisdiction}
          have jurisdiction. I may update this page, and the date at the top shows when it last
          changed. A change here does not alter a scope we have already agreed.
        </p>
        <p>
          Questions about any of this go to {mail}. How the site handles your data is covered
          separately in the <a href="/privacy/">privacy policy</a>.
        </p>
      </section>
    </Legal>
  );
}
