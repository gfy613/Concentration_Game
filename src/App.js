import React, { useState, useEffect } from "react";
import Board from "./pages/Board";
import GameOver from "./pages/GameOver";
import "./App.css"
import auburn from "./images/auburn.jpg"
import usc from "./images/usc.jpg"
import clemson from "./images/clemson.jpg"
import florida from "./images/florida.jpg"
import georgia from "./images/georgia.jpg"
import southCarolina from "./images/southCarolina.jpg"
import texas from "./images/texas.jpg"
import floridaState from "./images/floridaState.jpg"
import lsu from "./images/lsu.jpg"
import ecu from "./images/ecu.jpg"

function App() {

  const [cards, setCards] = useState([])
  const [score, setScore] = useState([0, 0])
  const [player, setPlayer] = useState(true)
  const [gameOver, setGameOver] = useState(false)


  useEffect(() => {
    let cardDeck = pairOfCardDeck
    let shuffleCardDeck = shuffle(cardDeck)
    setCards(shuffleCardDeck)

  }, [gameOver]

  )

  const shuffle = array => {
    console.log("Shuffle")
    for (let i = array.length - 1; i > 0; i--) {
      let newIndex = Math.floor(Math.random() * (i + 1))
      let oldValue = array[newIndex]
      array[newIndex] = array[i]
      array[i] = oldValue

    }
    return array;
  }



  return (
    <div className= "Bckcolor">
      {gameOver &&<GameOver score={score} setGameOver={setGameOver} setScore={setScore}/>}
      {!gameOver && <Board cards={cards} setCards={setCards} score={score} setScore={setScore} player={player} setPlayer={setPlayer} setGameOver={setGameOver} />}
    </div>
  );
}


const cardDeck = [
  { name: 'auburn', src: auburn,  matchSet: 1 },
  { name: 'usc', src: usc , matchSet: 2 },
  { name: 'clemson', src: clemson ,matchSet: 3 },
  { name: 'florida', src: florida ,matchSet: 4 },
  { name: 'georgia', src: georgia , matchSet: 5 },
  { name: 'southCarolina',src: southCarolina , matchSet: 6 },
  { name: 'texas', src: texas ,matchSet: 7 },
  { name: 'floridaState', src: floridaState , matchSet: 8 },
  { name: 'lsu', src: lsu ,matchSet: 9 },
  { name: 'ecu', src: ecu , matchSet: 10 }
]

const pairOfCardDeck = [...cardDeck, ...cardDeck]
export default App;
