import "./Home.css";
import karinaHome from "../../assets/images/karina-home.png";

function Home() {
  return (
    <section className="home" id="home">
      {/* Decorative pink shape on the left */}
      <svg
        className="home__left-blob"
        viewBox="0 0 180 600"
        aria-hidden="true"
      >
        <path
          d="
            M0 0
            H42
            C118 28 160 78 132 126
            C108 165 72 177 70 215
            C68 250 96 276 82 311
            C69 343 45 356 60 392
            C74 427 114 443 115 486
            C116 530 78 572 43 600
            H0
            Z
          "
        />
      </svg>

      {/* Left content */}
      <div className="home__content">
        <p className="home__greeting">Hey, I am</p>

        <h1 className="home__name">
          KARINA <span>ROCHA</span>
        </h1>

        <h2 className="home__role">
          SOFTWARE TEST ENGINEER
        </h2>

        <p className="home__description">
          Quality-driven Software Test Engineer with experience in
          software testing and automation. I enjoy finding issues,
          improving processes and building reliable solutions while
          continuously expanding my skills in test automation.
        </p>

        <a
          className="home__cv-button"
          href="/cv/karina-rocha-cv.pdf"
          download
        >
          ↓ Download CV
        </a>
      </div>

      {/* Right visual */}
      <div className="home__visual">
        <div className="home__portrait">
          {/* Character clipped inside the pink shape */}
          <div className="home__blob">
            <img
              className="home__character home__character--inside"
              src={karinaHome}
              alt="Illustration of Karina Rocha"
            />
          </div>

          {/* Same image used for the pop-out effect */}
          <img
            className="home__character home__character--popout"
            src={karinaHome}
            alt=""
            aria-hidden="true"
          />
        </div>

        <p className="home__dream">
          Same girl...
          <br />
          bigger dreams ♡
        </p>

      </div>
    </section>
  );
}

export default Home;