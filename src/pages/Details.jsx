import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { HomeContent } from '../Content';

const Details = () => {
    const { study } = useParams();

  return (
    <Container className='my-5'>
      <div>
        <Link to={'/'}>
          <Button className='btn btn-secondary'>Go Back</Button>
        </Link>
        {HomeContent.filter(card => card.study === study).map((card, index) => (
        <div key={index} className='mt-5'>
            <div className='d-flex'>
              <h4>Case Study:</h4>
              <h4 className='ms-3'>{card.study}</h4>
            </div>
            <div className='d-flex mt-3'>
              <h4>Title:</h4>
              <h4 className='ms-3'>{card.title}</h4>
            </div>
            <div className='mt-3'>
              <p className='ms-3'>{card.body}</p>
            </div>
        </div>
        ))}
      </div>
    </Container>
  )
}

export default Details