import GenreList from "./GenreList";
import StarList from "./StarList";

interface Props {
  posterUrl: string;
  title: string;
  year: number;
  theme: "dark" | "light";
}

const Card = ({ posterUrl, title, year, theme }: Props) => {
  let titleDisplay = title + " (" + year + ")";
  return (
    <>
      <div className={"card card-" + theme}>
        <img
          src={posterUrl}
          className="card-img-top rounded mx-auto d-block"
          alt="posterUrl"
        />
        <div className="card-body">
          <h6 className="card-title">
            <a href="#">{titleDisplay}</a>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Card;
