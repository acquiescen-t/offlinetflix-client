import Sidebar from "./Sidebar";
import sidebarIcon from "../../../public/expand-sidebar.png";

function SidebarButton() {
  return (
    <>
      <p>
        <button
          className="btn btn-outline-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          <img src={sidebarIcon} alt="sidebar-icon" width="50"></img>
        </button>
      </p>
      <div className="collapse collapse-horizontal" id="collapseWidthExample">
        <div className="card card-body" style={{ width: 300 }}>
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  );
}

export default SidebarButton;

/*
return (
    <>
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              type="button"
              id="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#exampleNavComponents"
              aria-expanded="false"
              className="btn btn-outline-dark"
              onClick={() => {
                visible = !visible;
                setVisibility(visible);
                console.log("visibility: " + visible);
              }}
            >
              <i className="glyphicon glyphicon-align-center"></i>
              <span>
                <img src="expand-sidebar.png" width="30" height="30"></img>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
*/
