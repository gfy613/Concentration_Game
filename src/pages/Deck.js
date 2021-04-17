  
import React, { useState, useEffect, useRef } from 'react'
import SingleCard from './SingleCard';
import {CardDeck}  from 'react-bootstrap';

export default function Deck({ cards, score, setScore, player, setPlayer }) {

  const [flippedCount, setFlippedCount] = useState(0)
  let [flip,setFlip] = useState([false, false, false, false, false, false])
  let [firstCard,setFirstCard]= useState({index: null,matchSet: null})
  let [removeCard,setRemoveCard] = useState([false, false, false, false, false, false])
  return (
  
    <div className = "card-grid">
    <CardDeck>
      {cards.map((card,index)=>{
        return <SingleCard removeCard={removeCard} setRemoveCard ={setRemoveCard} firstCard={firstCard} setFirstCard={setFirstCard} card={card} key ={index} cardKey ={index} flippedCount={flippedCount} setFlippedCount={setFlippedCount} flip={flip} setFlip={setFlip} score={score} setScore={setScore} player={player} setPlayer={setPlayer} />
      })}
         </CardDeck>
    </div>
 
  );
}