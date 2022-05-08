import React from 'react'
import Boost from '../components/Content/Boost'
import Stat from '../components/Content/Stat'

const About = () => {
  return (
    <section>
        <div className='d-flex ms-md-5 ms-2 mt-5 mb-5'>
            <span className='vertical-line'></span>
            <h1 className='fs-1 ms-2 mt-2 fw-bold'>About Shortner</h1>
        </div>
        <section className='bg-light pt-5'> 
          <article className='mx-md-5 mx-2 mb-5 py-5 px-md-5 px-2 text-md-start text-center'>
            <p className='text-secondary'>Our Mission</p>
            <h4 className='fw-bold'>
              Our Mission is to Build your brand’s recognition and get detailed insights on how your links are performing.
            </h4>
          </article>
          <Stat />
          <Boost />
        </section>
    </section>
  )
}

export default About