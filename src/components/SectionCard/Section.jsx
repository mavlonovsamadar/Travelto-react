import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import "./section.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const Section = () => {

    const [user, setUser] = useState([])
    const [value, setValue] = useState("")

    const getData = () => {
        axios.get("http://localhost:3002/data").then(data => {
            setUser(data.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Container>
                <Row className='justify-content-center mt-2' >
                    <Col xs={12}>
                        <div className="positiv">
                            <Form.Control className='search' type="text" placeholder="Напишите отель" onChange={(e) => setValue(e.target.value)} />
                            <Button className='header_button'>Начать поиск</Button>
                        </div>
                    </Col>
                    <Col xs={5}>
                        <h1 className='sectionText'>Лучшие предложения рядом с вами</h1>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='justify-content-between'>
                    {user.filter((res) => {
                        //   console.log(res.name);
                        return res.name.toLocaleLowerCase() === "" ? value : res.name.toLocaleLowerCase().includes(value)
                    }).map((data) => {
                        return (
                            <>
                                <Col xs={3}>
                                    <Card style={{ width: '19rem', marginTop: "20px" }}>
                                        <Card.Img variant="top" src={data.img} className="cardImage" />
                                        <Card.Body>
                                            <Card.Title className='card_name'>{data.name}</Card.Title>
                                            <Card.Text className='card_location'>
                                                {data.location}
                                            </Card.Text>
                                            <div className="price">
                                                <Button className='card_price'>{data.price} <span className='card_sale'>{data.sale}</span></Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        )
                    })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Section