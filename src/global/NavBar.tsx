import logo_light from "../../src/assets/logo-light-mode.png";
import logo_dark from "../../src/assets/logo-dark-mode.png";
import search_icon_light from "../../src/assets/search-icon-light-mode.png";
import search_icon_dark from "../../src/assets/search-icon-dark-mode.png";
import toggle_light from "../../src/assets/toggle-light-mode.png";
import toggle_dark from "../../src/assets/toggle-dark-mode.png";

interface Props {
  theme: "dark" | "light";
  setTheme: (item: string) => void;
}

const NavBar = ({ theme, setTheme }: Props) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <nav
        className={
          theme == "light"
            ? "navbar navbar-expand-lg bg-body-tertiary"
            : "navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark"
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={theme == "light" ? logo_light : logo_dark} alt="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/films">
                  FILMS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/genres">
                  GENRES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/stars">
                  STARS
                </a>
              </li>
            </ul>

            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <img
                src={theme == "light" ? search_icon_light : search_icon_dark}
                alt=""
              />
            </div>

            <div className="toggle-light-dark">
              <img
                src={theme == "light" ? toggle_dark : toggle_light}
                alt=""
                className="toggle-icon"
                onClick={() => toggle_mode()}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
