import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [value, setValue] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const [rows, setRows] = useState()


 
  const SignData = () => {
    let url = "http://localhost:3001/data"

    axios.get(url).then((data) => {
      setRows(data?.data)

      rows?.map((data) => {
        if (value === data?.name && password === data?.password) {
          localStorage.setItem("auth", true);
          navigate("/")
        }
      })
    })
  }

  useEffect(() => {
    SignData()
  }, [])

  return (
    <>
      <Container fluid='md'>
        <Row className='justify-content-md-center mt-5 mb-5'>
          <Col xs={6}>
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(e) => setValue(e.target.value)} />
                {/* {obj.name === value ? <p style={{ color: "green" }}>To'g'ri</p> : <p style={{ color: "red" }}>Invalid</p>} */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                {/* {obj.password === password ? <p style={{ color: "green" }}>To'g'ri</p> : <p style={{ color: "red" }}>Invalid</p>} */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">

              </Form.Group>
              <Button style={{width: "100%"}} variant="primary" onClick={SignData} >
                Log In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default Login