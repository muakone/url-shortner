import React from 'react'
import {Button} from 'react-bootstrap'

const About = () => {
    return (
        <section className='me-0 ms-md-5 ms-sm-3 ps-lg-5 my-3 mb-3 about-container'>
            <div className='pt-5 mt-5 about-text-wrapper'>
                <h1 className='about-text fw-bold'>More than just <br /> shorter links</h1>
                <p className='about-para fs-5 text-secondary'>Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <Button className='rounded-pill text-white fs-5 fw-bolder btn-color' style={{padding: '10px 30px'}}>Get Started</Button>
            </div>
        </section>
    )
}

export default About
