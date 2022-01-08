import React from 'react'
import {Container, Nav, Button, Navbar} from 'react-bootstrap'
import shortly from '../../images/logo.svg'

const Navs = () => {
    return (
        <Navbar expand="lg" className='ps-lg-5 mt-4'>
            <Container className='nav-container'>
             <img src={shortly} alt="shortly-logo" className='shorty-logo navbar-brand' />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='bg-nav'>
                <Nav className="me-auto ms-lg-4 py-4 px-5">
                    <Nav.Item as="li">
                        <Nav.Link href="/home" className='fs-6 fw-bold nav-color pb-2'>Feature</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                       <Nav.Link eventKey="link-1" className='fs-6 fw-bold nav-color pb-2'>Pricing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2" className='fs-6 fw-bold nav-color pb-2'>Resources</Nav.Link>
                     </Nav.Item>
                </Nav>
                <Nav as="ul" className='floatlg--end py-3 ps-lg-5'>
                    <hr className='nav-color' />
                    <Nav.Item as="li">
                        <Nav.Link className='fs-6 fw-bold nav-color'>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='ms-lg-2'>
                        <Nav.Link eventKey="link-1" className='mx-2 mx-lg-0'>
                            <Button className='px-4 py-lg-2 py-md-3 signup rounded-pill text-white fs-6 fw-bolder btn-color w-100'>Sign Up</Button>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs
