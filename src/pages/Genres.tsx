import Card from "../components/Card";
import { Genre } from "../model/Genre";

const Genres = () => {
  var genres = Genre.GenerateGenres();

  return (
    <>
      <div className="container pt-5">
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
          <div className="col-3">
            <Card popover={false} genre={genres[4]}></Card>
          </div>
        </div>
      </div>
    </>
  );
};
/*
const Genres2 = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row g-5">
          <div className="col-3">
            <Card
              popover={false}
              posterUrl={horror}
              title="Horror"
              year={0}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              popover={false}
              posterUrl={scifi}
              title="Science Fiction"
              year={0}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              popover={false}
              posterUrl={comedy}
              title="Comedy"
              year={0}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              popover={false}
              posterUrl={thriller}
              title="Thriller"
              year={0}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              popover={false}
              posterUrl={fantasy}
              title="Fantasy"
              year={0}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
};
*/
export default Genres;
