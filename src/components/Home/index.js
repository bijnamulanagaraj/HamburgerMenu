// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="about-mobile-image"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="about-desktop-image"
        alt="home"
      />
    </div>
  </div>
)

export default About
