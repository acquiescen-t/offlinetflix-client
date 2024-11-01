import Card from "../components/Card";
import { Star } from "../model/Star";

const Stars = () => {
  var stars = Star.GenerateStars();
  return (
    <>
      <div className="container pt-5">
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
          <div className="col-3">
            <Card popover={false} star={stars[4]}></Card>
          </div>
          <div className="col-3">
            <Card popover={false} star={stars[5]}></Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stars;
