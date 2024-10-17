import NavBar from "./global/NavBar";
import Card from "./components/Card";
import Grid from "./components/Grid";
import "./styles/App.css";
import { createContext, useEffect, useState } from "react";
declare var bootstrap: any;
export const ThemeContext = createContext({});

function App() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme: any) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button
              type="button"
              className="btn btn-lg btn-danger"
              data-bs-toggle="popover"
              title="Popover title"
              data-bs-content="And here's some amazing content. It's very engaging. Right?"
            >
              Click to toggle popover
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
/*
function GetButton() {
  const onClickButton = (redirectUrl: string) => {
    console.log("Redirecting to " + redirectUrl);
  };

  return (
    <div className="button">
      <Button
        children={"Google"}
        color={"danger"}
        onClick={() => onClickButton("https://www.google.com")}
      ></Button>
    </div>
  );
}

function GetListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
*/
export default App;
