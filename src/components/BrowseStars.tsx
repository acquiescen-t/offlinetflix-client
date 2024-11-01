import Card from "../components/Card";
import { Star } from "../model/Star";

const BrowseStars = () => {
  var stars = Star.GenerateStars();

  return (
    <div className="container pb-5">
      <span className="browse-by">
        <a href="/stars">Browse By Stars</a>
      </span>
      <div className="row g-5">
        <div className="col-3">
          <Card popover={false} star={stars[0]}></Card>
        </div>
        <div className="col-3">
          <Card popover={false} star={stars[1]}></Card>
        </div>
        <div className="col-3">
          <Card popover={false} star={stars[2]}></Card>
        </div>
        <div className="col-3">
          <Card popover={false} star={stars[3]}></Card>
        </div>
      </div>
    </div>
  );
};

export default BrowseStars;
