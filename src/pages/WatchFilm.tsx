import { useEffect, useState } from "react";
import { Film } from "../model/Film";
import api from "../api";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player/lazy";

function syncFilmData(): void {
  console.log("Syncing film data.");
}

const WatchFilm = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;

  var filmId = pathname.replaceAll("/films/", "");

  const [film, setFilm] = useState<Film>();
  useEffect(() => {
    api
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
            <h2>{`${film?.name} (${film?.releaseYear.toString()})`}</h2>
            <br />
            <p>{film?.synopsis}</p>
            <br />
            <a className="btn btn-primary" onClick={syncFilmData}>
              Sync
            </a>
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

            <div className="star-container">
              <h4>STARS</h4>
              {film?.starsOfFilm.map((star) => (
                <a
                  key={star.id}
                  href={"/stars/".concat(star.name)}
                  className="badge text-bg-primary"
                >
                  {star.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchFilm;
