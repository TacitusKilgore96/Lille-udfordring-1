import React from 'react'
import Newsletter from './Newsletter'

const Card = ({ children, cardTitle, cardText }) => {
  return (
    <section id='Card' className='p-2 flex gap-2'>
      <div className='border-solid border-3 border-amber-400'>
        <h1>{cardTitle}</h1>
        <p>{cardText}</p>
        <img src="../public/asianfamily.jpg" alt="asian-family" />
        <Newsletter />
      </div>
      <div className='border-solid border-3 border-amber-400'>
        <h1>{cardTitle}</h1>
        <p>{cardText}</p>
        <img src="../public/asianfamily.jpg" alt="asian-family" />
        <Newsletter />
      </div>
      <div className='border-solid border-3 border-amber-400'>
        <h1>{cardTitle}</h1>
        <p>{cardText}</p>
        <img src="../public/asianfamily.jpg" alt="asian-family" />
        <Newsletter />
      </div>
    </section>
  )
}

export default Card
