import psychhorror from "../assets/genres/psychological-horror.jpg";
import psychthriller from "../assets/genres/psychological-thriller.jpg";
import drama from "../assets/genres/drama.jpg";
import fantasy from "../assets/genres/fantasy.jpg";
import horror from "../assets/genres/horror.jpg";
import mystery from "../assets/genres/mystery.jpg";
import scifi from "../assets/genres/science-fiction.jpg";
import thriller from "../assets/genres/thriller.jpg";
import comedy from "../assets/genres/comedy.jpg";

export class Genre {
  name: string;
  imageUrl: string;

  constructor(name: string, imageUrl: string) {
    this.name = name;
    this.imageUrl = imageUrl;
  }

  public static GenerateGenres(): Genre[] {
    var genres = [
      new Genre("Psychological Horror", psychhorror),
      new Genre("Psychological Thriller", psychthriller),
      new Genre("Drama", drama),
      new Genre("Fantasy", fantasy),
      new Genre("Horror", horror),
      new Genre("Mystery", mystery),
      new Genre("Science Fiction", scifi),
      new Genre("Thriller", thriller),
      new Genre("Comedy", comedy),
    ];

    return genres;
  }
}
