import NavBar from "./global/NavBar";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import "./styles/App.css";

declare var bootstrap: any;

function App() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) =>
      new bootstrap.Popover(popoverTriggerEl, {
        sanitize: false,
        html: true,
      })
  );

  return (
    <>
      <div className={"main-page"}>
        <NavBar></NavBar>
        <Hero></Hero>
        <Grid></Grid>
      </div>
    </>
  );
}

export default App;
