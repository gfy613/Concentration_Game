import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, CardDeck } from 'react-bootstrap';


function GamePage() {

    // const [playerOne, setPlayerOne] = useState("Player 1")
    // const [playerTwo, setPlayerTwo] = useState("Player 2")

    const cards =[
            {id:1,name:"A"},
            {id:2,name:"B"},
            {id:3,name:"C"}
    ];


    // function handleInputChange(e) {
    //     let name = e.target.name

    //     switch (name){
    //         case "playerOne":
    //             setPlayerOne(e.target.value)
    //             break;
    //             case "playerTwo":
    //             setPlayerTwo(e.target.value)
    //             break;
    //     }

    // }
    return (
        <div>

            <Container>
                <Row>
                    <Col className='1 of 3'> Player 1</Col>
                    <Col className='2 of 3'></Col>
                    <Col className='3 of 3'>Player 2</Col>
                </Row>
                <Row>
                    <Col className='1 of 3'>Score: </Col>
                    <Col className='2 of 3'></Col>
                    <Col className='3 of 3'>Score: </Col>
                </Row>
              
              <div>
                <div className="deck">
                    <div className="front">
                    {cards.map((card,index) =>
                         <div key={index}>{card.name} </div>
                        
                    
                    )
                    
                    }
                    
                    </div>
        
                </div>

              </div>

            </Container>

        </div>
    )

}
export default GamePage;