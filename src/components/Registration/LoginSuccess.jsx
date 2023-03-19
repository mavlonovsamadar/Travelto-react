import React from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// const img = require("../img")
const LoginSuccces = () => {

const navigate = useNavigate()

const toHome = () => {
  navigate("/home")
}
    return(
        <>
        <Container>
          <Row className='justify-content-center mt-5 mb-5'>
            <Col xs={4}>
                <img style={{width:"100%", paddingBottom: "40px"}} src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="" />
            <Alert style={{width:"100%"}} variant='success'>
       User registered Successfully!
      </Alert>
      <Button style={{width: "100%"}} onClick={()=>toHome()}> OK </Button>
            </Col>
          </Row>
        </Container>
        </>
      )
}

export default LoginSuccces