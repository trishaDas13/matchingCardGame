import React, { useState, useEffect } from "react";
import "../startPage/style.scss";
import "./style.scss";
import background from "../../assets/image 5.png";
import backBtn from "../../assets/Group 156.png";
import button from "../../assets/Group 127.png";
import progressBar from "../../assets/Rectangle 130.png";
import progressbanana from "../../assets/Group 155.png";
import { useNavigate } from "react-router-dom";
import PinkCards from "../../components/Cards/PinkCards";
import BlueCards from "../../components/Cards/BlueCards";
import { nanoid } from "nanoid";

const Game = () => {
  const navigate = useNavigate();
  const lettersArray = ["A", "B", "C", "G", "M", "K"];
  const imagesArray = ["🍎", "🍌", "🍒", "🍇", "🥭", "🥝"];
  
  const[pinkMatch, setPinkMatch] = useState('');
  const[blueMatch, setBlueMatch] = useState('');

  //todo: making a combined array of object
  const combinedCardsArray = lettersArray.map((letter, index) => ({
    letter: letter,
    image: imagesArray[index],
    id : nanoid(4)
  }));
 
  //todo: click handeler on pink card
  function pinkHandeller(idx) {
    const cardEmoji = combinedCardsArray.find(card => card.image === imagesArray[idx]).id;
    // setPinkMatch(cardEmoji);
    // console.log(pinkMatch)
  };
    
  

  //todo: click handeler on blue card
  function blueHandeller(idx) {
    const cardLetter = combinedCardsArray.find(card => card.letter === lettersArray[idx]).id;
    setBlueMatch(cardLetter)
    console.log(blueMatch)
  }
  
  //todo: render UI elements
  return (
    <div className="startPg">
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
        <PinkCards imagesArray={imagesArray} pinkHandeller={pinkHandeller} />
        <BlueCards lettersArray={lettersArray} blueHandeller={blueHandeller} />
      </div>

      <button onClick={() => navigate("/instruction")} className="backBtn">
        <img src={backBtn} alt="startButton" />
      </button>
    </div>
  );
};

export default Game;
