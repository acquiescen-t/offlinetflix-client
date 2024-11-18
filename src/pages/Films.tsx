import { useState, useEffect } from "react";
import api from "../api";
import Card from "../components/Card";
import { Film } from "../model/Film";

function Films() {
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

  return (
    <div className="container pt-5">
      <div className="browse-by py-3">
        <h3>Browsing By Films</h3>
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
}

export default Films;
