import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Footer.css"
const logoFooter = require("./img/logoFooter.png")

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col xs={3}>
                            <h5 className="footerText">Сотрудничество</h5>
                            <ul className="list_footer">
                                <li className="list_item_footer">Добавить отель</li>
                                <li className="list_item_footer">Вход для отелей</li>
                                <li className="list_item_footer">Парнерская программа</li>
                                <li className="list_item_footer">Реклама</li>
                            </ul>
                        </Col>

                        <Col xs={3}>
                            <h5 className="footerText">Помощь</h5>
                            <ul className="list_footer">
                                <li className="list_item_footer">Обратная связь</li>
                                <li className="list_item_footer">Часто задаваемые вопросы</li>
                                <li className="list_item_footer">Политика конфиденциальности</li>
                                <li className="list_item_footer">Политика использования файлов cookie</li>
                                <li className="list_item_footer">Условия использования</li>
                            </ul>
                        </Col>

                        <Col xs={3}>
                            <h5 className="footerText">О нашей компании</h5>
                            <ul className="list_footer">
                                <li className="list_item_footer">О нас</li>
                                <li className="list_item_footer">Карьера</li>
                                <li className="list_item_footer">Наша команда</li>
                                <li className="list_item_footer">Новости и события</li>
                                <li className="list_item_footer">Блог</li>
                            </ul>
                        </Col>

                        <Col xs={3}>
                            <h5 className="footerText">Нужна помощь? </h5>
                            <ul className="list_footer">
                                <li className="list_item_footer">+7 (495) 777-40-50</li>
                                <li className="list_item_footer">Заказать звонок</li>
                                <li className="list_item_footer">г. Москва, Варшавское ш, д.68 к.3 </li>
                            </ul>
                        </Col>
                        <hr className='hr_line' />

                        <Col xs={3}>
                            <img src={logoFooter} alt="" className="logoFooter" />
                        </Col>
                        <Col xs={6}>

                            <p className="FooterP">© 2009-2019 Интернет магазинВсе права защищены. <br /> Запрещено использование материалов сайта без согласия автора.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer