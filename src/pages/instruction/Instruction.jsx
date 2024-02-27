import React from 'react';
import "../startPage/style.scss";

import background from '../../assets/image 5.png';
import backBtn from '../../assets/Group 156.png'
import button from '../../assets/Group 127.png';
import progressBar from '../../assets/Rectangle 130.png';
import progressbanana from '../../assets/Group 155.png'
import { useNavigate } from "react-router-dom";
import InstructionCard from '../../components/instructionCard/InstructionCard';


const Instruction = () => {
  const navigate = useNavigate();
  return (
    <div className="startPg">
      <div className="background">
        <img src={background} alt="bg" className="backImg" />
      </div>
      <div className="progress">
        <img src={progressBar} alt="progress bar" className='progressbar'/>
        <img src={progressbanana} alt="progress banana" className='progressbanana'/>
      </div>

      <InstructionCard/>


      
      <button onClick={() => navigate('/game')} className="nextBtn">
        <img src={button} alt="startButton" />
      </button>
      <button onClick={() => navigate('/secondNext')} className="backBtn">
            <img src={backBtn} alt="startButton" />
      </button>
    </div>
  )
}

export default Instruction