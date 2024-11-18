import { useEffect, useState } from "react";
import api from "../api";
import Card from "./Card";
import { Film } from "../model/Film";

const BrowseFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);
  useEffect(() => {
    api
      .get("/films")
      .then((response) => {
        setFilms(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Randomly select 4 films
  let shuffled = films
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, Math.min(films.length, 4));

  return (
    <div className="container pb-5">
      <div className="browse-by py-3">
        <a href="/films">Browse By Films</a>
      </div>
      <div className="row g-5">
        {shuffled.map((item) => (
          <div key={item.id} className="col-3">
            <Card film={item}></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseFilms;
