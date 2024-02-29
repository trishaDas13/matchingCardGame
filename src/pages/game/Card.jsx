import React, { useState, useEffect } from 'react';
import './card.scss'; // Import SCSS file
import { combinedCardsArray } from "./Data";
import pinkCard from '../../assets/cardback.png';
import blueCard from '../../assets/bluecard.png';
import { nanoid } from 'nanoid';

const Card = () => {
  const [pinkCards, setPinkCards] = useState([]);
  const [blueCards, setBlueCards] = useState([]);
  const [clickedPinkCard, setClickedPinkCard] = useState(null);
  const [clickedBlueCard, setClickedBlueCard] = useState(null);

  const shuffleCards = (cardsArray) => {
    // Fisher-Yates Shuffle Algorithm
    for (let i = cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
    return cardsArray;
  };

  useEffect(() => {
    // Initialize the cards
    setPinkCards(shuffleCards(combinedCardsArray))
    setBlueCards(shuffleCards(combinedCardsArray))
  }, []);

  const handlePinkCardClick = (index) => {
    setClickedPinkCard(index);
  };

  const handleBlueCardClick = (index) => {
    setClickedBlueCard(index);
  };

  return (
    <div className="card-game">
      <div className="cards_grid">
        {pinkCards.map((item, index) => {
          return (
            <div className={`singleCard ${clickedPinkCard === index ? 'flipped' : ''}`} key={nanoid()} onClick={() => handlePinkCardClick(index)}>
              <div className="cardFront">
                <img src={pinkCard} alt="pink card" />
              </div>
              <div className="cardBack pinkcardback">
                <span>{item.image}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="cards_grid">
        {blueCards.map((item, index) => {
          return (
            <div className={`singleCard ${clickedBlueCard === index ? 'flipped' : ''}`} key={nanoid()} onClick={() => handleBlueCardClick(index)}>
              <div className="cardFront">
                <img src={blueCard} alt="blue card" />
              </div>
              <div className="cardBack">
                <span>{item.letter}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Card;
