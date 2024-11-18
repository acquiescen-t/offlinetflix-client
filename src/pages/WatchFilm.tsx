import { useEffect, useState } from "react";
import { Film } from "../model/Film";
import api from "../api";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player/lazy";

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
    <div className="film-page row p-4">
      <div className="player-wrapper col-10">
        <ReactPlayer
          className="react-player"
          controls={true}
          url={filmPath}
          width="100%"
          height="100%"
        />
      </div>
      <div className="panel-wrapper card col-2">
        <div className="card-body">
          <div className="film-title-container">
            <h4>
              {film?.name
                .concat(" (")
                .concat(film.releaseYear.toString())
                .concat(")")}
            </h4>
          </div>
          <br />

          <div className="film-synopsis-container">
            <p className="card-text">{film?.synopsis}</p>
          </div>

          <br />
          <div className="genre-container">
            <h4>GENRES</h4>
            <ul>
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
                  <li key={genre.id}>
                    <a
                      href={"/genres/".concat(genre.name)}
                      className="badge text-bg-primary"
                    >
                      {genre.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <br />

          <div className="star-container">
            <h4>STARS</h4>
            <ul>
              {film?.starsOfFilm.map((star) => (
                <li>
                  <a
                    href={"/stars/".concat(star.name)}
                    className="badge text-bg-primary"
                  >
                    {star.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchFilm;
