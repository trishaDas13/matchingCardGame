import React, { useState, useEffect } from 'react';
import './card.scss'; // Import SCSS file
import { combinedCardsArray } from "./Data";
import pinkCard from '../../assets/cardback.png';
import blueCard from '../../assets/bluecard.png';

const Card = ({score, setScore}) => {
  const [pinkCards, setPinkCards] = useState([]);
  const [blueCards, setBlueCards] = useState([]);
  const [clickedPinkCard, setClickedPinkCard] = useState(null);
  const [clickedBlueCard, setClickedBlueCard] = useState(null);
  const [pinkCardClicked, setPinkCardClicked] = useState(false);
 
  const [matchedCards, setMatchedCards] = useState([]);

  const shuffleCards = (array) => {
    if (!Array.isArray(array)) {
      throw new Error("Invalid input. Please provide a valid array.");
    }
    // Use Fisher-Yates algorithm for shuffling.
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    // Initialize the cards
    setPinkCards(shuffleCards([...combinedCardsArray]));
    setBlueCards(shuffleCards([...combinedCardsArray]));
  }, []);

  const handlePinkCardClick = (id) => {
    if (!pinkCardClicked) {
      setClickedPinkCard(id);
      setPinkCardClicked(true);
    }
  };

  const handleBlueCardClick = (id) => {
    if (pinkCardClicked && !matchedCards.includes(id)) {
      setClickedBlueCard(id);
      const pinkCardId = pinkCards.find(card => card.id === clickedPinkCard).id;
      const blueCardId = blueCards.find(card => card.id === id).id;
      if (pinkCardId === blueCardId) {
        setScore(score + 1);
        setTimeout(()=>{
          setMatchedCards([...matchedCards, id, clickedPinkCard]);
        }, 1000)
      } else {
        setTimeout(() => {
          setClickedPinkCard(null);
          setClickedBlueCard(null);
        }, 1000); // Delay before flipping back
      }
      setPinkCardClicked(false);
    }
  };

  return (
    <div className="card-game">
      <div className="cards_grid">
        {pinkCards.map((item) => (
          <div className={`singleCard ${clickedPinkCard === item.id ? 'flipped' : ''} ${matchedCards.includes(item.id) ? 'hidden' : ''}`} key={item.id} onClick={() => handlePinkCardClick(item.id)}>
            <div className="cardFront">
              <img src={pinkCard} alt="pink card" />
            </div>
            <div className="cardBack pinkcardback">
              <span>{item.image}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="cards_grid">
        {blueCards.map((item) => (
          <div className={`singleCard ${clickedBlueCard === item.id ? 'flipped' : ''} ${matchedCards.includes(item.id) ? 'hidden' : ''}`} key={item.id} onClick={() => handleBlueCardClick(item.id)}>
            <div className="cardFront">
              <img src={blueCard} alt="blue card" />
            </div>
            <div className="cardBack">
              <span>{item.letter}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
