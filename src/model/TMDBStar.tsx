export class TMDBStar {
  adult: boolean;
  gender: string;
  id: number;
  known_for_department: number;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;

  constructor(
    adult: boolean,
    gender: string,
    id: number,
    known_for_department: number,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
  ) {
    this.adult = adult;
    this.gender = gender;
    this.id = id;
    this.known_for_department = known_for_department;
    this.name = name;
    this.original_name = original_name;
    this.popularity = popularity;
    this.profile_path = profile_path;
    this.cast_id = cast_id;
    this.character = character;
    this.credit_id = credit_id;
    this.order = order;
  }
}
