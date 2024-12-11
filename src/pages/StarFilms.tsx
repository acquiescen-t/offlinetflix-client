import Card from "../components/Card";
import api from "../InternalApi";
import { useState, useEffect } from "react";
import { Film } from "../model/Film";
import { useParams } from "react-router-dom";

const StarFilms = () => {
  let { starName } = useParams();

  const [films, setFilms] = useState<Film[]>([]);
  useEffect(() => {
    let url = `/films/search/star-name/${starName}`;
    api
      .get(url)
      .then((response) => {
        setFilms(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <div className="page-header text-uppercase fs-5">
          <h3>{starName?.replaceAll("-", " ").concat(" FILMS")}</h3>
        </div>
        <div className="row g-5">
          {films.map((item) => (
            <div key={item.id} className="col-3">
              <Card film={item}></Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StarFilms;
