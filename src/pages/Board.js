import React, { useState, useEffect, useRef } from 'react'
import Deck from './Deck';
import Score from './Score';
import Players from './Players';
import {Row, Container}  from 'react-bootstrap';


export default function Board({ cards, score, setScore, player, setPlayer, setGameOver }) {


  return (
  
    <Container >
    <Row className="justify-content-md-center">
    <Players/>
    </Row>
    <Row className="justify-content-md-center">
    <Score score={score} setScore = {setScore}/>
    </Row>
    <Row>
    <Deck cards={cards} score={score} setScore={setScore} player={player} setPlayer={setPlayer}  setGameOver={setGameOver} />
    </Row>
    </Container>
 
  );
}