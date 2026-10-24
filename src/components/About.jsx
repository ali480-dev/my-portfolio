
import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <p className="section-label">01 / ABOUT ME</p>
        <h2>
          A little about <span>me.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3>
            Building my future, one project at a time.
          </h3>

          <p>
            I'm Ahtisham Abbasi, a frontend developer focused
            on building responsive and user-friendly websites.
            I enjoy turning ideas into practical web experiences.
          </p>

          <p>
            My journey includes JavaScript projects such as
            an Expense Tracker, Quiz App, and Weather App.
            I'm also learning React by building interactive
            web applications.
          </p>

          <p>
            My current goal is to strengthen my frontend skills
            and build projects that solve real problems for
            users and businesses.
          </p>

          <a href="#projects" className="about-link">
            Explore my projects ↗
          </a>
        </div>

        <div className="about-details">
          <div className="about-detail-card">
            <span className="detail-number">04+</span>
            <h4>Practice Projects</h4>
            <p>Web applications built while learning.</p>
          </div>

          <div className="about-detail-card">
            <span className="detail-number">JS</span>
            <h4>JavaScript</h4>
            <p>Interactive features and application logic.</p>
          </div>

          <div className="about-detail-card">
            <span className="detail-number">UI</span>
            <h4>Responsive Design</h4>
            <p>Layouts for desktop and mobile screens.</p>
          </div>

          <div className="about-detail-card">
            <span className="detail-number">⚛</span>
            <h4>Learning React</h4>
            <p>Reusable components and modern interfaces.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
