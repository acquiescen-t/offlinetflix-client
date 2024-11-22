import { useEffect, useState } from "react";
import { Film } from "../model/Film";
import api from "../api";
import errorImg from "../assets/web/poster-not-found.jpg";
import { Link } from "react-router-dom";
import config from "../Config";

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
    <div id="hero" className="hero row">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade col-8"
        data-bs-ride="carousel"
        data-bs-pause="hover"
      >
        <div className="carousel-inner">
          {featuredFilms.map((film, index) => (
            <div
              key={film.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="carousel-gradient"></div>
              <img
                src={`https://image.tmdb.org/t/p/w1920_and_h1080_bestv2/${film.backdropUrl}`}
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
      <div className="carousel-description col-3 ms-5">
        <Link
          className="carousel-film-name-link"
          to={`${config.webUrl}/films/${featuredFilms[activeSlide]?.id}`}
        >
          {featuredFilms[activeSlide]?.name}
        </Link>{" "}
        <br /> <br /> <p>{featuredFilms[activeSlide]?.synopsis}</p> <br />{" "}
        <div className="carousel-film-lists row pt-3">
          <div className="carousel-film-genres col-6">
            <h3>GENRES</h3>
            <ul>
              {featuredFilms[activeSlide]?.genresOfFilm.map((genre) => (
                <li key={genre.id}>
                  <Link to={`${config.webUrl}/genres/${genre.name}`}>
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="carousel-film-stars col-6">
            <ul>
              {featuredFilms[activeSlide]?.starsOfFilm.map((star) => (
                <li>
                  <Link to={`${config.webUrl}stars/${star.name}`}>
                    {star.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
