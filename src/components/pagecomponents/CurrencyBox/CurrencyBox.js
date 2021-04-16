import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';


function CurrencyBox(props) {

    const [gold, setGold] = useState(0)
    const [copper, setCopper] = useState(0)
    const [silver, setSilver] = useState(0)
    const [electrum, setElectrum] = useState(0)
    const [platinum, setPlatinum] = useState(0)
    const [totalCopper, setTotalCopper] = useState(0)
    const [totalSilver, setTotalSilver] = useState(0)
    const [totalGold, setTotalGold] = useState(0)

    function handleInputChange(e) {
        let name = e.target.name

        switch (name) {
            case "gold":
                setGold(e.target.value)
                break;
            case "copper":
                setCopper(e.target.value)
                break;
            case "silver":
                setSilver(e.target.value)
                break;
            case "electrum":
                setElectrum(e.target.value)
                break;
            case "platinum":
                setPlatinum(e.target.value)
                break;
        }
    }


    function handleSubmit() {
        console.log("Handle submit check")
        let data = {
            gold: gold, 
            copper: copper,
            silver: silver,
            electrum: electrum,
            platinum: platinum
        }

        let totalCopperAmount = parseInt(copper) + parseInt(silver)*10 + parseInt(gold)*100 + parseInt(electrum)*50 + parseInt(platinum)*1000
        let totalSilverAmount = parseInt(silver) + parseInt(copper)/10 + parseInt(gold)*10 + parseInt(electrum)*5 + parseInt(platinum)*100
        let totalGoldAmount = parseInt(gold) + parseInt(copper)/100 + parseInt(silver)/10 + parseInt(electrum)/2 + parseInt(platinum)/10 
        
       console.log(data)
       console.log("copper = "+totalCopperAmount)
       console.log("silver = "+totalSilverAmount)
       console.log("gold = "+totalGoldAmount)
       setTotalCopper(totalCopperAmount)
       setTotalSilver(totalSilverAmount)
       setTotalGold(totalGoldAmount)
    }


    return (
        <div>

            <Container>
                <Row>
                    <Col className='4 of 9'></Col>
                    <Col className='5 of 9 space'>
                        <Form>
                            <Form.Group controlId="formGold">
                                <Form.Label className="para2">Gold</Form.Label>
                                <Form.Control type="gold" name="gold" onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="formSilver">
                                <Form.Label className="para2">Silver</Form.Label>
                                <Form.Control type="silver" name="silver" onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="formElectrum">
                                <Form.Label className="para2">Electrum</Form.Label>
                                <Form.Control type="electrum" name="electrum" onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="formCopper">
                                <Form.Label className="para2">Copper</Form.Label>
                                <Form.Control type="copper" name="copper" onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="formPlatinum">
                                <Form.Label className="para2">Platinum</Form.Label>
                                <Form.Control type="platinum" name="platinum" onChange={handleInputChange} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col className='4 of 9'></Col>

                </Row>
                <Row>
                    <Col className='4 of 9'></Col>
                    <Col className='5 of 9 space'>
                        <Button className="button" onClick={handleSubmit}>
                            Calculate
                        </Button>
                    </Col>
                    <Col className='4 of 9'></Col>
                </Row>
                <Row>
                    <Col className='4 of 9'></Col>
                    <Col className='5 of 9 space'>
                       Copper: {totalCopper}  
                       Silver: {totalSilver}  
                       Gold: {totalGold} 
                    </Col>
                    <Col className='4 of 9'></Col>
                </Row>


            </Container>

        </div>
    )

}
export default CurrencyBox;