import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import "./header.css"
const header_photo = require("./img/header_photo.png")

const Header = () => {
    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <h1 className='headerText'> Забронируйте уникальное жилье быстро и просто</h1>
                            <p className='headerText_p'>Лучший способ арендовать квартиру </p>
                        </Col>

                        <Col xs={6}>
                            <img className='header_photo' src={header_photo} alt="" />
                        </Col>

                    </Row>
                </Container>
            </header>
           
        </>
    )
}

export default Header