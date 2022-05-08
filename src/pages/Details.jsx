import React from 'react'
import { useParams } from 'react-router-dom';
import { HomeContent } from '../Content';

const Details = () => {
    const { study } = useParams();

  return (
    <div>
        <h1>Go back</h1>
        {HomeContent.filter(card => card.study === study).map((card, index) => (
        <div key={index}>
            <h1>{card.title}</h1>
        </div>
        ))}
    </div>
  )
}

export default Details