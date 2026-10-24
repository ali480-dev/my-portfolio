
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">
          <span className="status-dot"></span>
          JUNIOR FRONTEND DEVELOPER
        </p>

        <h1>
          Turning ideas into
          <br />
          <span>interactive websites.</span>
        </h1>

        <p className="hero-description">
          Hi, I'm Ahtisham Abbasi, a Software Engineering
          graduate building responsive, user-friendly web
          applications with HTML, CSS, JavaScript, and React.
          I'm passionate about creating practical digital
          experiences and continuously improving my skills.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-primary">
            Explore My Work ↗
          </a>

          <a href="#contact" className="hero-secondary">
            Get In Touch
          </a>

          <a
            href="/Ahtisham-Abbasi-CV.pdf"
            download="Ahtisham-Abbasi-CV.pdf"
            className="hero-secondary"
          >
            Download CV ↓
          </a>
        </div>

        <div className="hero-socials">
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
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>
          <div className="hero-monogram">
    <img
      src="/Profile.png"
      alt="Ahtisham Abbasi"
      className="profile-picture"
    />
  </div>
        <div className="hero-card">
          <span className="card-dot"></span>
          Open to opportunities
        </div>
      </div>
    </section>
  );
}

export default Hero;
