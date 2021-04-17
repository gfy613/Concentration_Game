  
import React, { useState, useEffect, useRef } from 'react'
import Deck from './Deck';


export default function Board({ cards }) {


  return (
  
    <div className = "card-grid">
    <Deck cards={cards}/>
 
    </div>
 
  );
}