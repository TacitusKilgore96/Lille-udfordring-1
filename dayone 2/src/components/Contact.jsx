import React from 'react'

const Contact = ({ children, contactTitle }) => {
  return (
    <div id='Contact'>
      <h1>{ contactTitle }</h1>
      {children}
    </div>
  )
}

export default Contact
