import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function Films() {
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

  return (
    <div className="container pt-5">
      <div className="row g-5">
        {films.map((item) => (
          <div className="col-3">
            <Card popover={true} film={item}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Films;
