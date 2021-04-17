  
import React, { useState, useEffect, useRef } from 'react'
import Deck from './Deck';
import Score from './Score';


export default function Board({ cards, score, setScore }) {


  return (
  
    <div className = "card-grid">
    <Score score={score} setScore = {setScore}/>
    <Deck cards={cards} score={score} setScore={setScore}/>
    
    </div>
 
  );
}