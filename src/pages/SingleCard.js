import React, { useState, useEffect, useRef } from 'react'
import {Card, Button, Col}  from 'react-bootstrap';
import football from "../images/football.jpg"



export default function SingleCard({card,cardKey,flippedCount,setFlippedCount,flip,setFlip,firstCard, setFirstCard, removeCard,setRemoveCard, score, setScore, player, setPlayer, setGameOver }) {

  let [wait,setWait] = useState(false)


  const  onCardClick = async() => {

    if (wait){
      return;
    }
    else {
    console.log(flip)
    let updateFlip = [...flip] 
    updateFlip[cardKey]= true
    setFlip(updateFlip)
    setFlippedCount(flippedCount + 1)
    setWait(true);
    
    if (flippedCount === 0) {
      
      console.log("wait: " + wait)
      setFirstCard({id: cardKey, matchSet: card.matchSet})
      console.log("check2: " + cardKey)
      console.log("Check 2a: " + card.matchSet)
      console.log(flip)

    }
    
    else { 
      if (cardKey === firstCard.id){
        return;
      }
      else{
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
      if(!updateRemoveCard.includes(false)){
          setGameOver(true)
      }
      console.log("total score: " + score[0])

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
  }}}}
 

  return ( 
   
    <React.Fragment>
  
    <Col md={3} xs={4} >
    <Card  bg= "info" className= {!flip[cardKey] && removeCard[cardKey]  ? "invisible crd mb-3 ":"crd mb-3 "} >
      
      {!flip[cardKey] && removeCard[cardKey]  ? <Card.Img  onClick = {onCardClick}
      variant="top"  className="logo card-img-top"
      src= {card.src} /> :" "}
        {flip[cardKey] && !removeCard[cardKey]  ? <Card.Img  onClick = {onCardClick}
      variant="top"  className="logo card-img-top"
      src= {card.src} /> : ''}
        {!flip[cardKey] && !removeCard[cardKey]  ? <Card.Img  onClick = {onCardClick}
      variant="top"  className="logo card-img-top"
      src= {football} />  : ''}
      </Card> 
      </Col>
      </React.Fragment>
  )
}

