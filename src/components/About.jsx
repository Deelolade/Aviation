import React from 'react'
import imageFour from '../images/ImageFour.jpg'


const About = () => {
  return (
    <div className='about-overall-container'>
        <h2 className="text-center pt-5"> About Us</h2>
      <div className='about-container d-flex w-75 mx-auto my-5 pb-5'>
        <div className='m-2'>
            <img src={imageFour} alt="" />
        </div>
        <div className='about-text-container m-2'>
            <h4>What Are We About</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti magni ducimus. Laudantium ipsa minus aspernatur rerum harum expedita qui consectetur, blanditiis numquam adipisci commodi praesentium alias ipsum, sunt non molestiae maiores velit atque voluptate nihil cumque cum ratione at. Quam natus nemo iure fugiat maiores, commodi et esse cum.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, laborum laboriosam iste cupiditate mollitia praesentium recusandae ad modi eius. Nobis fuga, quasi sit deleniti quo explicabo, nam, quia voluptatum ea unde ipsa nostrum. Est id blanditiis harum laboriosam error perspiciatis, nesciunt nihil delectus. Quo, nam iste? Accusantium voluptatum modi itaque?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum quaerat quo nesciunt libero necessitatibus blanditiis magnam eaque, facere nulla rerum rem sit sint ad exercitationem ipsam consequuntur optio a! Quibusdam, modi nam cumque recusandae nobis asperiores obcaecati atque. A sunt beatae libero velit eos! Sequi nesciunt commodi labore ipsam recusandae? Molestias modi accusamus minus dignissimos eos reiciendis sequi voluptates.
            </p>
        </div>
      </div>
    </div>
  )
}

export default About

