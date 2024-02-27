import React from 'react';
import './style.scss';
import cardback from '../../assets/cardback.png';
import cardfront from '../../assets/card.png';
import bluecard from '../../assets/bluecard.png';
import cardmatch from '../../assets/Group 157.png'
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';

const InstructionCard = () => {
  return (
    <div className='instructionCard'>
        <div className="card">
            <img src={cardback} alt="small Cards" className='smallCardsback'/>
            <img src={cardfront} alt="small Cards" className='smallCardsfront'/>
            <div className="content">
                <p>Select a pink card.</p>
                <p className='lastPara'>It has images.</p>
            </div>
            <img src={one} alt="" className='numberImg'/>
        </div>
        <div className="card">
        <img src={bluecard} alt="small Cards" className='smallCardsback'/>
            <div className="content">
                <p>Select a blue card.</p>
                <p className='lastPara'>It has alphabets.</p>
            </div>
            <img src={two} alt="" className='numberImg'/>
        </div>
        <div className="card">
        <img src={cardmatch} alt="small Cards" className='smallCardsback' style={{width:'220px'}}/>
            <div className="content">
                <p className='lastPara'>If they’re same</p>
                <p>Its a match !</p>
                <p className='lastPara'>otherwise retry :(</p>
            </div>
            <img src={three} alt="" className='numberImg'/>
        </div>
    </div>
  )
}

export default InstructionCard