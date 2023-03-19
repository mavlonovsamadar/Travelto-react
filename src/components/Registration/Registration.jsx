import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Registration = () => {

    const [value, setValue] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    
    const createData = () => {
        let obj = {
            name: value,
            password: password
        }

        let url = "http://localhost:3001/data"

        axios.post(url, obj).then((res) => {
            console.log(res);
            alert("success")
            setValue("")
            setPassword("")
            navigate("/login")
        })
      }

    return (
        <>
            <Container fluid='md'>
                <Row className='justify-content-md-center mt-5 mb-5'>
                    <Col xs={6}>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" onChange={(e) => setValue(e.target.value)} />
                                {value.length < 4 ? <p>Error</p> : <p>Succes</p>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                {password.length < 4 ? <p>Error</p> : <p>Succes</p>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">

                            </Form.Group>
                            <Button style={{width: "100%"}} variant="primary" onClick={createData} >
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Registration