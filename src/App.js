import React, { useState, useEffect } from "react";
import Board from "./pages/Board";
import GameOver from "./pages/GameOver";

function App() {

  const [cards, setCards] = useState([])
  const [score, setScore] = useState([0, 0])
  const [player, setPlayer] = useState(true)
  const [gameOver, setGameOver] = useState(false)


  useEffect(() => {
    let cardDeck = PAIR_OF_SAMPLE_DECKS
    let shuffleCardDeck = shuffle(cardDeck)
    setCards(shuffleCardDeck)

  }, 'test'

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
    <div>
      {gameOver &&<GameOver score={score} />}
      {!gameOver && <Board cards={cards} setCards={setCards} score={score} setScore={setScore} player={player} setPlayer={setPlayer} setGameOver={setGameOver} />}
    </div>
  );
}


const SAMPLE_DECK = [
  { name: 'A', matchSet: 1 },
  { name: 'B', matchSet: 2 },
  { name: 'C', matchSet: 3 },
  // { name: 'D', matchSet: 4 },
  // { name: 'E', matchSet: 5 },
  // { name: 'F', matchSet: 6 },
  // { name: 'G', matchSet: 7 },
  // { name: 'H', matchSet: 8 },
  // { name: 'I', matchSet: 9 },
  // { name: 'J', matchSet: 10 }
]

const PAIR_OF_SAMPLE_DECKS = [...SAMPLE_DECK, ...SAMPLE_DECK]
export default App;
