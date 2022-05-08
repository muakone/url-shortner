import React from 'react'
import { Button } from 'react-bootstrap'

const Boost = () => {
    return (
        <div className='boost py-3 mt-5'>
           <div className='d-flex flex-column align-items-center my-5'>
            <h2 className='text-white pb-4 fs-1 fw-700'>Boost your links today</h2>   
            <Button className='btn-color px-5 py-3 rounded-pill fw-bolder'>Get Started</Button>
           </div> 
        </div>
    )
}

export default Boost
