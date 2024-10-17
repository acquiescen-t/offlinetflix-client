import GenreList from "./GenreList";
import StarList from "./StarList";

interface Props {
  posterUrl: string;
  title: string;
  year: number;
}

const Card = ({ posterUrl, title, year }: Props) => {
  return (
    <>
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top rounded mx-auto d-block"
          alt="posterUrl"
        />
        <div className="card-body">
          <div className="card-title">
            <a href="#">
              {title} ({year})
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
