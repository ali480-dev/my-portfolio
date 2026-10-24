
import "./Contact.css";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <p className="section-label">03 / GET IN TOUCH</p>

      <h2>
        Have a project in <span>mind?</span>
      </h2>

      <p className="contact-description">
        I'm open to junior frontend opportunities and
        freelance projects. Let's discuss how we can
        work together.
      </p>

      <a
        className="contact-email"
        href="mailto:ahtishamabbasi778@gmail.com"
      >
        ahtishamabbasi778@gmail.com ↗
      </a>

      <div className="contact-socials">
        <a
          href="https://github.com/ali480-dev"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href="https://linkedin.com/in/ahtisham-abbasi-b3bb191b5"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}

export default Contact;
