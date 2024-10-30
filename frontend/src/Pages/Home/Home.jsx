import React from 'react'
import About from '../../Components/About/About'
import Offers from '../../Components/Offers/Offers'
import Services from '../../Components/Services/Services'
import Gallery from '../../Components/Gallery/Gallery'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <About />
      <Services/>
      <Gallery/>
      <Offers/>
      <Footer/>
    </div>
  )
}

export default Home