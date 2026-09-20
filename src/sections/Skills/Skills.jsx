import "./Skills.css";

import { Icon } from "@iconify/react";

import {
  Puzzle,
  Brain,
  ListChecks,
  BadgeCheck,
  BookOpen,
  Handshake,
} from "lucide-react";

import karinaSkills from "../../assets/images/skills/ka-soft-skills.png";

const skillGroups = [
  {
    title: "Languages & Web",
    skills: [
      {
        name: "Python",
        icon: "logos:python",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
      },
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
      },
    ],
  },

  {
    title: "Testing & Automation",
    skills: [
      {
        name: "Android Testing",
        icon: "logos:android-icon",
      },
      {
        name: "REST API Testing",
        subtitle: "Postman",
        icon: "logos:postman-icon",
      },
      {
        name: "Playwright",
        icon: "devicon:playwright",
      },
    ],
  },

  {
    title: "Dev Tools & Infrastructure",
    skills: [
      {
        name: "Linux",
        icon: "logos:linux-tux",
      },
      {
        name: "Git / GitHub",
        icon: "mdi:github",
        color: "#f2b7a1",
      },
      {
        name: "Jenkins",
        icon: "logos:jenkins",
      },
      {
        name: "Docker",
        icon: "logos:docker-icon",
      },
      {
        name: "Azure DevOps",
        icon: "devicon:azuredevops",
      },
    ],
  },

  {
    title: "QA & Issue Management",
    skills: [
      {
        name: "Jira",
        icon: "logos:jira",
      },
      {
        name: "Mantis",
        icon: "mdi:bug-outline",
        color: "#65c466",
      },
    ],
  },

  {
    title: "Agile Practices",
    skills: [
      {
        name: "Scrum",
        icon: "mdi:account-group-outline",
        color: "#f2b7a1",
      },
      {
        name: "Kanban",
        icon: "mdi:view-dashboard-outline",
        color: "#f2b7a1",
      },
    ],
  },

  {
    title: "AI-Assisted Tools",
    skills: [
      {
        name: "ChatGPT",
        icon: "simple-icons:openai",
        color: "#10a37f",
      },
      {
        name: "GitHub Copilot",
        icon: "logos:github-copilot",
      },
      {
        name: "Gemini",
        icon: "simple-icons:googlegemini",
        color: "#8e75ff",
      },
    ],
  },
];

const softSkills = [
  {
    name: "Problem Solving",
    icon: Puzzle,
  },
  {
    name: "Critical Thinking",
    icon: Brain,
  },
  {
    name: "Organization",
    icon: ListChecks,
  },
  {
    name: "Ownership",
    icon: BadgeCheck,
  },
  {
    name: "Continuous Learning",
    icon: BookOpen,
  },
  {
    name: "Collaboration",
    icon: Handshake,
  },
];

const ORBIT_DURATION = 28;

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__layout">
        {/* =========================
            INTRO
        ========================== */}

        <aside className="skills__intro">
          <span className="skills__eyebrow">
            SKILLS & TOOLS
          </span>

          <h2 className="skills__title">
            TOOLS I USE.
            <br />
            <span>THINGS I LOVE.</span>
          </h2>

          <p className="skills__description">
            A combination of technical knowledge,
            curiosity and people skills helps me build
            better solutions and work effectively in
            great teams.
          </p>

          <div className="skills__divider"></div>

          <p className="skills__quote">
            “Different skills.
            <br />
            Same mindset:
            <br />
            continuous growth.” ♡
          </p>
        </aside>

        {/* =========================
            TECHNICAL SKILLS
        ========================== */}

        <div className="skills__technical">
          <div className="skills__section-title">
            <div className="skills__section-symbol">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h3>Technical Skills</h3>
          </div>

          <div className="skills__groups">
            {skillGroups.map((group) => (
              <div
                className="skills__group"
                key={group.title}
              >
                <div className="skills__group-header">
                  <span>{group.title}</span>

                  <div className="skills__group-line"></div>
                </div>

                <div className="skills__group-grid">
                  {group.skills.map((skill) => (
                    <article
                      className="skills__tech-card"
                      key={skill.name}
                    >
                      <div className="skills__tech-icon">
                        <Icon
                          icon={skill.icon}
                          width="38"
                          height="38"
                          style={
                            skill.color
                              ? { color: skill.color }
                              : undefined
                          }
                        />
                      </div>

                      <div className="skills__tech-info">
                        <span className="skills__tech-name">
                          {skill.name}
                        </span>

                        {skill.subtitle && (
                          <span className="skills__tech-subtitle">
                            {skill.subtitle}
                          </span>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            SOFT SKILLS
        ========================== */}

        <div className="skills__soft">
          <div className="skills__section-title">
            <div className="skills__section-symbol">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h3>Soft Skills</h3>
          </div>

          <div className="skills__soft-map">
            {/* CHARACTER */}

            <div className="skills__soft-character">
              <img
                src={karinaSkills}
                alt="Illustration of Karina holding a plush shark"
              />

              <div className="skills__heart skills__heart--one">
                ♥
              </div>

              <div className="skills__heart skills__heart--two">
                ♥
              </div>
            </div>

            {/* ORBIT */}

            <div className="skills__orbit-track">
              {softSkills.map((skill, index) => {
                const SoftSkillIcon = skill.icon;

                const delay =
                  -(
                    index *
                    (ORBIT_DURATION / softSkills.length)
                  );

                return (
                  <div
                    className="skills__orbit-node"
                    key={skill.name}
                    style={{
                      "--orbit-delay": `${delay}s`,
                    }}
                  >
                    <div className="skills__orbit-card">
                      <div className="skills__soft-card">
                        <div className="skills__soft-icon">
                          <SoftSkillIcon
                            size={17}
                            strokeWidth={2}
                          />
                        </div>

                        <span>{skill.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="skills__soft-note">
            Good skills.
            <br />
            brighter possibilities ♡
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;