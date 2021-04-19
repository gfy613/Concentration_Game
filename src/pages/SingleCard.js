import React  from 'react'
import { Card, Col } from 'react-bootstrap';
import football from "../images/football.jpg"

export default function SingleCard({ card, cardKey, flippedCount, setFlippedCount, flip, setFlip, firstCard, setFirstCard, removeCard, setRemoveCard, score, setScore, player, setPlayer, setGameOver, wait, setWait }) {

  const onCardClick = async () => {

    if (wait) {
      return;
    }
    else {
      let updateFlip = [...flip]
      updateFlip[cardKey] = true
      setFlip(updateFlip)
      setFlippedCount(flippedCount + 1)

      if (flippedCount === 0) {
        setFirstCard({ id: cardKey, matchSet: card.matchSet })
      }

      else {
        if (cardKey === firstCard.id) {
          return;
        }
        else {
          setWait(true)
          if (firstCard.matchSet === card.matchSet) {
            setTimeout(() => {
              setWait(false)
              let updateRemoveCard = [...removeCard]
              updateRemoveCard[firstCard.id] = true
              updateRemoveCard[cardKey] = true
              setRemoveCard(updateRemoveCard)
              setFlippedCount(0)
              updateFlip[cardKey] = false
              updateFlip[firstCard.id] = false
              setFlip(updateFlip)
              setFirstCard({ id: null, matchSet: null })
              let updateScore = [...score]
              if (player) {
                updateScore[0]++;
              }
              else {
                updateScore[1]++;
              }
              setScore(updateScore)
              if (!updateRemoveCard.includes(false)) {
                setGameOver(true)
              }
            }, 1200)
          }

          else {
            setTimeout(() => {
              setWait(false)
              updateFlip[cardKey] = false
              updateFlip[firstCard.id] = false
              setFlip(updateFlip)
              setFlippedCount(0)
              setFirstCard({ id: null, matchSet: null })
              setPlayer(!player)
            }, 1200)
          }
        }
      }
    }
  }


  return (

    <React.Fragment>

      <Col md={3} xs={4} >
        <Card bg="info" className={!flip[cardKey] && removeCard[cardKey] ? "invisible crd mb-3 " : "crd mb-3 "} >

          {!flip[cardKey] && removeCard[cardKey] ? <Card.Img onClick={onCardClick}
            variant="top" className="logo card-img-top"
            src={card.src} /> : " "}
          {flip[cardKey] && !removeCard[cardKey] ? <Card.Img onClick={onCardClick}
            variant="top" className="logo card-img-top"
            src={card.src} /> : ''}
          {!flip[cardKey] && !removeCard[cardKey] ? <Card.Img onClick={onCardClick}
            variant="top" className="logo card-img-top"
            src={football} /> : ''}
        </Card>
      </Col>
    </React.Fragment>
  )
}

