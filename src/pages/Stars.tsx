import { useEffect, useState } from "react";
import api from "../api";
import Card from "../components/Card";
import { Star } from "../model/Star";

const Stars = () => {
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
  });

  return (
    <>
      <div className="container pt-5">
        <div className="row g-5">
          {stars.map((item) => (
            <div key={item.id} className="col-3">
              <Card star={item}></Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stars;
