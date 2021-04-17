import React, {useState} from "react";
import Board from "./pages/Board";

function App() {

  const [cards,setCards]= useState(SAMPLE_DECK)


  return (
        <div>
        <Board cards={cards}/>
    </div>
  );
}


const SAMPLE_DECK = [
  {id:0, name:'A', matchSet:1},
  {id:1, name:'B', matchSet:2},
  {id:2, name:'C', matchSet:3},
  {id:3, name:'A', matchSet:1},
  {id:4, name:'B', matchSet:2},
  {id:5, name:'C', matchSet:3}
]

// const PAIR_OF_SAMPLE_DECKS = [...SAMPLE_DECK,...SAMPLE_DECK]
export default App;