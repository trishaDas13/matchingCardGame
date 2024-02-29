// Game.js
import React, { useState, useEffect } from "react";
import "./style.scss";
import background from "../../assets/image 5.png";
import backBtn from "../../assets/Group 156.png";
import progressBar from "../../assets/Rectangle 130.png";
import progressbanana from "../../assets/Group 155.png";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Game = () => {
  const navigate = useNavigate();

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
        <Card/>
      </div>

      <button onClick={() => navigate("/instruction")} className="backBtn">
        <img src={backBtn} alt="startButton" />
      </button>
    </div>
  );
};

export default Game;
