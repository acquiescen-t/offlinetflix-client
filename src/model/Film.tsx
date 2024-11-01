import image1 from "../assets/films/poster.jpg";
import image2 from "../assets/films/poster2.jpg";
import image3 from "../assets/films/poster3.jpg";
import image4 from "../assets/films/poster4.jpg";
import image5 from "../assets/films/poster5.jpg";
import image6 from "../assets/films/poster6.jpg";
import image7 from "../assets/films/poster7.jpg";
import image8 from "../assets/films/poster8.jpg";
import image9 from "../assets/films/poster9.jpg";
import image10 from "../assets/films/poster10.jpg";
import image11 from "../assets/films/poster11.jpg";
import image12 from "../assets/films/poster12.jpg";
import image13 from "../assets/films/poster13.jpg";

import { Genre } from "./Genre";
import { Star } from "./Star";

export class Film {
  imageUrl: string;
  name: string;
  year: number;
  genreList: Genre[];
  starList: Star[];
  synopsis: string;

  constructor(
    imageUrl: string,
    name: string,
    year: number,
    genreList: Genre[],
    starList: Star[],
    synopsis: string
  ) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.year = year;
    this.genreList = genreList;
    this.starList = starList;
    this.synopsis = synopsis;
  }

  public static GenerateFilms(): Film[] {
    var genres = Genre.GenerateGenres();
    var stars = Star.GenerateStars();

    var synopsis =
      "An ambitious young executive is sent to retrieve his company's CEO from an idyllic but mysterious \"wellness center\" at a remote location in the Swiss Alps, but soon suspects that the spa's treatments are not what they seem.";

    var aCureForWellness = new Film(
      image1,
      "A Cure for Wellness",
      2006,
      [
        genres[0],
        genres[1],
        genres[2],
        genres[3],
        genres[4],
        genres[5],
        genres[6],
        genres[7],
      ],
      [stars[0], stars[3], stars[6]],
      "An ambitious young executive is sent to retrieve his company's CEO from an idyllic but mysterious \"wellness center\" at a remote location in the Swiss Alps, but soon suspects that the spa's treatments are not what they seem."
    );

    var aQuietPlace = new Film(
      image2,
      "A Quiet Place",
      2018,
      [genres[2], genres[4], genres[6]],
      [stars[1], stars[2], stars[3]],
      "A family struggles for survival in a world invaded by alien creatures with ultra-sensitive hearing."
    );

    var aQuietPlacePartII = new Film(
      image3,
      "A Quiet Place Part II",
      2020,
      [genres[2], genres[4], genres[6], genres[7]],
      [stars[0], stars[2], stars[3]],
      "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path."
    );

    var aTaleOfTwoSisters = new Film(
      image4,
      "A Tale of Two Sisters",
      2003,
      [genres[2], genres[4], genres[5], genres[7]],
      [stars[11], stars[12], stars[13]],
      "After being institutionalized in a mental hospital, Su-mi reunites with her sister, Su-yeon, and they return to live at their country home. But strange events plague the house, leading to surprising revelations and a shocking conclusion."
    );

    var coherence = new Film(
      image5,
      "Coherence",
      2013,
      [genres[1], genres[4], genres[5], genres[6]],
      [stars[9], stars[10], stars[11]],
      "Strange things begin to happen when a group of friends gather for a dinner party on an evening when a comet is passing overhead."
    );

    var films = [
      aCureForWellness,
      aQuietPlace,
      aQuietPlacePartII,
      aTaleOfTwoSisters,
      coherence,
    ];

    return films;
  }
}
