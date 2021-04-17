  
import React, { useState, useEffect, useRef } from 'react'
import Deck from './Deck';
import Score from './Score';
import Players from './Players';

export default function Board({ cards, score, setScore, player, setPlayer }) {


  return (
  
    <div className = "card-grid">
    <Players/>
    <Score score={score} setScore = {setScore}/>
    <Deck cards={cards} score={score} setScore={setScore} player={player} setPlayer={setPlayer}/>
    
    </div>
 
  );
}