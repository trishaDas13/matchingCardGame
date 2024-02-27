import React from 'react';
import "../startPage/style.scss";
import background from '../../assets/image 5.png';
import monkey from '../../assets/Group 126.png';
import backBtn from '../../assets/Group 156.png'
import button from '../../assets/Group 125.png';
import { useNavigate } from "react-router-dom";
import progressBar from '../../assets/Rectangle 130.png';
import progressbanana from '../../assets/Group 155.png'

const SecondNext = () => {
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
      <div className="store_monkey">
          <img src={monkey} alt="monkey" className='monkeyImg' />
          <div className="convo">
          <p>Can you help me get some ? 🤔</p>
        </div>
        </div>
      <button onClick={() => navigate('/instruction')} className="nextBtn">
        <img src={button} alt="startButton" />
      </button>
      <button onClick={() => navigate('/next')} className="backBtn">
            <img src={backBtn} alt="startButton" />
      </button>
    </div>
  )
}

export default SecondNext