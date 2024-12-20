import { Genre } from "./Genre";
import { Star } from "./Star";

export class Film {
  id: string;
  genresOfFilm: Genre[];
  starsOfFilm: Star[];
  name: string;
  tmdb_id: number;
  releaseYear: number;
  directoryPath: string;
  imageUrl: string;
  backdropUrl: string;
  filmPath: string;
  synopsis: string;

  constructor(
    id: string,
    genresOfFilm: Genre[],
    starsOfFilm: Star[],
    name: string,
    tmdb_id: number,
    releaseYear: number,
    directoryPath: string,
    imageUrl: string,
    backdropUrl: string,
    filmPath: string,
    synopsis: string
  ) {
    this.id = id;
    this.genresOfFilm = genresOfFilm;
    this.starsOfFilm = starsOfFilm;
    this.name = name;
    this.tmdb_id = tmdb_id;
    this.releaseYear = releaseYear;
    this.directoryPath = directoryPath;
    this.imageUrl = imageUrl;
    this.backdropUrl = backdropUrl;
    this.filmPath = filmPath;
    this.synopsis = synopsis;
  }
}
