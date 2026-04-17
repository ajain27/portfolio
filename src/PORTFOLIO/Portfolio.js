import portraitImage from "./assets/image.jpg";
import profile from "./Constants/profile";
import highlights from "./Constants/highlights";
import Focus from "./Constants/focus";
import Skill from "./Constants/skill";
import experience from "./Constants/experience";
import education from "./Constants/education";
import certifications from "./Constants/certifications";

export default function Portfolio() {
  return (
    <main className="portfolio-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            Available for senior front-end opportunities
          </p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>

          <ul className="meta-list">
            <li>{profile.location}</li>
            <li>{profile.email}</li>
            <li>{profile.phone}</li>
          </ul>
        </div>

        <aside className="hero-panel">
          <div className="portrait-card">
            <img
              src={portraitImage}
              alt="Portrait of Ankit Jain"
              className="portrait-image"
            />
          </div>

          <div className="panel-card">
            <span className="panel-label">Core Strengths</span>
            <ul>
              {Focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="highlights-grid">
            {highlights.map((item) => (
              <article key={item.label} className="highlight-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Technical Skills</p>
          <h2>Modern front-end engineering with product-minded execution.</h2>
        </div>

        <div className="skills-grid">
          {Skill.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <div className="pill-row">
                {group.skills.map((skill) => (
                  <span key={skill} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Professional Experience</p>
          <h2>
            Built for enterprise scale, modern migrations, and dependable
            delivery.
          </h2>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="timeline-card"
            >
              <div className="timeline-header">
                <div>
                  <p className="timeline-role">{job.role}</p>
                  <h3>
                    {job.company}
                    <span>{job.location}</span>
                  </h3>
                </div>
                <p className="timeline-period">{job.period}</p>
              </div>

              {job.link ? (
                <a
                  className="timeline-link"
                  href={job.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit company
                </a>
              ) : null}

              <ul className="achievement-list">
                {job.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              <div className="pill-row">
                {job.stack.map((item) => (
                  <span key={item} className="pill pill-muted">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-split">
        <article className="info-card">
          <p className="section-label">Education</p>
          <div className="stack-list">
            {education.map((item) => (
              <div key={item.degree} className="stack-item">
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <span>{item.location}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="info-card">
          <p className="section-label">Certifications</p>
          <div className="stack-list">
            {certifications.map((item) => (
              <a
                key={item.name}
                className="cert-link"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <strong>{item.name}</strong>
                <span>{item.issuer}</span>
              </a>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
