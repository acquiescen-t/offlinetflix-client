import { Genre } from "./Genre";
import { Star } from "./Star";

export class Film {
  id: string;
  genresOfFilm: Genre[];
  starsOfFilm: Star[];
  name: string;
  releaseYear: number;
  directoryPath: string;
  imageUrl: string;
  filmPath: string;
  synopsis: string;

  constructor(
    id: string,
    genresOfFilm: Genre[],
    starsOfFilm: Star[],
    name: string,
    releaseYear: number,
    directoryPath: string,
    imageUrl: string,
    filmPath: string,
    synopsis: string
  ) {
    this.id = id;
    this.genresOfFilm = genresOfFilm;
    this.starsOfFilm = starsOfFilm;
    this.name = name;
    this.releaseYear = releaseYear;
    this.directoryPath = directoryPath;
    this.imageUrl = imageUrl;
    this.filmPath = filmPath;
    this.synopsis = synopsis;
  }
}
