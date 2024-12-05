import { useEffect, useState, useRef } from "react";
import { Film } from "../model/Film";
import api from "../InternalApi";
import errorImg from "../assets/web/poster-not-found.jpg";
import { Link } from "react-router-dom";
import config from "../Config";

declare var bootstrap: any;

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [featuredFilms, setFeaturedFilms] = useState<Film[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    api
      //.get("/films/get-random/4")
      .get("/films/get-by-most-genres/4")
      .then((response) => {
        setFeaturedFilms(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const carouselElement = carouselRef.current;
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

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      const carouselInstance = bootstrap.Carousel.getInstance(
        carouselRef.current
      );
      if (carouselInstance) {
        carouselInstance.pause();
      }
    }
  };
  const handleMouseLeave = () => {
    if (carouselRef.current) {
      const carouselInstance = bootstrap.Carousel.getInstance(
        carouselRef.current
      );
      if (carouselInstance) {
        carouselInstance.cycle();
      }
    }
  };

  return (
    <div id="hero" className="hero px-5 row g-5">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade col-9"
        data-bs-ride="carousel"
        data-bs-pause="hover"
        ref={carouselRef}
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
      </div>
      <div
        className="carousel-description col-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="carousel-film-name-link py-2">
          <Link to={`${config.webUrl}/films/${featuredFilms[activeSlide]?.id}`}>
            {featuredFilms[activeSlide]?.name}
          </Link>
        </div>
        <div className="carousel-film-synopsis">
          <p>{featuredFilms[activeSlide]?.synopsis}</p>
        </div>
        <div className="carousel-film-lists row g-1">
          <div className="carousel-film-genres col-6">
            <div className="genre-header">
              <h3>GENRES</h3>
            </div>
            <div className="genre-list">
              <ul>
                {featuredFilms[activeSlide]?.genresOfFilm
                  .sort((g1, g2) => {
                    if (g1.name > g2.name) {
                      return 1;
                    }
                    if (g1.name < g2.name) {
                      return -1;
                    }

                    return 0;
                  })
                  .map((genre) => (
                    <li key={genre.id}>
                      <a
                        href={"/genres/".concat(genre.name)}
                        className="badge text-bg-primary"
                      >
                        {genre.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="carousel-film-stars col-6">
            <div className="star-header">
              <h3>STARS</h3>
            </div>
            <div className="invisible-scrollbar star-list">
              <ul>
                {featuredFilms[activeSlide]?.starsOfFilm.map((star) => (
                  <li key={star.id}>
                    <Link
                      to={`/stars/${star.name
                        .replaceAll(" ", "-")
                        .toLowerCase()}`}
                    >
                      {star.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
