  
import React, { useState, useEffect, useRef } from 'react'
import SingleCard from './SingleCard';
import {CardDeck}  from 'react-bootstrap';

export default function Board({ cards }) {

  const [flippedCount, setFlippedCount] = useState(0)
  let [flip,setFlip] = useState([false, false, false, false, false, false])
  let [firstCard,setFirstCard]= useState({index: null,matchSet: null})
  let [removeCard,setRemoveCard] = useState([false, false, false, false, false, false])
  // function onCardClick2() {
  //   setFlippedCount(flippedCount + 1)

    
  // }
  return (
  
    <div className = "card-grid">
    <CardDeck>
      {cards.map(card=>{
        return <SingleCard removeCard={removeCard} setRemoveCard ={setRemoveCard} firstCard={firstCard} setFirstCard={setFirstCard} card={card} key ={card.id} flippedCount={flippedCount} setFlippedCount={setFlippedCount} flip={flip} setFlip={setFlip} />
      })}
         </CardDeck>
    </div>
 
  );
}


