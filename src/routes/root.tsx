import NavBar from "../global/NavBar";
import BrowseFilms from "../components/BrowseFilms";
import BrowseGenres from "../components/BrowseGenres";
import BrowseStars from "../components/BrowseStars";
import Hero from "../components/Hero";
import "../styles/App.css";
import { Outlet, Link } from "react-router-dom";

declare var bootstrap: any;

function Root() {
  return (
    <>
      <div className="main-page">
        <NavBar></NavBar>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Root;
