import React from "react";

interface Props {
  genres: string[];
}

const GenreList = ({ genres }: Props) => {
  console.log("genres.<value>:" + genres.entries);

  return (
    <>
      <span className="badge rounded-pill text-bg-secondary">Horror</span>
      &nbsp;&nbsp;
      <span className="badge rounded-pill text-bg-secondary">Thriller</span>
    </>
  );
};

const GenreList2 = ({ genres }: Props) => {
  return (
    <>
      <div>
        <ul className="genre-list-group p-2 m-1">
          {genres.map((genre, index) => (
            <div className="badge rounded-pill text-bg-secondary">{genre}</div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GenreList;
