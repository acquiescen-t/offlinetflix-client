import { useEffect, useState } from "react";
import { Film } from "../model/Film";
import internalApi from "../InternalApi";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import Card from "../components/Card";
import Config from "../Config";

const WatchFilm = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;
  var filmId = pathname.replaceAll("/films/", "");

  const [film, setFilm] = useState<Film>();
  useEffect(() => {
    internalApi
      .get("/films/id/".concat(filmId))
      .then((response) => {
        setFilm(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  var filmPath = film?.directoryPath
    .replaceAll("G:\\Movies\\", "http://localhost:8081/")
    .concat("/")
    .concat(film?.filmPath)
    .replaceAll(" ", "%20");
  console.log(film);

  return (
    <div id="film-page" className="film-page ps-4">
      <div className="player-wrapper row col-12 mb-3">
        <ReactPlayer
          className="react-player"
          controls={true}
          url={filmPath}
          width="100%"
          height="100%"
        />
      </div>
      <div className="panel-wrapper card card-body">
        <div id="film-page" className="row p-4">
          <div className="col-5 title-synopsis-container">
            <div className="film-title pb-4">
              <h2>{`${film?.name} (${film?.releaseYear.toString()})`}</h2>
            </div>
            <div className="film-synopsis pb-4">
              <p>{film?.synopsis}</p>
            </div>
            <div className="film-sync">
              <a
                href={`${Config.webUrl}/films/${film?.id}/sync`}
                className="btn btn-primary"
              >
                Sync
              </a>
            </div>
          </div>
          <div className="col-7 genre-star-container">
            <div className="genre-container mb-3">
              <h4>GENRES</h4>
              {film?.genresOfFilm
                .sort((g1, g2) => {
                  if (g1.name > g2.name) {
                    return 1;
                  }
                  if (g1.name < g2.name) {
                    return -1;
                  }

                  return 0;
                })
                .map((genre) => (
                  <a
                    key={genre.id}
                    href={"/genres/".concat(genre.name)}
                    className="badge text-bg-primary"
                  >
                    {genre.name}
                  </a>
                ))}
            </div>

            <div className="star-container row g-2">
              <h4>STARS</h4>
              {film?.starsOfFilm.map((item) => (
                <div key={item.id} className="col-3">
                  <Card star={item}></Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchFilm;
