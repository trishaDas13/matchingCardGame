import React from 'react';
import './style.scss';
import background from '../../assets/image 5.png';
import monkey from '../../assets/Group 126.png';
import button from '../../assets/Group 123.png';
import { useNavigate } from "react-router-dom";

const StartPage = () => {
    const navigate = useNavigate();
  return (
    <div className="startPg">
        <div className="background">
            <img src={background} alt="bg" className='backImg'/>
        </div>
        <div className="store_monkey">
          <img src={monkey} alt="monkey" className='monkeyImg'  />
          <div className="convo">
          <p>Welcome Kiddo !! </p>
        </div>
        </div>
        <button onClick={() => navigate('/next')}className="nextBtn">
            <img src={button} alt="startButton" />
        </button>
        
    </div>
  )
}

export default StartPage;