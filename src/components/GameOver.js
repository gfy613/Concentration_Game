import React, { useState, useEffect, useRef } from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap';

export default function GameOver({ score, setScore, setGameOver }) {

    const [winner, setWinner] = useState([false, false])

    let updateWinner = [...winner]

    useEffect(() =>
        findWinner()
    )
    const findWinner = async () => {

        if (score[0] > score[1]) {
            updateWinner[0] = true
            setWinner(updateWinner)
        }
        else if (score[0] < score[1]) {
            updateWinner[1] = true
            setWinner(updateWinner)
        }
    }

    const onButtonClick = async () => {
        setScore([0, 0])
        setGameOver(false)
    }

    return (
        <Container>
            <Jumbotron className="justify-content-md-center  text-center bottom">
                <h1>
                    {winner[0] ? "Player 1 wins! Score: " + score[0] : " "}
                    {winner[1] ? "Player 2 wins! Score: " + score[1] : " "}
                    {!winner[0] && !winner[1] ? "It's a draw" : " "}
                </h1>
                <Button variant="primary" onClick={onButtonClick}>Replay?</Button>
            </Jumbotron>
        </Container>
    )
}
