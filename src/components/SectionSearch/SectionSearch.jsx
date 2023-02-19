import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import "./SectionSearch.css"

const SectionSearch = () => {
  return (
    <>
    <section>
    <Container>
        <Row className='justify-content-center'>
            <Col xs={6}>
            <div className="borderbox ">
                <h1 className="searchText">Новостная рассылка</h1>
                <p className="searchTextP">Подписка на новости, акции и скидки </p>
                <div className="searchEmail">
                <Form.Control className='searchmail' type="text" placeholder="введите ваш email" />
                <Button className='search_button'>Начать поиск</Button>
                </div>
                <p className="searchTextP">Нажимая «Подписаться», вы соглашаетесь с <a href="/#">правилами использования сервиса и обработки персональных данных</a></p>

            </div>
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )
}

export default SectionSearch