  
import React from 'react'
import SingleCard from './SingleCard';
import {CardDeck}  from 'react-bootstrap';

export default function Board({ cards }) {

  return (
  
    <div className = "card-grid">
    <CardDeck>
      {cards.map(card=>{
        return <SingleCard card={card} key ={card.id}/>
      })}
         </CardDeck>
    </div>
 
  );
}


