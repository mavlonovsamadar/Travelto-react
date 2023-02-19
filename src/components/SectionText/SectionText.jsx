import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./SectionText.css"
const imgText = require("../SectionText/img/карта.png")
const boxIcon1 = require("../SectionText/img/1.png")
const boxIcon2 = require("../SectionText/img/2.png")
const boxIcon3 = require("../SectionText/img/3.png")

const SectionText = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={6}>
                        <button className='buttonText'>Загрузить еще</button>
                    </Col>
                    <Col xs={8}>
                        <h1 className='sectionText2'>Сервис бронирования жилья для поездок</h1>
                        <p className="p_text">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. <br />
                            <br />
                            При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
                    </Col>

                    <Col xs={8}>
                        <img src={imgText} alt="" className="imgText" />
                    </Col>
                    <Col xs={4}>
                        <div className="Boxbox">
                            <div className="boxCard">
                                <img src={boxIcon1} alt="" className="boxIcon" />
                                <h3 className="boxText">10 000 +</h3>
                                <p className="textP">Вариантов проживания </p>
                            </div>

                            <div className="boxCard">
                                <img src={boxIcon2} alt="" className="boxIcon" />
                                <h3 className="boxText">Без наценок</h3>
                                <p className="textP">и скрытых комиссий  </p>
                            </div>

                            <div className="boxCard">
                                <img src={boxIcon3} alt="" className="boxIcon" />
                                <h3 className="boxText">Более 20 000  </h3>
                                <p className="textP">Довольных клиентов </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SectionText