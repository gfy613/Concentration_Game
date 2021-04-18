import React from 'react'
import {Card, Container, Col}  from 'react-bootstrap';


export default function Score({score, setScore}) {
    return (
        <React.Fragment>
  
    <Col md className="text-center"> 
    <div>Score: {score[0]}</div>
        </Col>
    <Col md className="text-center"> 
    <div>Score: {score[1]}</div>
        </Col>

        </React.Fragment>
    )
}
