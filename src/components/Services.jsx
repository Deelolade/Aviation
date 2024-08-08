import React,{useEffect} from 'react'
import aos from "aos"
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'

const Services = (props) => {

  useEffect(()=>{
    aos.init({
      duration: 2000
    });
  },[])

const { mainHeader,titleOne, titleTwo, titleThree, ImageOne, ImageTwo, ImageThree, PassageOne,PassageTwo,PassageThree,Left,Center,Right}=props;     

  return (
      
    <div className='container my-5'>
    <h4 className='main-header my-4 text-center'>{mainHeader}</h4>
    <div className='main-container d-flex'>
    <div className="card mx-2" style={{width:'70vw'}} data-aos={Left}>
  <img src={ImageOne} className="card-img-top" alt="..." style={{height:'30vh'}}/>
  <div className="card-body">
    <h5 className="card-title">{titleOne}</h5>
    <p className="card-text">{PassageOne}</p>
  </div>
    </div>

    <div className="card mx-2"style={{width:'70vw'}} data-aos={Center}>
  <img src={ImageTwo} className="card-img-top" alt="..." style={{height:'30vh'}}/>
  <div className="card-body">
    <h5 className="card-title">{titleTwo}</h5>
    <p className="card-text">{PassageTwo}</p>
  </div>
    </div>

    <div className="card mx-2"style={{width:'70vw'}} data-aos={Right}>
  <img src={ImageThree} className="card-img-top" alt="..." style={{height:'30vh'}}/>
  <div className="card-body">
    <h5 className="card-title"> {titleThree}</h5>
    <p className="card-text"> {PassageThree} </p>
  </div>
    </div>

    </div>
    
   </div>
  )
}

export default Services
