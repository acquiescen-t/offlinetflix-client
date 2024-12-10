import { TMDBStar } from "./TMDBStar";

export class TMDBCredits {
  id: number;
  cast: TMDBStar [];

  constructor(
    id: number,
    cast: TMDBStar[]
  ) {
    this.id = id;
    this.cast = cast;
  }
}
