import React from 'react'
import Aeroplane from '../images/Aeroplane.jpg'
import BibPlane from '../images/BibPlane.jpg'
import CockPit from '../images/CockPit.jpg'
import Engine from '../images/AircraftEngine.jpg'
const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Aeroplane} className="d-block vw-100"style={{height:"91.4vh"}}   alt="Aeroplane"/>
    </div>
    <div className="carousel-item">
      <img src={BibPlane} className="d-block vw-100"style={{height:"91.4vh"}}   alt="Bibplane"/>
    </div>
    <div className="carousel-item">
      <img src={CockPit} className="d-block vw-100" style={{height:"91.4vh"}}  alt="Cockpit"/>
    </div>
    <div className="carousel-item">
      <img src={Engine} className="d-block vw-100"style={{height:"91.4vh"}}   alt="Engine"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
