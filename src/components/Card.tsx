import { Film } from "../model/Film";
import { Genre } from "../model/Genre";
import { Star } from "../model/Star";
import errorImg from "../assets/web/poster-not-found.jpg";
import { useState, useEffect } from "react";
import api from "../api";

declare var bootstrap: any;

interface CommonProps {
  film?: Film;
  genre?: Genre;
  star?: Star;
}

interface FilmProps {
  film: Film;
}

interface GenreProps {
  genre: Genre;
}

interface StarProps {
  star: Star;
}

type Props = (FilmProps | GenreProps | StarProps) & CommonProps;

const Card = (props: Props) => {
  if (props.film != null) {
    useEffect(() => {
      const popoverTriggerList = document.querySelectorAll(
        '[data-bs-toggle="popover"]'
      );
      const popoverList = [...popoverTriggerList].map(
        (popoverTriggerEl) =>
          new bootstrap.Popover(popoverTriggerEl, {
            sanitize: false,
            html: true,
          })
      );

      return () => {
        popoverList.forEach((popover) => popover.dispose());
      };
    }, []);

    let titleDisplay = props.film.name + " (" + props.film.releaseYear + ")";

    let popoverContent = GetAccordion(props.film);

    return (
      <div
        role="button"
        className="card-btn"
        data-bs-toggle="popover"
        data-bs-title={titleDisplay}
        data-bs-content={popoverContent}
        data-bs-custom-class="card-popover"
      >
        <div className="index card">
          <img
            src={props.film.imageUrl}
            className="card-img-top mx-auto d-block"
            alt="imageUrl"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = errorImg;
            }}
          />
          <div className="index card-body">
            <h6 className="index card-title">
              <a className="stretched-link">{titleDisplay}</a>
            </h6>
          </div>
        </div>
      </div>
    );
  }

  if (props.genre != null) {
    const [filmsMatchingGenre, setFilmsMatchingGenre] = useState<Film[]>([]);
    useEffect(() => {
      api
        .get("/films/search/genre-name/".concat(props.genre!.name))
        .then((response) => {
          setFilmsMatchingGenre(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    // Randomly select 1 film to be displayed
    let shuffled = filmsMatchingGenre
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, Math.min(filmsMatchingGenre.length, 1));

    var imageUrl = shuffled.length == 1 ? shuffled.at(0)?.imageUrl : errorImg;
    var name = props.genre.name;
    var redirect = "/genres/".concat(name);

    return (
      <>
        <div role="button" className="card-btn">
          <div className="index card">
            <img
              src={imageUrl}
              className="card-img-top mx-auto d-block"
              alt="imageUrl"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = errorImg;
              }}
            />
            <div className="index card-body">
              <h6 className="index card-title">
                <a className="stretched-link" href={redirect}>
                  {name}
                </a>
              </h6>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (props.star != null) {
    imageUrl = props.star.imageUrl;
    name = props.star.name;

    return (
      <>
        <div role="button" className="card-btn">
          <div className="index card">
            <img
              src={imageUrl}
              className="card-img-top mx-auto d-block"
              alt="imageUrl"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = errorImg;
              }}
            />
            <div className="index card-body">
              <h6 className="index card-title">
                <a className="stretched-link">{name}</a>
              </h6>
            </div>
          </div>
        </div>
      </>
    );
  }
};

function GetAccordion(film: Film): string {
  let accordion = '<div class="accordion" id="popoverAccordion">';
  accordion = accordion
    .concat('<div class="accordion-item">')
    .concat('<h2 class="accordion-header">')
    .concat('<button class="accordion-button')
    .concat(film.genresOfFilm.length > 3 ? ' collapsed"' : '"')
    .concat(
      ' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded='
    )
    .concat(film.genresOfFilm.length > 3 ? '"false"' : '"true"')
    .concat(' aria-controls="collapseOne">')
    .concat("GENRES")
    .concat("</button></h2>")
    .concat('<div id="collapseOne" class="accordion-collapse collapse')
    .concat(film.genresOfFilm.length > 3 ? "" : " show")
    .concat('"><div class="accordion-body text-capitalize">');

  film.genresOfFilm.forEach(function (genre) {
    accordion = accordion
      .concat('<span><a href="/genres/'.concat(genre.name))
      .concat('"> ')
      .concat(genre.name)
      .concat(" </a></span><br>");
  });
  accordion = accordion.concat("</div></div></div>");

  accordion = accordion
    .concat('<div class="accordion-item">')
    .concat('<h2 class="accordion-header">')
    .concat('<button class="accordion-button')
    .concat(film.starsOfFilm.length > 3 ? ' collapsed"' : '"')
    .concat(
      ' type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded='
    )
    .concat(film.starsOfFilm.length > 3 ? '"false"' : '"true"')
    .concat(' aria-controls="collapseTwo">')
    .concat("STARS")
    .concat("</button></h2>")
    .concat('<div id="collapseTwo" class="accordion-collapse collapse')
    .concat(film.starsOfFilm.length > 3 ? "" : " show")
    .concat('"><div class="accordion-body">');

  film.starsOfFilm.forEach(function (star) {
    accordion = accordion.concat(
      "<span>".concat(star.name).concat("</span><br>")
    );
  });

  accordion = accordion.concat("</div></div></div>");

  accordion = accordion
    .concat('<div class="accordion-item">')
    .concat('<h2 class="accordion-header">')
    .concat(
      '<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">'
    )
    .concat("SYNOPSIS")
    .concat("</button></h2>")
    .concat('<div id="collapseThree" class="accordion-collapse collapse show">')
    .concat('<div class="accordion-body text-center text-balance">')
    .concat(film.synopsis)
    .concat('<br/><br/><a href="/films/')
    .concat(film.id)
    .concat('">Watch now</a>')
    .concat("</div></div></div></div>");
  return accordion;
}

export default Card;
