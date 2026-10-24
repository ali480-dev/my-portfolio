
import "./Experience.css";

const education = [
  {
    period: "2016 — 2020",
    title: "BS Software Engineering",
    organization: "Iqra University, Islamabad",
    description:
      "Studied software engineering, building an academic foundation for a career in technology and software development.",
    type: "Education",
  },
   {
    period: "2014 — 2015",
    title: "FSc (Intermediate)",
    organization: "Islamabad College for Boys",
    description:
      "Completed intermediate-level education at Islamabad College for Boys.",
    type: "Education",
  },
];

const experience = [
  {
    period: "Jan 2026 — Present",
    title: "Freelance Frontend Web Developer",
    organization: "Freelance",
    description:
      "Building responsive and user-friendly web applications using HTML, CSS, JavaScript, and React. Developing interactive interfaces, reusable components, API-based applications, and e-commerce features while continuously improving frontend development skills.",
    type: "Freelance",
  },
  {
    period: "May 2021 — May 2022",
    title: "Ecommerce Officer",
    organization: "IZOC Solutions",
    description:
      "Professional experience in an e-commerce environment, providing a foundation in business operations and digital commerce.",
    type: "Experience",
  },
  {
    period: "2020 — 2021",
    title: "Virtual Assistant / Administrative Assistant",
    organization: "Remote",
    description:
      "Professional experience in a remote working environment, supporting the development of transferable workplace skills.",
    type: "Experience",
  },
];


function TimelineCard({ item }) {
  return (
    <article className="timeline-card">
      <div className="timeline-card-top">
        <span className="timeline-type">{item.type}</span>
        <span className="timeline-period">{item.period}</span>
      </div>

      <h3>{item.title}</h3>
      <h4>{item.organization}</h4>
      <p>{item.description}</p>
    </article>
  );
}

function Experience() {
  return (
    <section className="journey section" id="experience">
      <div className="section-heading">
        <p className="section-label">MY BACKGROUND</p>
        <h2>My education & <span>experience.</span></h2>
        <p className="journey-intro">
          My academic background, professional experience,
          and journey toward frontend development.
        </p>
      </div>

      <div className="journey-grid">
        <div className="journey-column">
          <div className="journey-heading">
            <span className="journey-icon">🎓</span>
            <div>
              <h3>Education</h3>
              <p>My academic foundation</p>
            </div>
          </div>

          <div className="timeline">
            {education.map((item) => (
              <TimelineCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="journey-column">
          <div className="journey-heading">
            <span className="journey-icon">💼</span>
            <div>
              <h3>Experience</h3>
              <p>My professional background</p>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <TimelineCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
