import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Go to home">
        <span className="brand__logo">KR</span>

        <span className="brand__name">
          KARINA
          <br />
          ROCHA
        </span>
      </a>

      <nav className="navigation" aria-label="Main navigation">
        <a className="navigation__link navigation__link--active" href="#home">
          HOME
        </a>

        <a className="navigation__link" href="#about">
          ABOUT
        </a>

        <a className="navigation__link" href="#skills">
          SKILLS
        </a>

        <a className="navigation__link" href="#contact">
          CONTACT
        </a>
      </nav>
    </header>
  );
}

export default Header;