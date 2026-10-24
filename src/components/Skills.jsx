
import "./Skills.css";

const skillGroups = [
  {
    title: "Core Frontend Skills",
    description: "My main technologies for building modern web applications.",
    status: "Core",
    skills: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Responsive Design", icon: "📱" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    title: "Development Tools",
    description: "Tools I use to write, manage, and test my code.",
    status: "Tools",
    skills: [
      { name: "Git", icon: "🔀" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
      { name: "Browser DevTools", icon: "🛠️" },
      { name: "Postman", icon: "📬" },
    ],
  },
  {
    title: "Currently Learning",
    description: "Technologies I'm exploring to expand my frontend skills.",
    status: "Learning",
    skills: [
      { name: "TypeScript", icon: "🔷" },
      { name: "React Router", icon: "🧭" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Frontend Testing", icon: "🧪" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <p className="section-label">02 / MY TOOLKIT</p>
        <h2>Skills & <span>technologies.</span></h2>
        <p className="skills-intro">
          The tools I use today and the technologies I'm
          learning to build better web experiences.
        </p>
      </div>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-header">
              <h3>{group.title}</h3>
              <span className="skill-group-status">
                {group.status}
              </span>
            </div>

            <p className="skill-group-description">
              {group.description}
            </p>

            <div className="skill-cards">
              {group.skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-icon" aria-hidden="true">
                    {skill.icon}
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
