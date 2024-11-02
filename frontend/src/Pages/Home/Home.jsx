
import About from '../../Components/About/About'
import Offers from '../../Components/Offers/Offers'
import Services from '../../Components/Services/Services'
import Gallery from '../../Components/Gallery/Gallery'
import Footer from '../../Components/Footer/Footer'
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <About />
      <Services/>
      <div className='displayNone'><Gallery/></div>
      <Offers/>
      <Footer/>
    </div>
  )
}

export default Home