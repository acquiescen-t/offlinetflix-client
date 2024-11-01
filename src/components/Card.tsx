import { Film } from "../model/Film";
import { Genre } from "../model/Genre";
import { Star } from "../model/Star";

declare var bootstrap: any;

interface Props {
  popover: boolean;
  film?: Film;
  genre?: Genre;
  star?: Star;
}

const Card = ({ popover, film, star, genre }: Props) => {
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

  var imageUrl, name;
  if (film != null) {
    imageUrl = film.imageUrl;
    name = film.name;
  } else if (star != null) {
    imageUrl = star.imageUrl;
    name = star.name;
  } else if (genre != null) {
    imageUrl = genre.imageUrl;
    name = genre.name;
  }

  if (!popover) {
    return (
      <>
        <div role="button" className="card-btn">
          <div className="card">
            <img
              src={imageUrl}
              className="card-img-top mx-auto d-block"
              alt="posterUrl"
            />
            <div className="card-body">
              <h6 className="card-title">
                <a className="stretched-link">{name}</a>
              </h6>
            </div>
          </div>
        </div>
      </>
    );
  } else if (film != null) {
    let titleDisplay = name + " (" + film.year + ")";

    let popoverContent = GetAccordion(
      film.genreList,
      film.starList,
      film.synopsis
    );

    return (
      <div
        role="button"
        className="card-btn"
        data-bs-toggle="popover"
        data-bs-title={titleDisplay}
        data-bs-content={popoverContent}
        data-bs-custom-class="card-popover"
      >
        <div className="card">
          <img
            src={film.imageUrl}
            className="card-img-top mx-auto d-block"
            alt="posterUrl"
          />
          <div className="card-body">
            <h6 className="card-title">
              <a className="stretched-link">{titleDisplay}</a>
            </h6>
          </div>
        </div>
      </div>
    );
  }
};

function GetAccordion(
  genreList: Genre[],
  starList: Star[],
  synopsis: string
): string {
  let accordion = '<div class="accordion" id="popoverAccordion">';
  accordion = accordion
    .concat('<div class="accordion-item">')
    .concat('<h2 class="accordion-header">')
    .concat('<button class="accordion-button')
    .concat(genreList.length > 3 ? ' collapsed"' : '"')
    .concat(
      ' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded='
    )
    .concat(genreList.length > 3 ? '"false"' : '"true"')
    .concat(' aria-controls="collapseOne">')
    .concat("GENRES")
    .concat("</button></h2>")
    .concat('<div id="collapseOne" class="accordion-collapse collapse')
    .concat(genreList.length > 3 ? "" : " show")
    .concat('"><div class="accordion-body">');

  genreList.forEach(function (genre) {
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
    .concat(starList.length > 3 ? ' collapsed"' : '"')
    .concat(
      ' type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded='
    )
    .concat(starList.length > 3 ? '"false"' : '"true"')
    .concat(' aria-controls="collapseTwo">')
    .concat("STARS")
    .concat("</button></h2>")
    .concat('<div id="collapseTwo" class="accordion-collapse collapse')
    .concat(starList.length > 3 ? "" : " show")
    .concat('"><div class="accordion-body">');

  starList.forEach(function (star) {
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
    .concat(synopsis)
    .concat("</div></div></div>")
    .concat(
      '<div className="accordion-watch-now text-center"><a href="#">Watch now</a></div>'
    )
    .concat("</div>");

  console.log("accordion: ".concat(accordion));
  return accordion;
}

export default Card;
