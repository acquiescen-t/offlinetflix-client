import Card from "../components/Card";
import { Genre } from "../model/Genre";

const BrowseGenres = () => {
  var genres = Genre.GenerateGenres();

  return (
    <div className="container pb-5">
      <span className="browse-by">
        <a href="/genres">Browse By Genres</a>
      </span>
      <div className="row g-5">
        <div className="col-3">
          <Card popover={false} genre={genres[0]}></Card>
        </div>
        <div className="col-3">
          <Card popover={false} genre={genres[1]}></Card>
        </div>
        <div className="col-3">
          <Card popover={false} genre={genres[2]}></Card>
        </div>
        <div className="col-3">
          <Card popover={false} genre={genres[3]}></Card>
        </div>
      </div>
    </div>
  );
};

export default BrowseGenres;
