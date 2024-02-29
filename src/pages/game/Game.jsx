// Game.js
import React, { useState, useEffect } from "react";
import "./style.scss";
import background from "../../assets/image 5.png";
import backBtn from "../../assets/Group 156.png";
import progressBar from "../../assets/Rectangle 130.png";
import progressbanana from "../../assets/Group 155.png";
import { useNavigate } from "react-router-dom";
import PinkCards from "../../components/Cards/PinkCards";
import BlueCards from "../../components/Cards/BlueCards";
import { combinedCardsArray } from "./Data";

const Game = () => {
  const navigate = useNavigate();
  const [activeCardType, setActiveCardType] = useState('pink');
  const [isBlueEnabled, setIsBlueEnabled] = useState(false);
  const [disabledCards, setDisabledCards] = useState(Array(6).fill(false));
  const [openedPinkCardId, setOpenedPinkCardId] = useState(null);
  const [openedBlueCardId, setOpenedBlueCardId] = useState(null);
  const [matchedCards, setMatchedCards] = useState([]);

  //todo: pink handeller
  function pinkHandler(idx, isFlipped) {
    const card = combinedCardsArray[idx];
    if (!disabledCards[idx] && !matchedCards.includes(card.id)) {
      setOpenedPinkCardId(card.id);
      setIsBlueEnabled(true);
    }

    setActiveCardType('blue'); 

    if (isFlipped && !matchedCards.includes(card.id)) {
      setTimeout(() => {
        setOpenedPinkCardId(null);
        setIsBlueEnabled(false);
      }, 1000);
    }
  }

  //todo: blue handeller
  function blueHandler(idx, isFlipped) {
    const card = combinedCardsArray[idx];
    if (!matchedCards.includes(card.id)) {
      setOpenedBlueCardId(card.id);
    }
    setActiveCardType('pink');

    if (isFlipped && !matchedCards.includes(card.id)) {
      setTimeout(() => {
        setOpenedBlueCardId(null);
        setIsBlueEnabled(false);
      }, 1000);
    }
  }

  useEffect(() => {
    if (openedPinkCardId && openedBlueCardId) {

      const pinkCard = combinedCardsArray.find(card => card.id === openedPinkCardId);
      const blueCard = combinedCardsArray.find(card => card.id === openedBlueCardId);

      if (pinkCard.letter === blueCard.letter) {

        setMatchedCards(prevMatch => [...prevMatch, pinkCard.id, blueCard.id]);
        

        setDisabledCards(prev => {
          const updatedDisabled = [...prev];
          updatedDisabled[combinedCardsArray.findIndex(card => card.id === openedPinkCardId)] = true;
          updatedDisabled[combinedCardsArray.findIndex(card => card.id === openedBlueCardId)] = true;
          return updatedDisabled;
        });
      } else {
        setTimeout(() => {
          setOpenedPinkCardId(null);
          setOpenedBlueCardId(null);
        }, 1000);
      }
      setActiveCardType('pink');
    }
  }, [openedPinkCardId, openedBlueCardId]);


  useEffect(() => {
    if (matchedCards.length > 0) {
      setDisabledCards(prev => {
        const updatedDisabled = [...prev];
        matchedCards.forEach(id => {
          const index = combinedCardsArray.findIndex(card => card.id === id);
          updatedDisabled[index] = true;
        });
        return updatedDisabled;
      });
    }
  }, [matchedCards]);



  return (
    <div className="startPg">
     { console.log(matchedCards)}
      <div className="background">
        <img src={background} alt="bg" className="backImg" />
      </div>
      <div className="progress">
        <img src={progressBar} alt="progress bar" className="progressbar" />
        <img
          src={progressbanana}
          alt="progress banana"
          className="progressbanana"
        />
      </div>

      <div className="cardsHolder">
        <PinkCards
          pinkHandler={pinkHandler}
          onPinkCardClick={() => {}} 
          disabledCards={disabledCards} 
          activeCardType={activeCardType}
          matchedCards={matchedCards}
      
        />
        
        <BlueCards
          blueHandler={blueHandler}
          isEnabled={isBlueEnabled}
          activeCardType={activeCardType}
          matchedCards={matchedCards}
      
        />
      </div>

      <button onClick={() => navigate("/instruction")} className="backBtn">
        <img src={backBtn} alt="startButton" />
      </button>
    </div>
  );
};

export default Game;
