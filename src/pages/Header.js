import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { primary } from '../colors';
import './index.css';

const Header = () => {
  const [nav, setNav] = useState('block');
  const [mobileNav, setMobileNav] = useState('none');
  const showNav = () => {
    const mobileNav = document.getElementById('mobileNav').style;
    mobileNav.width = "250px";
    mobileNav.paddingTop = "60px";
    mobileNav.paddingLeft = "20px";
    mobileNav.paddingRight = "20px";
  };
  return (
      <div className="header_container">
        <div className="mobileNavBar">
          <FontAwesomeIcon 
          icon={faBars} 
          size='sm' 
          color={primary}
          onClick={showNav}
          />
        </div>
        <div className='header_holder'>
            <div className='logo'></div>
            <ul className='link_list'>
                <li>Home</li>
                <li>Projects</li>
                <li>Programs</li>
                <li>Profile</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Sign In/Up</li>
            </ul>
        </div>
      </div>  
  )
}

export default Header
