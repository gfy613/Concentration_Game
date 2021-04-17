import React, { useState, useEffect, useRef } from 'react'
import {Card, Button, Col}  from 'react-bootstrap';

export default function SingleCard({card,cardKey,flippedCount,setFlippedCount,flip,setFlip,firstCard, setFirstCard, removeCard,setRemoveCard, score, setScore, player, setPlayer}) {


console.log(card)
console.log(cardKey)

  const  onCardClick = async() => {
    console.log(flip)
    let updateFlip = [...flip] 
    updateFlip[cardKey]= true
    setFlip(updateFlip)
    setFlippedCount(flippedCount + 1)
  
    if (flippedCount === 0) {
      setFirstCard({id: cardKey, matchSet: card.matchSet})
      console.log("check2: " + cardKey)
      console.log("Check 2a: " + card.matchSet)
      console.log(flip)

    }
    
    else {
      if (firstCard.matchSet === card.matchSet){
        setTimeout(()=>{
        console.log("Its a match!!")
         let updateRemoveCard = [...removeCard]
         updateRemoveCard[firstCard.id] = true
         updateRemoveCard[cardKey] = true
         setRemoveCard(updateRemoveCard)
         setFlippedCount(0)
        //  let updateFlip = [flip]
      updateFlip[cardKey]= false
      updateFlip[firstCard.id]= false
      setFlip(updateFlip)
      setFirstCard({id:null,matchSet:null})
      let updateScore = [...score]
      if (player) {
          updateScore[0]++;
        }
      else {
          updateScore[1]++;
      } 
          setScore(updateScore)
        },1500)}

      else{
        setTimeout(() => {
        console.log("first: " + firstCard.id)
        console.log("sec: " + cardKey)
      // let updateFlip = [flip]
      updateFlip[cardKey]= false
      updateFlip[firstCard.id]= false
      setFlip(updateFlip)
      console.log("flip: " + flip)
      console.log("remove: " + removeCard)
      setFlippedCount(0)
      setFirstCard({id:null,matchSet:null})
      setPlayer(!player)
      },1500)}
  }}
 

  return ( 
    <Col md="auto">
    <Card style={{ width: '18rem' }} className="text-center">
      <Button>
      <Card.Body onClick = {onCardClick}>
        {!flip[cardKey] && removeCard[cardKey]  ? card.name : ''}
        {flip[cardKey] && !removeCard[cardKey]  ? card.name : ''}
        {!flip[cardKey] && !removeCard[cardKey]  ? cardKey : ''}
      </Card.Body>
      </Button>
      </Card> 
      </Col>
      
  )
}
