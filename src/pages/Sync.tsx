import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../InternalApi";
import extApi from "../ExternalApi";
import { Film } from "../model/Film";
import { TMDBFilm } from "../model/TMDBFilm";
import { TMDBCredits } from "../model/TMDBCredits";

const Sync = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;
  var filmId = pathname.replaceAll("/films/", "").replaceAll("/sync", "");
  console.log(`filmId: ${filmId}`);

  const [completed, setCompleted] = useState<Boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (completed) navigate(-1);
  }, [completed, navigate]);
  useEffect(() => {
    api
      .get(`/films/id/${filmId}`)
      .then((response) => {
        const currentFilm: Film = response.data;
        let filmName = currentFilm.name.replaceAll(" ", "%20");
        let releaseYear = currentFilm.releaseYear;
        let url = `/3/search/movie?query=${filmName}&include_adult=true&page=1&year=${releaseYear}&language=en-US`;
        return extApi.get(url);
      })
      .then((resultsResponse) => {
        const tmdbFilm: TMDBFilm = resultsResponse.data.results[0];
        let url = `films/update-film/${filmId}`;
        return api.put(url, tmdbFilm);
      })
      .then((intResponseGenres) => {
        const updatedFilm: Film = intResponseGenres.data;
        let url = `/3/movie/${updatedFilm.tmdb_id}/credits?language=en-US`;
        return extApi.get(url);
      })
      .then((creditsResponse) => {
        const filmCredits: TMDBCredits = creditsResponse.data;
        let url = `films/${filmId}/update-stars`;
        return api.put(url, filmCredits);
      })
      .then((intResponseStars) => {
        const updatedStars: Film = intResponseStars.data;
        setCompleted(true);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="sync-page">
      <div className="container">
        <p>{completed ? "Completed!" : "Syncing..."}</p>
      </div>
    </div>
  );
};

export default Sync;
