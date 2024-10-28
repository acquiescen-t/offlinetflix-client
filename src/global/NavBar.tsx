import logo from "../../src/assets/logo.png";
import search_icon from "../../src/assets/search-icon.png";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary navbar-accent">
        <div className="container-fluid">
          <a className="navbar-brand me-0 p-3" href="/">
            <img src={logo} alt="logo" />
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
            <ul className="navbar-nav me-auto p-2">
              <li className="nav-item p-3">
                <a className="nav-link" href="/films">
                  FILMS
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link" href="/genres">
                  GENRES
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link" href="/stars">
                  STARS
                </a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                <img className="search-icon" src={search_icon} alt="" />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
