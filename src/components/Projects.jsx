
const projects = [
  {
    number: "01",
    title: "Expense Tracker",
    category: "JavaScript Application",
    description:
      "Track expenses, manage transactions, and calculate total spending with an interactive interface.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: "/images/expense-tracker.png",
    imageAlt: "Expense Tracker application interface",
    github: "https://github.com/ali480-dev/ExpenseTrackerV2",
    demo: "https://ali480-dev.github.io/ExpenseTrackerV2/",
  },
  {
    number: "02",
    title: "E-commerce Website",
    category: "React Application",
    description:
      "A modern shopping website featuring product search, navigation, and a working shopping cart.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/images/ecommerce.png",
    imageAlt: "E-commerce website interface",
    github: "https://github.com/ali480-dev",
    demo: "https://ecommerce-website-mpq1vq8ka-ali480-dev.vercel.app/",
  },
  {
    number: "03",
    title: "Quiz App",
    category: "Interactive Web App",
    description:
      "An interactive quiz application with multiple questions, answer feedback, and a final score.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/quiz-app.png",
    imageAlt: "Quiz application interface",
    github: "https://github.com/ali480-dev/QuizApp",
    demo: "https://ali480-dev.github.io/QuizApp/",
  },
  {
    number: "04",
    title: "Weather App",
    category: "API-Based Application",
    description:
      "Search for a city and view weather information using weather API data.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    image: "/images/weather-app.png",
    imageAlt: "Weather application interface",
    github: "https://github.com/ali480-dev/WeatherApp",
    demo: "https://ali480-dev.github.io/WeatherApp/",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <span className="section-label">MY WORK</span>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p className="projects-intro">
          Here are some of the projects I've built while developing my
          frontend skills.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
              />
            </div>

            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
