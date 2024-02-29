// // PinkCards.js
// import React, { useState, useEffect } from "react";
// import "./style.scss";
// import pinkCard from "../../assets/cardback.png";
// import { combinedCardsArray } from "../../pages/game/Data";

// const PinkCards = () => {
//   const [selectedEmojis, setSelectedEmojis] = useState([]);
//   const [flippedCards, setFlippedCards] = useState(Array(6).fill(false));

//   useEffect(() => {
//     const shuffledEmojis = combinedCardsArray.sort(() => 0.5 - Math.random());
//     // const selected = shuffledEmojis.slice(0, 6);
//     console.log('shuffledEmojis',shuffledEmojis)
//     setSelectedEmojis(shuffledEmojis);
//   }, []);

//   const handleCardClick = (index) => {
//     // console.log(index);
//     if (activeCardType === 'pink' && !disabledCards[index] && !matchedCards.includes(selectedEmojis[index].id)) {
//       const newFlippedCards = [...flippedCards];
//       newFlippedCards[index] = !newFlippedCards[index];
//       setFlippedCards(newFlippedCards);
//       pinkHandler(index, newFlippedCards[index]);
//       onPinkCardClick(index, newFlippedCards[index]);
//       // handleMatch(selectedEmojis[index].id, 'pink'); 
//     }
//   };

//   return (
//     <div className="flip-cards">
//       {selectedEmojis.map((emoji, index) => (
//         <div
//           className={`flip-card ${flippedCards[index] ? "flipped" : ""}`}
//           onClick={() => handleCardClick(index)}
//           key={emoji.id}
//           // style={{ pointerEvents: disabledCards[index] ? "none" : "auto" }}
//         >
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//               <img src={pinkCard} alt="Avatar" />
//             </div>
//             <div className="flip-card-back">
//               <span className="emoji" key={emoji.id}>
//                 {emoji.image}
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PinkCards;
