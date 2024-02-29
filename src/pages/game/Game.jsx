// Game.js
import React, { useState } from "react";
import "./style.scss";
import background from "../../assets/image 5.png";
import backBtn from "../../assets/Group 156.png";
import progressbanana from "../../assets/Group 155.png";
import yellowBanana from "../../assets/yellowBanana.png"
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Game = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  return (
    <div className="startPg">
      <div className="background">
        <img src={background} alt="bg" className="backImg" />
      </div>
      <div className="progress">
       <div className="progressBar" style={{width:`${(score/6)*100}%`}}></div>
       
        <img
          src={score === 6 ? yellowBanana : progressbanana}
          alt="progress banana"
          className="progressbanana"
        />
      </div>

      <div className="cardsHolder">
        <Card setScore={setScore} score={score}/>
      </div>

      <button onClick={() => navigate("/instruction")} className="backBtn">
        <img src={backBtn} alt="startButton" />
      </button>
    </div>
  );
};

export default Game;
