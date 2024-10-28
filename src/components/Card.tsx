import GenreList from "./GenreList";
import StarList from "./StarList";

interface Props {
  posterUrl: string;
  title: string;
  year: number;
  genreList: string[];
  starList: string[];
  synopsis: string;
}

const Card = ({
  posterUrl,
  title,
  year,
  genreList,
  starList,
  synopsis,
}: Props) => {
  let titleDisplay = title + " (" + year + ")";

  let popoverContent = GetAccordion(genreList, starList, synopsis);

  return (
    <>
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
            src={posterUrl}
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
    </>
  );
};

function GetAccordion(
  genreList: string[],
  starList: string[],
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
      .concat('<span><a href="/genres/'.concat(genre))
      .concat('"> ')
      .concat(genre)
      .concat(" </a></span><br>");
  });
  accordion = accordion.concat("</div></div></div>");

  // some logic to add accordion for stars too
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
    accordion = accordion.concat("<span>".concat(star).concat("</span><br>"));
  });

  accordion = accordion.concat("</div></div></div>");
  // stars

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
    .concat("</div></div></div></div>");

  console.log("accordion: ".concat(accordion));
  return accordion;
}

export default Card;
