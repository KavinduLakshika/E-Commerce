import React from 'react'
import About from '../../Components/About/About'
import Offers from '../../Components/Offers/Offers'
import Services from '../../Components/Services/Services'
import Gallery from '../../Components/Gallery/Gallery'

const Home = () => {
  return (
    <div>
      <About />
      <Services/>
      <Gallery/>
      <Offers/>
    </div>
  )
}

export default Home