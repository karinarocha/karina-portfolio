import "./Contact.css";

import { Icon } from "@iconify/react";

import {
  Mail,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "karinarochaf.97@gmail.com",
    href: "mailto:karinarochaf.97@gmail.com",
    type: "lucide",
    icon: Mail,
    external: false,
  },
  {
    name: "LinkedIn",
    value: "karinarochaferreira",
    href: "https://www.linkedin.com/in/karinarochaferreira/",
    type: "iconify",
    icon: "logos:linkedin-icon",
    external: true,
  },
  {
    name: "GitHub",
    value: "karinarocha",
    href: "https://github.com/karinarocha",
    type: "iconify",
    icon: "mdi:github",
    external: true,
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__decor contact__decor--one"></div>
      <div className="contact__decor contact__decor--two"></div>

      <div className="contact__container">
        {/* =========================
            INTRO
        ========================== */}

        <div className="contact__intro">
          <span className="contact__eyebrow">
            LET&apos;S CONNECT
          </span>

          <h2 className="contact__title">
            LET&apos;S BUILD
            <br />
            SOMETHING <span>GOOD</span>
            <br />
            TOGETHER.
          </h2>

          <p className="contact__description">
            Whether it&apos;s about software quality,
            test automation, a new opportunity or just
            a good tech conversation — feel free to reach out.
          </p>

          <div className="contact__signature">
            <span>Good things start with a hello.</span>

            <Heart
              size={15}
              strokeWidth={1.8}
              fill="currentColor"
            />
          </div>
        </div>

        {/* =========================
            CONTACT LINKS
        ========================== */}

        <div className="contact__content">
          <div className="contact__card-list">
            {contactLinks.map((item) => {
              const LucideIcon =
                item.type === "lucide"
                  ? item.icon
                  : null;

              return (
                <a
                  className="contact__card"
                  href={item.href}
                  key={item.name}
                  target={
                    item.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.external
                      ? "noreferrer"
                      : undefined
                  }
                >
                  <div className="contact__card-icon">
                    {item.type === "iconify" ? (
                      <Icon
                        icon={item.icon}
                        width="24"
                        height="24"
                      />
                    ) : (
                      <LucideIcon
                        size={23}
                        strokeWidth={1.8}
                      />
                    )}
                  </div>

                  <div className="contact__card-info">
                    <span className="contact__card-label">
                      {item.name}
                    </span>

                    <span className="contact__card-value">
                      {item.value}
                    </span>
                  </div>

                  <div className="contact__card-arrow">
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>
                </a>
              );
            })}
          </div>

          {/* =========================
              FINAL MESSAGE
          ========================== */}

          <div className="contact__message">
            <div className="contact__message-line"></div>

            <p>
              Always open to learning,
              <br />
              connecting and building
              <br />
              better experiences.
            </p>

            <span className="contact__message-symbol">
              ✦
            </span>
          </div>
        </div>
      </div>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="contact__footer">
        <span>© 2026 Karina Rocha</span>

        <span className="contact__footer-center">
          Quality • Automation • Curiosity
        </span>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}

export default Contact;