import React from "react";
import "../startPage/style.scss";
import background from '../../assets/image 5.png';
import monkey from '../../assets/Group 126.png';
import backBtn from '../../assets/Group 156.png'
import button from '../../assets/Group 124.png';
import { useNavigate } from "react-router-dom";


const NextPage = () => {
  const navigate = useNavigate();
  return (
    <div className="startPg">
      <div className="background">
        <img src={background} alt="bg" className="backImg" />
      </div>
      <div className="store_monkey">
          <img src={monkey} alt="monkey" className='monkeyImg' />
          <div className="convo">
          <p>Hi , I am Mizo ! and I love bananas  </p>
        </div>
        </div>
      <button onClick={() => navigate('/secondNext')} className="nextBtn">
        <img src={button} alt="startButton" />
      </button>
      <button onClick={() => navigate('/')} className="backBtn">
            <img src={backBtn} alt="startButton" />
      </button>
    </div>
  );
};

export default NextPage;
