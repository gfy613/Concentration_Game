import React from 'react'
import Deck from './Deck';
import Score from './Score';
import Players from './Players';
import {Row, Container}  from 'react-bootstrap';


export default function Board({ cards, score, setScore, player, setPlayer, setGameOver }) {


  return (
  
    <Container className= "Bckcolor">
    <Row className="justify-content-md-center">
    <Players/>
    </Row>
    <Row className="justify-content-md-center">
    <Score score={score} setScore = {setScore}/>
    </Row>
    <Row className="justify-content-md-center">
        <h3>
          {player  ? "Player 1 it's your turn":"Player 2 it's your turn"}
        </h3>
    </Row>
    <Row>
    <Deck cards={cards} score={score} setScore={setScore} player={player} setPlayer={setPlayer}  setGameOver={setGameOver} />
    </Row>
    </Container>
 
  );
}