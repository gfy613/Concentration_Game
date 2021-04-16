import React, { useState, useEffect, useRef } from 'react'
import {Card, Button, Col}  from 'react-bootstrap';

export default function SingleCard({card}) {
    
    const [flip,setFlip] = useState(false)

    return ( 
      <Col md="auto">
      <Card style={{ width: '18rem' }} className="text-center">
        <Button>
        <Card.Body onClick = {() => setFlip(!flip)}>
          {flip ? card.name : card.id}
        </Card.Body>
        </Button>
        </Card> 
        </Col>
        
    )
}
