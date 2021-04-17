import React, { useState, useEffect, useRef } from 'react'
import {Card, Button, Col}  from 'react-bootstrap';

export default function SingleCard({card,flippedCount,setFlippedCount,flip,setFlip,firstCard, setFirstCard, removeCard,setRemoveCard, score, setScore}) {




  const  onCardClick = async() => {
    console.log(flip)
    let updateFlip = [...flip] 
    updateFlip[card.id]= true
    setFlip(updateFlip)
    setFlippedCount(flippedCount + 1)
  
    if (flippedCount === 0) {
      setFirstCard({id: card.id, matchSet: card.matchSet})
      console.log("check2: " + card.id)
      console.log("Check 2a: " + card.matchSet)
      console.log(flip)

    }
    
    else {
      if (firstCard.matchSet === card.matchSet){
        setTimeout(()=>{
        console.log("Its a match!!")
         let updateRemoveCard = [...removeCard]
         updateRemoveCard[firstCard.id] = true
         updateRemoveCard[card.id] = true
         setRemoveCard(updateRemoveCard)
         setFlippedCount(0)
        //  let updateFlip = [flip]
      updateFlip[card.id]= false
      updateFlip[firstCard.id]= false
      setFlip(updateFlip)
      setFirstCard({id:null,matchSet:null})
      let updateScore = [...score]
          updateScore[0]++;
          setScore(updateScore)
        },1500)}

      else{
        setTimeout(() => {
        console.log("first: " + firstCard.id)
        console.log("sec: " + card.id)
      // let updateFlip = [flip]
      updateFlip[card.id]= false
      updateFlip[firstCard.id]= false
      setFlip(updateFlip)
      console.log("flip: " + flip)
      console.log("remove: " + removeCard)
      setFlippedCount(0)
      setFirstCard({id:null,matchSet:null})
      },1500)}
  }}
 

  return ( 
    <Col md="auto">
    <Card style={{ width: '18rem' }} className="text-center">
      <Button>
      <Card.Body onClick = {onCardClick}>
        {!flip[card.id] && removeCard[card.id]  ? card.name : ''}
        {flip[card.id] && !removeCard[card.id]  ? card.name : ''}
        {!flip[card.id] && !removeCard[card.id]  ? card.id : ''}
      </Card.Body>
      </Button>
      </Card> 
      </Col>
      
  )
}
