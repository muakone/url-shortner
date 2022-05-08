import React from 'react'
import { Card } from 'react-bootstrap'
import  BrandRecognition from '../../images/icon-brand-recognition.svg'
import DetailRecords from '../../images/icon-detailed-records.svg'
import Customizable from '../../images/icon-fully-customizable.svg'


const Stat = () => {
    return (
        <div className='d-flex flex-column align-items-center mx-auto my-0'>
            <div className='stat-head text-center my-5'>
              <h2 className='fs-1 fw-700'>Advanced Statistics</h2>  
              <p className='text-secondary fs-5' style={{maxWidth:'30em'}}>
                 Track how your links are performing across the web with our 
                 advanced statistics dashboard.
              </p>
           </div>  
           <div className='my-5 d-flex flex-column flex-lg-row'>
                <div>
                    <Card className='rounded-3 stat-card'>
                        <div className='rounded-circle p-3 stat-div-container'>
                            <Card.Img variant="top" src={BrandRecognition} style={{width:'35px', justifyContent:'center'}} />
                        </div>
                        <Card.Body className='stat-card-body text-lg-start text-center  py-4'>
                            <Card.Title>
                                <h4 className='fw-700'>Brand Recognition</h4>
                            </Card.Title>
                            <Card.Text className='text-secondary fw-500'>
                                Boost your brand recognition with each click. Generic links don’t 
                                mean a thing. Branded links help instil confidence in your content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <p className='stat-line'></p>
                <div className='mt-lg-5'>
                    <Card className='rounded-3 stat-card mt-lg-2'>
                        <div className='rounded-circle p-3 stat-div-container'>
                            <Card.Img variant="top" src={DetailRecords} style={{width:'35px', justifyContent:'center'}} />
                        </div>
                        <Card.Body className='stat-card-body text-lg-start text-center py-4'>
                            <Card.Title>
                                <h4 className='fw-700'>Detailed Records</h4>
                            </Card.Title>
                            <Card.Text className='text-secondary'>
                                Gain insights into who is clicking your links. Knowing when and where 
                                people engage with your content helps inform better decisions.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='stat-line'></div>
                <div className='last-stat-card'>
                    <Card className='rounded-3 stat-card'>
                        <div className='rounded-circle p-3 stat-div-container'>
                            <Card.Img variant="top" src={Customizable} style={{width:'35px', justifyContent:'center'}} />
                        </div>
                        <Card.Body className='stat-card-body text-lg-start text-center py-4'>
                            <Card.Title>
                                <h4 className='fw-700'>Fully Customizable</h4>
                            </Card.Title>
                            <Card.Text className='text-secondary'>
                                Improve brand awareness and content discoverability through customizable 
                                links, supercharging audience engagement.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
           </div>        
        </div>
    )
}

export default Stat
