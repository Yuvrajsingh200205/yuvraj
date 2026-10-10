import { site } from "../config/site";
import Legal from "./Legal";

// ─────────────────────────────────────────────────────────────
// This page describes what the site ACTUALLY does, not what it
// might do one day. Each section is tied to a config value:
//   - analytics section appears only when a GA4 ID is set
//   - Turnstile section appears only when a site key is set
//   - the form section changes wording when the form posts to a
//     server instead of opening the visitor's mail app
// So switching analytics on in src/config/site.js updates this
// page in the same commit. The two can never drift apart.
//
// Read the retention and rights wording below and confirm it
// matches what you really do before launch.
// ─────────────────────────────────────────────────────────────

export default function PrivacyPolicy() {
  const { legal, contact, analytics, form, brand } = site;
  const ga = analytics.ga4Id.trim();
  const turnstile = form.turnstileSiteKey.trim();
  const host = legal.hostingProvider.trim();
  const serverForm = Boolean(form.endpoint.trim());
  const mail = <a href={`mailto:${contact.email}`}>{contact.email}</a>;

  return (
    <Legal
      title="Privacy policy"
      intro={`What ${brand} collects through this website, why it is collected, how long it is kept and how to have it removed.`}
    >
      <section>
        <h2>Who is responsible</h2>
        <p>
          This website is run by <strong>{legal.entity}</strong>, based in{" "}
          {legal.jurisdiction}. For anything on this page, including a request to delete
          your data, write to {mail}.
        </p>
      </section>

      <section>
        <h2>What this site collects</h2>

        <h3>The enquiry form</h3>
        <p>
          The form on the contact page asks for your name, your email address, your company
          if you have one, the kind of work you are looking for, a budget range and a short
          description of the project. Only the name, email and description are required.
        </p>
        {serverForm ? (
          <p>
            When you submit the form the details are sent to a server that forwards them to
            my inbox. They are used to answer your enquiry and to keep a record of what we
            discussed. They are not added to a mailing list and you will not get marketing
            email as a result of writing to me.
          </p>
        ) : (
          <p>
            At the moment the form does not send anything by itself. Submitting it opens
            your own email app with the message already written, and nothing leaves your
            device until you press send there. That also means this website never stores
            your enquiry: it arrives as an ordinary email in my inbox, where it is used to
            answer you and kept as a record of what we discussed. It is not added to a
            mailing list.
          </p>
        )}

        {turnstile && (
          <>
            <h3>Spam protection</h3>
            <p>
              The form is protected by Cloudflare Turnstile, which checks that the
              submission comes from a person and not a script. To do that it receives your
              IP address and basic information about your browser. Cloudflare acts as my
              processor for this and the check result is not used for anything else. See the{" "}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noreferrer"
              >
                Cloudflare privacy policy
              </a>
              .
            </p>
          </>
        )}

        <h3>Website analytics</h3>
        {ga ? (
          <p>
            This site uses Google Analytics to count visits and see which pages people
            read. It records the pages you view, roughly where in the world you are, the
            kind of device and browser you use, and how you arrived. Google sets cookies in
            your browser to tell one visit from another. I use this only to understand which
            work is worth writing about. I do not use it to identify you, and the data is
            not combined with your enquiry. See{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noreferrer"
            >
              how Google uses data from sites that use its services
            </a>
            .
          </p>
        ) : (
          <p>
            This site currently runs no analytics and no tracking scripts, and it sets no
            cookies of its own. If that changes, this section will say so and will name what
            is used before it is switched on.
          </p>
        )}

        <h3>Server logs</h3>
        <p>
          {host ? (
            <>
              The site is hosted by <strong>{host}</strong>, whose servers keep standard
              request logs: the IP address a request came from, the page asked for, the time
              and the browser used. These logs exist to keep the site running and secure.
            </>
          ) : (
            <>
              The company that hosts this site keeps standard request logs: the IP address a
              request came from, the page asked for, the time and the browser used. These
              logs exist to keep the site running and secure.
            </>
          )}
        </p>
      </section>

      <section>
        <h2>What this site does not do</h2>
        <ul>
          <li>No advertising, and no advertising or social media tracking pixels.</li>
          <li>Your details are never sold, rented or passed on for anyone else to market to you.</li>
          <li>No account to create, and no password of yours stored anywhere.</li>
          {!ga && <li>No cookies are set by this site.</li>}
        </ul>
      </section>

      <section>
        <h2>How long things are kept</h2>
        <p>
          Enquiry emails and the project correspondence that follows are kept while we are
          talking, and afterwards as a record of the work. Ask me to delete yours and I will,
          apart from anything I have to keep for tax or accounting.
        </p>
        {ga && (
          <p>
            Analytics data is kept for the period set in the Google Analytics property, after
            which Google deletes it.
          </p>
        )}
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Under India's Digital Personal Data Protection Act, 2023 you can ask me what
          personal data of yours I hold, ask me to correct it, and ask me to delete it. If
          you are in the UK or the European Union, the UK GDPR and the GDPR give you those
          rights too, along with the right to object to processing and to ask for a copy of
          your data.
        </p>
        <p>
          Write to {mail} and I will deal with it. If you are not satisfied with how I have
          handled your request you can complain to the Data Protection Board of India, or to
          your own supervisory authority if you are in the UK or the EU.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          This is a site for businesses hiring a developer. It is not aimed at children and I
          do not knowingly collect anything from them. Several of my clients are schools, but
          the work I do for them is separate from this website, and that data is held by the
          school under its own policy.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          If what the site collects changes, this page changes with it and the date at the top
          is updated. The terms that apply to project work are on the{" "}
          <a href="/terms/">terms and conditions</a> page.
        </p>
      </section>
    </Legal>
  );
}
