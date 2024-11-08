import { Genre } from "./Genre";
import { Star } from "./Star";

export class Film {
  id: string;
  imageUrl: string;
  name: string;
  releaseYear: number;
  genresOfFilm: Genre[];
  starsOfFilm: Star[];
  synopsis: string;

  constructor(
    id: string,
    imageUrl: string,
    name: string,
    releaseYear: number,
    genresOfFilm: Genre[],
    starsOfFilm: Star[],
    synopsis: string
  ) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.name = name;
    this.releaseYear = releaseYear;
    this.genresOfFilm = genresOfFilm;
    this.starsOfFilm = starsOfFilm;
    this.synopsis = synopsis;
  }
}
