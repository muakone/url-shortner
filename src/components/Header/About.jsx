import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import illustration from '../../images/illustration-working.svg'

const About = () => {
    return (
        <Container className='me-0 ms-lg-3 mx-auto my-3'>
            <Row>
                <div className='d-flex flex-md-row spacing flex-column-reverse mx-auto align-items-center'>
                    <Col lg={6}z className='mx-lg-5 about-text-container'>
                        <h1 className='about-text fw-bold'>More than just shorter links</h1>
                        <p className='about-para fs-5 text-secondary'>Build your brand’s recognition and get detailed insights 
                            on how your links are performing.
                        </p>
                        <Button className='rounded-pill text-white fs-5 fw-bolder btn-color' style={{padding: '10px 30px'}}>Get Started</Button>
                    </Col>
                    <Col lg={5} className='illustration-container me-md-0'>
                        <img src={illustration} alt="working-illustration" className='d-flex justify-content-end mx-auto illustration-img' />
                    </Col>
                </div>
            </Row>
        </Container>
    )
}

export default About
