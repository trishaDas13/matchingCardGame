import React, { useState, useEffect } from "react";
import "./style.scss";
import pinkCard from "../../assets/cardback.png";
import { nanoid } from "nanoid";

const PinkCards = ({ imagesArray, pinkHandeller }) => {
  const [selectedEmojis, setSelectedEmojis] = useState([]);
  const [flippedCards, setFlippedCards] = useState(Array(6).fill(false));

  //todo: Shuffle array and  make sure it doesn't duplicate emoji
  useEffect(() => {
    const shuffledEmojis = imagesArray.sort(() => 0.5 - Math.random());
    const selected = shuffledEmojis.slice(0, 6);
    setSelectedEmojis(selected);
  }, []);

  // Function to handle card click
  //   const handleCardClick = (index) => {
  //     const newFlippedCards = [...flippedCards];
  //     newFlippedCards[index] = !newFlippedCards[index];
  //     setFlippedCards(newFlippedCards);
  //     pinkHandeller(index);
  //   };

  //todo: render UI elements
  return (
    <div className="flip-cards">
      {selectedEmojis.map((emoji, index) => (
        <div className="flip-card"  onClick={() => pinkHandeller(index)}  key={nanoid()}>
            <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={pinkCard}
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

export default PinkCards;
