import { useEffect, useState } from "react";
import api from "../InternalApi";
import Card from "./Card";
import { Genre } from "../model/Genre";

const BrowseGenres = () => {
  // Find all genres
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

  // Randomly select 4 unique genres
  var randomGenres = genres
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, Math.min(genres.length, 4));

  // Generate component featuring said genres
  return (
    <div className="container pb-5">
      <div className="browse-by py-3">
        <a href="/genres">Browse By Genres</a>
      </div>
      <div className="row g-5">
        {randomGenres.map((item) => (
          <div key={item.name} className="col-3">
            <Card genre={item}></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseGenres;
