import "./Home.css";
import karinaHome from "../../assets/images/karina-home.png";

function Home() {
  return (
    <section className="home" id="home">
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
           Download CV
        </a>
      </div>

      <div className="home__visual">
        <div className="home__portrait">
          <div className="home__blob">
            <img
              className="home__character home__character--inside"
              src={karinaHome}
              alt="Illustration of Karina Rocha"
            />
          </div>

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