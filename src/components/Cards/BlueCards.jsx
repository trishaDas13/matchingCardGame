// BlueCards.js
import React, { useState, useEffect } from "react";
import "./style2.scss";
import blueCard from "../../assets/bluecard.png";
import { combinedCardsArray } from "../../pages/game/Data";

const BlueCards = ({
  blueHandler,
  isEnabled,
  activeCardType,
  matchedCards,
  // handleMatch
}) => {
  const [selectedAlphas, setSelectedAlphas] = useState([]);
  const [flippedCards, setFlippedCards] = useState(Array(6).fill(false));

  useEffect(() => {
    const shuffledAlphas = combinedCardsArray.sort(() => 0.5 - Math.random());
    const selected = shuffledAlphas.slice(0, 6);
    setSelectedAlphas(selected);
  }, []);

  const handleCardClick = (index) => {
    const card = selectedAlphas[index];
    if (activeCardType === "blue" && !matchedCards.includes(card.id)) {
      const newFlippedCards = [...flippedCards];
      newFlippedCards[index] = !newFlippedCards[index];
      setFlippedCards(newFlippedCards);
      blueHandler(index, newFlippedCards[index]);
      // handleMatch(card.id, 'blue');
    }
  };

  return (
    <div className={`flip-bluecards ${isEnabled ? "" : "disabled"}`}>
      {selectedAlphas.map((alpha, index) => (
        <div
          className={`flip-card ${flippedCards[index] ? "flipped" : ""}`}
          key={alpha.id}
          onClick={() => handleCardClick(index)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={blueCard} alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <span className="emoji" key={alpha.id}>
                {alpha.letter}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlueCards;
