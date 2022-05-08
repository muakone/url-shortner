import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const ContactForm = () => {
  return (
    <div>
        <Form className='mt-4 contact-input'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="email" placeholder="Enter your username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Contact Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message here..." />
            </Form.Group>
            <Button className='btn btn-secondary px-3 py-2'>Contact Me</Button>
        </Form>
    </div>
  )
}

export default ContactForm