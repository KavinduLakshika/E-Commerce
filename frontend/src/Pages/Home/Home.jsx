import React from 'react'
import About from '../../Components/About/About'
import Offers from '../../Components/Offers/Offers'
import Services from '../../Components/Services/Services'
import Gallery from '../../Components/Gallery/Gallery'
import Footer from '../../Components/Footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <div>
      <About />
      <Services/>
      <div className='displayNone'><Gallery/></div>
      <Offers/>
      <Footer/>
    </div>
  )
}

export default Home