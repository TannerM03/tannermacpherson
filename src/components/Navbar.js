import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {showButton();
  }, [])

  window.addEventListener('resize', showButton);



  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
          Tanner Macpherson&nbsp; <i class= "fa-solid fa-diamond"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
            <li className = 'nav-item'>
                <Link to = '/' className = 'nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className = 'nav-item'>
                <Link to = '/my-goals' className = 'nav-links' onClick={closeMobileMenu}>
                    My Goals
                </Link>
            </li>
            <li className = 'nav-item'>
                <Link to = '/fun-facts' className = 'nav-links' onClick={closeMobileMenu}>
                    Fun Facts
                </Link>
            </li>
            <li className = 'nav-item'>
                <Link to = '/hire-me' className = 'nav-links-mobile' onClick={closeMobileMenu}>
                    Hire Me
                </Link>
            </li>
        </ul>
        {button && <Button link to = '/hire-me' button-style='btn--outline'>Hire me!</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
