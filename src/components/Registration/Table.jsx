import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

const Tablelist = () => {

    const [rows, setRows] = useState()

    const getAllData = () => {
        let url = "http://localhost:3001/data"
        axios.get(url).then((data) => setRows(data?.data))
    }

    const deleteFunc = (id) => {
        axios.delete(`http://localhost:3001/data/${id}`).then((res) => { alert(res.statusText) })
        setRows(rows.filter((el) => el.id !== id));
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            <Container>
                <Row className='justify-content-center mt-5 mb-5'>
                    <Col xs={8}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Password</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows?.map((row) => (

                                    <tr>
                                        <td>{row?.id}</td>
                                        <td>{row?.name}</td>
                                        <td>{row?.password}</td>
                                        <td><button onClick={() => deleteFunc(row.id)}>Delete</button></td>
                                    </tr>

                                ))}
                            </tbody>

                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tablelist