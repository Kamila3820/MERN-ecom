import React from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Input from '../../components/UI/input';

export default function Signup(props) {
  return (
    <Layout>
        <Container>
            <Row style={{marginTop: 50}}>
                <Col md={{span: 6, offset: 3}}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Input
                                    label='Firstname'
                                    placeholder='Firstname'
                                    value=''
                                    type='text'
                                    onChange={() => {}}
                                />
                            </Col>
                            <Col md={6}>
                            <Input
                                    label='Lastname'
                                    placeholder='Lastname'
                                    value=''
                                    type='text'
                                    onChange={() => {}}
                                />
                            </Col>
                        </Row>
                        <Input
                            label='Email Address'
                            placeholder='Enter Email'
                            value=''
                            type='text'
                            errorMessage="Choose your Email to register"
                            onChange={() => {}}
                        />

                        <Input
                            label='Password'
                            placeholder='Password'
                            value=''
                            type='text'
                            onChange={() => {}}
                        />
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                   </Form>
                </Col>
            </Row>
            
        </Container>
    </Layout>
  )
}
