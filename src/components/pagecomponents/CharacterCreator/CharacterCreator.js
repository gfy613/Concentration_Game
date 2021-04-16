import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';


function CharacterCreator(props) {

    return (
        <div>

            <Container>
                <Row>
                    <Col className='1 of 3'></Col>
                    <Col className='2 of 3'>
                        Character
                    </Col>
                    <Col className='3 of 3'></Col>
                </Row>
                <Row>
                    <Col className='1 of 3'></Col>
                    <Col className='2 of 3'>
                        Character Name
                    </Col>
                    <Col className='3 of 3'></Col>
                </Row>
                <Row>
                    <Col className='1 of 3'>
                        Race
                    </Col>
                    <Col className='2 of 3'>
                        Alignment
                    </Col>
                    <Col className='3 of 3'>
                        Experience Points
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'>
                        Strength
                    </Col>
                    <Col className='2 of 3'>
                        Dexterity
                    </Col>
                    <Col className='3 of 3'>
                        Constitution
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'>
                        Intellegence
                    </Col>
                    <Col className='2 of 3'>
                        Wisdom
                    </Col>
                    <Col className='3 of 3'>
                        Charisma
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'>
                        Armor Class
                    </Col>
                    <Col className='2 of 3'>
                        Initiative
                    </Col>
                    <Col className='3 of 3'>
                        Speed
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'></Col>
                    <Col className='2 of 3'>
                        Hit Point Maxium/Current Hit Points
                    </Col>
                    <Col className='3 of 3'></Col>
                </Row>
                <Row>
                    <Col className='1 of 3'></Col>
                    <Col className='2 of 3'>
                        Temporary Hit Points
                    </Col>
                    <Col className='3 of 3'></Col>
                </Row>
                <Row>
                    <Col className='1 of 2'>
                        Total/Hit Dice
                    </Col>
                    <Col className='2 of 2'>
                        Successes/Failures/Death Saves
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 2'>
                        Inspiration
                    </Col>
                    <Col className='2 of 2'>
                        Proficieny Bonus
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'></Col>
                    <Col className='2 of 3'>
                        Saving Throws
                    </Col>
                    <Col className='3 of 3'></Col>
                </Row>
                <Row>
                    <Col className='1 of 2'>
                        Strength
                    </Col>
                    <Col className='2 of 2'>
                        Dexterity
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 2'>
                        Constitution
                    </Col>
                    <Col className='2 of 2'>
                        Intelligence
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 2'>
                        Wisdom
                    </Col>
                    <Col className='2 of 2'>
                        Charisma
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'></Col>
                    <Col className='2 of 3'>
                        Skills
                    </Col>
                    <Col className='3 of 3'></Col>
                </Row>
                <Row>
                    <Col className='1 of 3'>
                        <Form>
                            <Form.Check
                                type="radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                            <Form.Control type="email" />
                            <Form.Label className="para2">Acrobatics (Dex)</Form.Label>
                        </Form>
                    </Col>
                    <Col className='2 of 3'>
                        Animal Handling (Wis)
                    </Col>
                    <Col className='3 of 3'>
                        Arcana (Int)
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'>
                        Athletics (Str)
                    </Col>
                    <Col className='2 of 3'>
                        Deception (Cha)
                    </Col>
                    <Col className='3 of 3'>
                        History (Int)
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'>
                        Insight (Wis)
                    </Col>
                    <Col className='2 of 3'>
                        Intimidation (Cha)
                    </Col>
                    <Col className='3 of 3'>
                        Investigation (Int)
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'>
                        Medicine (Wis)
                    </Col>
                    <Col className='2 of 3'>
                        Nature (Int)
                    </Col>
                    <Col className='3 of 3'>
                        Perception (Wis)
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'>
                        Performance (Cha)
                    </Col>
                    <Col className='2 of 3'>
                        Persuasion (Cha)
                    </Col>
                    <Col className='3 of 3'>
                        Religion (Int)
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'>
                        Sleight of Hand (Dex)
                    </Col>
                    <Col className='2 of 3'>
                        Stealth (Dex)
                    </Col>
                    <Col className='3 of 3'>
                        Survival (Wis)
                    </Col>
                </Row>
                <Row>
                    <Col className='1 of 3'></Col>
                    <Col className='2 of 3'>
                        Personality Traits
                    </Col>
                    <Col className='3 of 3'></Col>
                </Row>
                <Row>
                    <Col className='1 of 3'></Col>
                    <Col className='2 of 3'>
                        Ideals
                    </Col>
                    <Col className='3 of 3'></Col>
                </Row>
                <Row>
                    <Col className='1 of 3'></Col>
                    <Col className='2 of 3'>
                        Bonds
                    </Col>
                    <Col className='3 of 3'></Col>
                </Row>
                <Row>
                    <Col className='1 of 3'></Col>
                    <Col className='2 of 3'>
                        Flaws
                    </Col>
                    <Col className='3 of 3'></Col>
                </Row>

            </Container>

        </div>
    )

}
export default CharacterCreator;