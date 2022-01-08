import React, {useState} from 'react'
import {Container, Button, Card} from 'react-bootstrap'
import {CopyToClipboard} from 'react-copy-to-clipboard';


const FormList = ({originUrl, shortCode}) => {
    const [value, setValue] = useState('');
    const [copied, setCopied]= useState(false)
    return (
        <div>
            <Card className='shortcode border-white shadow rounded-3 form-width mx-auto justify-content-center mb-3 pt-md-0 px-0 pt-2 px-md-2'>
                <Container className='d-flex flex-md-row flex-column justify-content-between'>
                    <div className='d-flex align-items-center shortcode-container fs-5'>
                        <h5 className='fw-bold'>{originUrl}</h5>
                    </div>
                    <div className='d-flex flex-md-row flex-column'>
                        <Card.Body className='text-info fs-5 fw-bold'
                         value={value}
                         onChange={({target: {shortCode} }) => {
                            setValue(shortCode); 
                            setCopied(false);
                         }
                          }> {shortCode}</Card.Body>
                        <Card.Body>
                            <CopyToClipboard text={shortCode}
                            onCopy={() => setCopied(true)}>
                                <div>
                                    {copied ? <Button className='copied w-100 px-4'>copied!</Button> : <Button className='btn-color px-3 w-100'>copy</Button>} 
                                </div>   
                            </CopyToClipboard>
                        </Card.Body>  
                    </div>
                </Container>
            </Card>
        </div>
    )
}

export default FormList
