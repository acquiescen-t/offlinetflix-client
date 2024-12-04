import { useEffect, useState } from "react";
import api from "../api";
import Card from "./Card";
import { Film } from "../model/Film";

const BrowseFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);
  useEffect(() => {
    api
      .get("/films/get-random/4")
      .then((response) => {
        setFilms(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container pb-5">
      <div className="browse-by py-2">
        <a href="/films">Browse By Films</a>
      </div>
      <div className="row g-5">
        {films.map((item) => (
          <div key={item.id} className="col-3">
            <Card film={item}></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseFilms;
