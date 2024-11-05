import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

const BrowseFilms = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios
      .get("https://tiger-allowing-presumably.ngrok-free.app/api/v1/films", {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((response) => {
        setFilms(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Shuffle and take first 4 items
  let shuffled = films
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 4);

  return (
    <div className="container pb-5">
      <span className="browse-by">
        <a href="/films">Browse By Films</a>
      </span>
      <div className="row g-5">
        {shuffled.map((item) => (
          <div className="col-3">
            <Card popover={true} film={item}></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseFilms;
