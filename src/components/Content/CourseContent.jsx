import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BestPractice from '../../images/best-practice.png'

const CourseContent = ({card, index}) => {
  return (
    <Card className='mb-3 link-content ' key={index}>
        <Card.Img variant="top" src={BestPractice} />
        <Card.Body>
            <Card.Title>
                <h6 className='fs-6 text-secondary'>{card.study}</h6>
            </Card.Title>
            <Card.Text>
                <h4 className='fs-5'>{card.title}</h4>
            </Card.Text>
            <Link to={`/link-info/${card.study}`} className="text-decoration-none">
                <Button className='bg-secondary border-0 py-2 px-3 mt-2'>View More</Button>
            </Link>

        </Card.Body>
    </Card>
  )
}

export default CourseContent