import React from 'react'
import {Card, Button, Col}  from 'react-bootstrap';

export default function Score({score, setScore}) {
    return (
        <div>
    <Col md="auto"> Score: {score[0]}
        </Col>
    <Col md="auto"> Score: {score[1]}
        </Col>
        </div>
    )
}
