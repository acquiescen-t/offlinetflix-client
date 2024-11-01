import Card from "./Card";
import { Film } from "../model/Film";

const BrowseFilms = () => {
  var films = Film.GenerateFilms();

  return (
    <div className="container pb-5">
      <span className="browse-by">
        <a href="/films">Browse By Films</a>
      </span>
      <div className="row g-5">
        <div className="col-3">
          <Card popover={false} film={films[0]}></Card>
        </div>
        <div className="col-3">
          <Card popover={false} film={films[1]}></Card>
        </div>
        <div className="col-3">
          <Card popover={false} film={films[2]}></Card>
        </div>
        <div className="col-3">
          <Card popover={false} film={films[3]}></Card>
        </div>
      </div>
    </div>
  );
};

export default BrowseFilms;
