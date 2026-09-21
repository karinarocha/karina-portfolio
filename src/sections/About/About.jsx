import "./About.css";
import experiences from "../../data/experiences";

import {
  MapPinned,
  Headset,
  Code2,
  ShieldCheck,
  Compass,
} from "lucide-react";

import geoprocessingImage from "../../assets/images/about/exploration/geoprocessing.png";
import supportImage from "../../assets/images/about/exploration/support.png";
import frontendImage from "../../assets/images/about/exploration/frontend.png";

import qaPathImage from "../../assets/images/about/progression/qa-mage.png";
import qaLvl1Image from "../../assets/images/about/progression/qa-lvl1-mage.png";
import qaLvl2Image from "../../assets/images/about/progression/qa-lvl2-mage.png";
import qaCurrentImage from "../../assets/images/about/progression/qa-current.png";

const explorationImages = [
  geoprocessingImage,
  supportImage,
  frontendImage,
];

const explorationIcons = [
  MapPinned,
  Headset,
  Code2,
];

function About() {
  return (
    <section className="about" id="about">
      {/* ==================================================
          STORY + EXPLORATION
      ================================================== */}

      <div className="about__story-layout">
        {/* =========================
            LEFT EDITORIAL COLUMN
        ========================== */}

        <aside className="about__story">
          <span className="about__eyebrow">
            MY JOURNEY
          </span>

          <h2 className="about__title">
            DIFFERENT PATHS.
            <br />
            <span>SAME PURPOSE.</span>
          </h2>

          <p className="about__intro">
            My career started through different areas of
            technology. Each experience gave me a different
            perspective, new skills and a clearer understanding
            of the kind of problems I enjoy solving.
          </p>

          <div className="about__story-divider"></div>

          <p className="about__story-note">
            “Every experience
            <br />
            adds to the story.” ♡
          </p>
        </aside>

        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="about__exploration">
          <div className="about__exploration-title">
            <div className="about__exploration-heading">
              <Compass size={17} strokeWidth={2.2} />

              <span>
                EXPLORATION PHASE
              </span>
            </div>

            <p>
              Three paths. Different skills. One evolving career.
            </p>
          </div>

          {/* =========================
              EXPLORATION CARDS
          ========================== */}

          <div className="about__paths">
            {experiences.map((experience, index) => {
              const Icon =
                explorationIcons[index] ?? Code2;

              return (
                <article
                  className="about__path-card"
                  key={experience.id}
                >
                  <div className="about__path-number">
                    0{index + 1}
                  </div>

                  <div className="about__character">
                    <img
                      src={explorationImages[index]}
                      alt={`Illustration for ${experience.title}`}
                    />
                  </div>

                  <div
                    className={`about__path-heading about__path-heading--${
                      index + 1
                    }`}
                  >
                    <div className="about__path-icon">
                      <Icon
                        size={16}
                        strokeWidth={2.2}
                      />
                    </div>

                    <h3>
                      {experience.title}
                    </h3>
                  </div>

                  <p className="about__company">
                    {experience.company}
                  </p>

                  <p className="about__period">
                    {experience.period}
                  </p>

                  <ul>
                    {experience.skills.map((skill) => (
                      <li key={skill}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          {/* =========================
              PATH CONNECTORS
          ========================== */}

          <div
            className="about__paths-connector"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 900 125"
              preserveAspectRatio="none"
            >
              {/* GEO */}

              <path
                className="about__connector-path about__connector-path--geo"
                d="
                  M150 4
                  C150 35,
                  205 40,
                  245 65
                  C275 84,
                  280 100,
                  330 121
                "
              />

              {/* SUPPORT */}

              <path
                className="about__connector-path about__connector-path--support"
                d="
                  M450 4
                  C450 32,
                  468 42,
                  460 63
                  C450 83,
                  443 98,
                  450 121
                "
              />

              {/* FRONT-END */}

              <path
                className="about__connector-path about__connector-path--frontend"
                d="
                  M750 4
                  C750 35,
                  695 40,
                  655 65
                  C625 84,
                  620 100,
                  570 121
                "
              />

              {/* DIAMONDS */}

              <rect
                className="about__connector-dot about__connector-dot--geo"
                x="146"
                y="0"
                width="8"
                height="8"
                rx="2"
                transform="rotate(45 150 4)"
              />

              <rect
                className="about__connector-dot about__connector-dot--support"
                x="446"
                y="0"
                width="8"
                height="8"
                rx="2"
                transform="rotate(45 450 4)"
              />

              <rect
                className="about__connector-dot about__connector-dot--frontend"
                x="746"
                y="0"
                width="8"
                height="8"
                rx="2"
                transform="rotate(45 750 4)"
              />
            </svg>
          </div>

          {/* =========================
              THE PATH I CHOSE
          ========================== */}

          <div className="about__class-selected">
            <span className="about__class-label">
              THE PATH I CHOSE
            </span>

            <div className="about__class-image">
              <img
                src={qaPathImage}
                alt="Karina as a QA investigator mage"
              />
            </div>

            <div className="about__class-content">
              <div className="about__class-heading">
                <div className="about__class-icon">
                  <ShieldCheck
                    size={21}
                    strokeWidth={2.2}
                  />
                </div>

                <h3>
                  SOFTWARE TESTING / QA
                </h3>
              </div>

              <p>
                Where analytical thinking, curiosity and
                problem-solving finally came together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          TRANSITION
      ================================================== */}

      <div
        className="about__quest-transition"
        aria-hidden="true"
      >
        <span></span>
      </div>

      {/* ==================================================
          LEVELING UP
      ================================================== */}

      <div className="about__progression">
        <div className="about__progression-header">
          <span>
            MAIN QUEST
          </span>

          <h3>
            LEVELING UP
          </h3>

          <p>
            Same path. New challenges. Higher goals.
          </p>
        </div>

        <div className="about__progression-track">
          {/* =========================
              LVL 1
          ========================== */}

          <article className="about__level about__level--1">
            <span
              className="about__level-node"
              aria-hidden="true"
            ></span>

            <div className="about__level-character">
              <img
                src={qaLvl1Image}
                alt="Karina QA level 1"
              />
            </div>

            <div className="about__level-content">
              <div className="about__level-top">
                <span className="about__level-badge">
                  LVL 1
                </span>

                <span className="about__level-company">
                  SIDIA · JAN 2021 — DEC 2021
                </span>
              </div>

              <h4>
                TECHNICIAN TEST DEVELOPER
              </h4>

              <p className="about__level-description">
                Started my journey in software quality, working
                with Android validation, manual testing, test
                execution and defect investigation.
              </p>
            </div>
          </article>

          {/* =========================
              LVL 2
          ========================== */}

          <article className="about__level about__level--2">
            <span
              className="about__level-node"
              aria-hidden="true"
            ></span>

            <div className="about__level-character">
              <img
                src={qaLvl2Image}
                alt="Karina QA level 2"
              />
            </div>

            <div className="about__level-content">
              <div className="about__level-top">
                <span className="about__level-badge">
                  LVL 2
                </span>

                <span className="about__level-company">
                  SIDIA · DEC 2021 — JUN 2024
                </span>
              </div>

              <h4>
                JR SOFTWARE TEST ENGINEER
              </h4>

              <p className="about__level-description">
                Expanded my experience in software testing,
                Android quality, defect analysis and test
                processes, while taking on more complex
                responsibilities.
              </p>
            </div>
          </article>

          {/* =========================
              LVL 3 · CURRENT
          ========================== */}

          <article className="about__level about__level--current">
            <span
              className="about__level-node"
              aria-hidden="true"
            ></span>

            <div className="about__level-character">
              <img
                src={qaCurrentImage}
                alt="Karina QA level 3"
              />
            </div>

            <div className="about__level-content">
              <div className="about__level-top">
                <span className="about__level-badge">
                  LVL 3 · CURRENT
                </span>

                <span className="about__level-company">
                  SIDIA · JUN 2024 — PRESENT
                </span>
              </div>

              <h4>
                MID-LEVEL SOFTWARE TEST ENGINEER
              </h4>

              <p className="about__level-description">
                Taking on more complex Android testing challenges
                while finding better ways to organize processes,
                optimize workflows and anticipate problems.
                <br />
                <br />
                Along the way, I'm leveling up with Python, APIs
                and Playwright as I grow toward SDET.
              </p>
            </div>
          </article>
        </div>

        <p className="about__next-level">
          Next level... loading ♡
        </p>
      </div>
    </section>
  );
}

export default About;