import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={5}>
                        <h1 style={{ color: "red", paddingLeft: "100px", paddingTop: "50px", paddingBottom: "50px" }}>404 Page Not Found</h1>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NotFound