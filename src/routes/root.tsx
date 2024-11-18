import NavBar from "../global/NavBar";
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
