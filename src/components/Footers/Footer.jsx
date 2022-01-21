import React from 'react'
import {Container, Row, Col, ListGroup} from 'react-bootstrap'
import shortly from '../../images/logo.svg'
import iconFacebook from '../../images/icon-facebook.svg'
import iconInstagram from '../../images/icon-instagram.svg'
import iconTwitter from '../../images/icon-twitter.svg'
import iconPinterest from '../../images/icon-pinterest.svg'

const Footer = () => {
    return (
        <footer className='footer-bg-color text-white py-5'>
            <Container fluid="md" className='mt-4 py-3 footer-container'>
                <Row className='footer-container'>
                    <Col md={4} className='footer-space'>
                        <img src={shortly} alt="shortly" className='logo-white' />
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col lg={3} md={3} className='footer-space1'>
                                <h5 className='ms-md-3'>Features</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className='border-bottom-0 footer-bg-color footer-text-hover'>
                                        <a href="muak.com" className='text-decoration-none footer-text text-nowrap'>Link Shortening</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-bottom-0 footer-bg-color footer-text-hover'>
                                        <a href="muak" className='text-decoration-none footer-text'>Branded Links</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-bottom-0 footer-bg-color footer-text-hover'>
                                        <a href="muak" className='text-decoration-none footer-text'>Analytics</a>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col lg={3} md={3} className='footer-space1'>
                                <h5 className='ms-md-3'>Resources</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className='border-bottom-0 footer-bg-color footer-text-hover'>
                                        <a href="muak.com" className='text-decoration-none footer-text'>Blog</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-bottom-0 footer-bg-color footer-text-hover'>
                                        <a href="muak" className='text-decoration-none footer-text'>Developers</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-bottom-0 footer-bg-color footer-text-hover'>
                                        <a href="muak" className='text-decoration-none footer-text'>Support</a>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col lg={3} md={3} className='footer-space1'>
                                <h5 className='ms-md-3'>Company</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className='border-bottom-0 footer-bg-color footer-text-hover'>
                                        <a href="muak.com" className='text-decoration-none footer-text'> About</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-bottom-0 footer-bg-color footer-text-hover'>
                                        <a href="muak" className='text-decoration-none footer-text'>Our Team</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-bottom-0 footer-bg-color footer-text-hover'>
                                        <a href="muak" className='text-decoration-none footer-text'>Careers</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-bottom-0  footer-bg-color footer-text-hover'>
                                        <a href="muak" className='text-decoration-none footer-text'>Contact</a>
                                    </ListGroup.Item>
                                </ListGroup>    
                            </Col>
                            <Col lg={3} md={4} className='footer-space1'>
                                <div className='d-flex icon icon-hover'>
                                    <a href="https://www.facebook.com/muhiz.akanni">
                                        <img src={iconFacebook} alt="icon-facebook" className='px-2 pb-lg-0 pb-md-2' />
                                    </a>
                                    <a href="https://twitter.com/muhiz_akanni?s=09">
                                    <img src={iconTwitter} alt="icon-twitter" className='px-2 pb-lg-0 pb-md-2' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/muhiz-akanni-46595b21a">
                                    <img src={iconPinterest} alt="icon-pinterest" className='px-2 pb-lg-0 pb-md-2' />
                                    </a>
                                    <a href="https://www.instagram.com/muakone3">
                                        <img src={iconInstagram} alt="icon-instagram" className='px-2 pb-lg-0 pb-md-2' />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
