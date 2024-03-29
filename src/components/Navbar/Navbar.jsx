import React from 'react'
import "./navbar.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const icon = require('./img/logo.png')
const icon2 = require("./img/translate.png")
const icon3 = require("./img/profile.png")

export default function Navbar() {
    return (
        <>
            <Container>
                <Row className='mt-4 justify-content-between'>
                    <Col xs={4}>
                        <div className="nav_left">
                            <div className="logo-image">
                                <img className='first_logo' src={icon} alt="" />
                            </div>
                            <div className="left-info-text">
                                <h5 className='num'>+7 (495) 677-17-79
                                </h5>
                                <p className='every'>Ежедневно с 10:00 до 20:00 </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className='icons mt-3'>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-apple"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </Col>
                    <Col xs={5}>
                        <div className="right_div">
                            <div className="flag_div">
                                <img src={icon2} className="flag" alt="" />
                            </div>
                            <div className="flex_icons">
                                <div className="image_div">
                                    <img src={icon3} className="personal" alt="" />
                                </div>
                             <Link to="/login"><p className="text-icon mt-3">Log In</p></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="buttons_header">
                <Container>
                    <Row className='justify-content-center mt-3'>
                        <div className="flex-box-bg">
                            <Col xs={3}>
                                <div className="box">
                                    <Link to='/home'  style={{ color: 'white', textDecoration: "none" }}> <p className='btn-text'>О нашей компании</p></Link>
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="box">
                                  <Link to='*' style={{ color: 'white', textDecoration: "none" }}><p className='btn-text'> Выбрать отель</p></Link>  
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="box">
                                <Link to="/reg" style={{ color: 'white', textDecoration: "none",  listStyle:"none" }}> <li li>Registration</li></Link>
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="box">
                                <Link to="/table" style={{ color: 'white', textDecoration: "none",  listStyle:"none" }}>
                                <p className='btn-text'>TABLE</p>
                                </Link>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
