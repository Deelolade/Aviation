import React from 'react'

const Contact = () => {
  return (
    <div className='contact-overall-container'>
      <div className='d-flex'>
        <div className='white d-flex justify-content-center align-items-center text-black'>
         <div>
         <h1> We're here</h1>
         <p>Our job is always open for your Excitement</p>
         </div>
        </div>
        <div className=' coloured bg-info  d-flex justify-content-center align-items-center text-white '>
    <div>
        <h1>Let's Talk</h1>
        <p>Share your excitement with us</p>
        <a href="mailto:: info@yummygum.com" className='text-deciration-none text-white'>Info@yummygum.com</a>
        <hr />
    </div>
        </div>      
      </div>
    </div>
  )
}

export default Contact
