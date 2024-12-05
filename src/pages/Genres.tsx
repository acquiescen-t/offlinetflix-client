import { useState, useEffect } from "react";
import api from "../InternalApi";
import Card from "../components/Card";
import { Genre } from "../model/Genre";

const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    api
      .get("/genres")
      .then((response) => {
        setGenres(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <div className="row g-5">
          {genres.map((item) => (
            <div key={item.id} className="col-3">
              <Card genre={item}></Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Genres;
