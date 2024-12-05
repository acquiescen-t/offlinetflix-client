import { useEffect, useState } from "react";
import { Film } from "../model/Film";
import api from "../InternalApi";
import extApi from "../ExternalApi";
import config from "../Config";
import { useLocation, redirect } from "react-router-dom";
import { TMDBFilm } from "../model/TMDBFilm";

const Sync = () => {
  // 1. Fetch current Film
  const location = useLocation();
  const { hash, pathname, search } = location;
  var filmId = pathname.replaceAll("/films/", "").replaceAll("/sync", "");
  console.log(`filmId: ${filmId}`);

  const [currentFilm, setCurrentFilm] = useState<Film>();
  useEffect(() => {
    api
      .get(`/films/id/${filmId}`)
      .then((response) => setCurrentFilm(response.data))
      .catch((error) => console.error(error));
  }, []);

  //2. Call external API for information about current Film
  const [tmdbResponse, setTmdbResponse] = useState<TMDBFilm>();
  useEffect(() => {
    let url = `/3/search/movie?query=${currentFilm?.name.replaceAll(
      " ",
      "%20"
    )}&include_adult=true&page=1&year=${
      currentFilm?.releaseYear
    }&language=en-US`;

    extApi
      .get(url)
      .then((response) => {
        setTmdbResponse(response.data.results[0]);
        console.log(tmdbResponse);
      })
      .catch((err) => console.error(err));
  }, [currentFilm]);

  // 3. Update current Film based on information retrieved
  const [updatedFilm, setUpdatedFilm] = useState<Film>();
  useEffect(() => {
    api
      .put(`films/update-film/${filmId}`, tmdbResponse)
      .then((response) => setUpdatedFilm(response.data))
      .catch((err) => console.error(err));
  }, [tmdbResponse]);

  return (
    <div className="sync-page">
      <div className="sync-page-film-title">
        <h1>FILM NAME</h1>
        <p>
          {updatedFilm?.name} ({updatedFilm?.releaseYear})
        </p>
      </div>
      <div className="sync-page-film-genres">
        <h1>FILM GENRES</h1>
        {updatedFilm?.genresOfFilm.map((item) => (
          <div key={item.id} className="col-3">
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sync;
