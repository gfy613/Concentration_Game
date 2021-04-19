import React from 'react'
import { Col } from 'react-bootstrap';


export default function Score({ score }) {
    return (
        <React.Fragment>

            <Col md={6} xs={6} className="text-center">
                <h2>
                    <div>Score: {score[0]}</div>
                </h2>
            </Col>
            <Col md={6} xs={6} className="text-center">
                <h2>
                    <div>Score: {score[1]}</div>
                </h2>
            </Col>

        </React.Fragment>
    )
}
