import React from 'react'
import { Container } from 'react-bootstrap'
import ContactUs from '.././images/contact-us.jpg'
import ContactForm from '../components/ContactForm/ContactForm'
import Facebook from '../images/facebook-contact.svg'
import Twitter from '../images/twitter-contact.svg'
import Instagram from '../images/instagram-contact.svg'

const Contact = () => {
  return (
    <Container fluid>
        <section className='d-flex flex-column flex-md-row'>
            <div className='contact-img'>
                <img src={ContactUs} alt="contact-us" />
            </div>
            <div className='contact-form mx-4 mt-md-4 mt-0 mb-5'>
                <h2>Contact Form</h2>
                <ContactForm />
                <div className='d-flex mt-4 mx-auto justify-content-center justify-content-md-start'>
                    <a href={'https://www.facebook.com/muhiz_akanni'} target="_blank" rel="noreferrer" >
                        <img src={Facebook} alt="facebook" />
                    </a>
                    <a href={'https://twitter.com/muhiz_akanni?s=09'} target="_blank" rel="noreferrer" className='ms-3' >
                        <img src={Twitter} alt=" twitter" />
                    </a>
                    <a href={'https://www.instagram.com/muakone3'} target="_blank" rel="noreferrer" className='ms-3' >
                        <img src={Instagram} alt="instagram" className='contact-instagram' />
                    </a>
                </div>
            </div>
        </section>
    </Container>
  )
}

export default Contact