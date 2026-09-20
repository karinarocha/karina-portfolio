import "./Home.css";

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
                    ↓ Download CV
                </a>
            </div>

            <div className="home__visual">
                <div className="home__blob"></div>

                <p className="home__dream">
                    Same girl...
                    <br />
                    bigger dreams ♡
                </p>

                <div className="home__qa-card">
                    <strong>QA</strong>

                    <span className="home__qa-divider"></span>

                    <p>AUTOMATION</p>
                    <p>CONTINUOUS</p>
                    <p>LEARNING</p>

                    <span className="home__qa-heart">♡</span>
                </div>
            </div>
        </section>
    );
}

export default Home;