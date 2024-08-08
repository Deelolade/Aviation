import Carousel from '../components/Carousel'
import ImageOne from "../images/ImageOne.jpg"
import CockPit from'../images/CockPit.jpg'
import ImageTwo from "../images/ImageTwo.jpg"
import ImageThree from "../images/ImageThree.jpg"
import Aircraftengine from '../images/AircraftEngine.jpg'
import BibPlane from'../images/BibPlane.jpg'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
    <Carousel/>
      <Services mainHeader="Our services"
       titleOne="Passenger Services" titleTwo="Aircraft leasing and Financing"  titleThree="VIP Reservation" 
       ImageOne={ ImageOne} ImageTwo={Aircraftengine} ImageThree={BibPlane} Left="fade-down-right" Center="fade-down" Right="fade-down-left"
       PassageOne="Passenger services in airport and aircraft management are crucial for ensuring a smooth and pleasant experience for travelers. "
       PassageTwo=" Aircraft leasing and financing are crucial aspects of the aviation industry, enabling airlines to acquire aircraft without the full upfront cost of purchasing them outright."
       PassageThree="VIP reservation services cater specifically to the needs and preferences of high-profile individuals or groups who require exceptional treatment and privacy during their travels."
      />
      <Services  titleOne="Logistics and Supply chain management" titleTwo="Air Traffic Control" titleThree="Terminal Operations"  ImageTwo={CockPit} ImageOne={ImageTwo} ImageThree={ImageThree} Left="fade-up-right" Center="fade-up" Right="fade-up-left"
      PassageOne="Logistics and supply chain management in the context of aviation, particularly for airlines and airports, involves the intricate coordination of various processes to ensure efficient operations and customer satisfaction."
      PassageTwo="Air Traffic Control (ATC) is a fundamental component of aviation safety and efficiency, responsible for managing the movement of aircraft both in the air and on the ground."
      PassageThree="Terminal operations in aviation refer to the management and coordination of activities within airport terminals where passengers check-in, go through security, wait for flights, and board aircraft."
       />
       <About/>
       <Contact/>

    </div>
  )
}

export default Home
