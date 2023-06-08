// Write your code here
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button type="button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu size="30" className="icon-btn" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="navlink-list">
              <li className="list-item">
                <Link to="/" onClick={() => close()} className="nav-link">
                  <AiFillHome size="36" />
                  <p className="navlink-content">Home</p>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/about" onClick={() => close()} className="nav-link">
                  <BsInfoCircleFill size="32" />
                  <p className="navlink-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
