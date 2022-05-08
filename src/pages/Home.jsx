import React from 'react'
import About from '../components/Content/About'
import Forms from '../components/Content/form/Forms'
import Boost from '../components/Content/Boost'
import { Container, Col, Row } from 'react-bootstrap';
import { HomeContent } from '../Content';
import LinkContent from '../components/Content/CourseContent'; 

const Home = () => {
  return (
    <div>
        <About/>
        <div className='content'>
        <Forms/>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {HomeContent.map((card, index) => (
              <div key={index}>
                <Col>
                  <LinkContent card={card} index={index} />
                </Col>
              </div>
            ))}
          </Row>
        </Container>
        <Boost/>
      </div>
    </div>
  )
}

export default Home