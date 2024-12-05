import { useState, useEffect } from "react";
import api from "../InternalApi";
import Card from "./Card";
import { Star } from "../model/Star";

const BrowseStars = () => {
  const [stars, setStars] = useState<Star[]>([]);
  useEffect(() => {
    api
      .get("/stars")
      .then((response) => {
        setStars(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Shuffle and take first 4 items
  let shuffled = stars
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, Math.min(stars.length, 4));

  return (
    <div className="container pb-5">
      <div className="browse-by py-3">
        <a href="/stars">Browse By Stars</a>
      </div>
      <div className="row g-5">
        {shuffled.map((item) => (
          <div key={item.id} className="col-3">
            <Card star={item}></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseStars;
