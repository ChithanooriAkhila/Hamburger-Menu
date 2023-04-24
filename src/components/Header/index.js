// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu />
        </button>
      }
    >
      {close => (
        <div className="popup">
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose />
          </button>
          <ul>
            <Link to="/">
              <li className="item">
                <AiFillHome />
                <p>Home</p>
              </li>
            </Link>
            <Link to="/about">
              <li className="item">
                <BsInfoCircleFill />
                <p>About</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
