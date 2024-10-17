import React from "react";

interface Props {
  stars: string[];
}

const StarList = ({ stars }: Props) => {
  return (
    <>
      <div>
        <ul className="list-group">
          {stars.map((item, index) => (
            <li className={"star-list"} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StarList;
