import React from 'react'
import { Col } from 'react-bootstrap';


export default function Players() {
    return (
        <React.Fragment>
            <Col md={6} xs={6} className="text-center">
                <h1>
                    Player 1
        </h1>
            </Col>
            <Col md={6} xs={6} className="text-center">
                <h1>
                    Player 2
        </h1>
            </Col>
        </React.Fragment>
    )
}
