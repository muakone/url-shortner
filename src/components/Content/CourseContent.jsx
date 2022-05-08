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
                <h6>{card.study}</h6>
            </Card.Title>
            <Card.Text>
                <h3>{card.title}</h3>
            </Card.Text>
            <Link to={`/link-info/${card.study}`}>
                <Button className='bg-secondary py-2 px-3'>View More</Button>
            </Link>

        </Card.Body>
    </Card>
  )
}

export default CourseContent