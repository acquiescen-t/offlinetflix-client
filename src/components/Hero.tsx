import { useEffect, useState } from "react";
import { Film } from "../model/Film";
import api from "../api";
import errorImg from "../assets/web/poster-not-found.jpg";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [featuredFilms, setFeaturedFilms] = useState<Film[]>([]);

  useEffect(() => {
    api
      .get("/films/get-random/4")
      .then((response) => {
        setFeaturedFilms(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const carouselElement = document.getElementById("heroCarousel");
    const handleSlideChange = (event: any) => {
      const newIndex = parseInt(event.to, 10);
      setActiveSlide(newIndex);
    };

    if (carouselElement) {
      carouselElement.addEventListener("slide.bs.carousel", handleSlideChange);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener(
          "slide.bs.carousel",
          handleSlideChange
        );
      }
    };
  }, []);

  return (
    <div className="hero row justify-content-md-center d-flex mb-5">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade col-3"
        data-bs-ride="carousel"
        data-bs-pause="hover"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner">
          {featuredFilms.map((film, index) => (
            <div
              key={film.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="carousel-gradient"></div>
              <img
                src={film.imageUrl}
                className="d-block w-100"
                alt="..."
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = errorImg;
                }}
              />
              <div className="carousel-label text-uppercase carousel-caption d-none d-md-block">
                <h5>{film.name}</h5>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="carousel-description col-3 mt-5">
        <h1>{featuredFilms[activeSlide]?.name}</h1>
        <p>{featuredFilms[activeSlide]?.synopsis}</p>
      </div>
    </div>
  );
};

export default Hero;
