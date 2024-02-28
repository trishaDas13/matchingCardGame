import React, { useState, useEffect } from "react";
import "./style2.scss";
import blueCard from "../../assets/bluecard.png";
import { nanoid } from "nanoid";

const BlueCards = ({ lettersArray, blueHandeller }) => {
  const [selectedAlphas, setSelectedAlphas] = useState([]);

  //todo: Shuffle array and  make sure it doesn't duplicate emoji
  useEffect(() => {
    const shuffledAlphas = lettersArray.sort(() => 0.5 - Math.random());
    const selected = shuffledAlphas.slice(0, 6);
    setSelectedAlphas(selected);
  }, []);

  //todo: render UI elements
  return (
    <div className="flip-bluecards">
      {selectedAlphas.map((emoji, index) => (
        <div className="flip-card"  key={nanoid()}
        onClick={() => blueHandeller(index)}>
            <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={blueCard}
              alt="Avatar"
            />
          </div>
          <div className="flip-card-back">
            <span className="emoji" key={nanoid()}>
              {" "}
              {emoji}
            </span>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default BlueCards;

