import React, {useState, useEffect} from 'react'
import {Form, Container, Button} from 'react-bootstrap'
import Shortcode from './Shortcode'
import FormList from './FormList'
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from "@emotion/react";


const HTTP_URL_VALIDATOR_REDEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;

const Forms = () => {
    const [link, setLink] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [Response, setResponse] = useState([])

    const validateURL = (string) => {
        return string.match(HTTP_URL_VALIDATOR_REDEX)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateURL(link)) {
            getLink();
            setLink('');
            setIsLoading(!isLoading);
        } else {
            setError('Please input a valid link')
        }
    }
    useEffect(() => {
        return () => {
        };
      }, [])
      
    const getLink = async () => {
        await Shortcode
        .get(`shorten?url=${link}`)
        .then((response) => {
            console.log(response)
            setResponse([...Response, response.data.result])
            setIsLoading(false)
            setError('')
        })
        .catch((error) => {
            console.error(error)
        })
    }
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: black;
        padding: 10px;
        `;


    return (
      <section className='form-section'>
        <Container className='form-container form-width mx-auto mb-4 py-md-5 py-4 ps-4 pe-3'>
            <Form className='d-flex flex-column form-box pt-2 ps-md-0 ps-3' onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3 ms-md-5 d-flex flex-md-row flex-column form-text" controlId="formBasicText">
                    <Form.Control type="text" className='me-md-4 Form-text ps-md-5 p-md-0 py-3 mb-md-0 mb-3 rounded-3' value={link} onChange={(e) => setLink(e.target.value)} placeholder="Shorten a link here..." />
                    {!isLoading && (
                        <Button className='pe-5 text-white border-info px-5 text-nowrap py-3 btn-color fw-bolder' onClick={(e) => handleSubmit(e)}>Shorten it!</Button>
                    )}
                    {isLoading && (
                        <Button className='btn-color pe-5 px-5 text-nowrap py-3' onClick={(e) => handleSubmit(e)}>
                            <ClipLoader
                            css={override} size={35} color='black'
						/>
                        </Button>   
                    )}
                </Form.Group>
                <p className='text-danger justify-content-start text-start ms-5 fst-italic'>{error}</p> 
            </Form>
        </Container>
        {
            Response.length ? (
                <div>
                    {Response.map((link) => (
                        <FormList originUrl={link.original_link} shortCode={link.short_link}/>
                    ))}
                </div>
            ):(
                <div></div>
            )}
        
      </section>
    )
}

export default Forms