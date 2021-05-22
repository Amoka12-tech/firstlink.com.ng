import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { primary, white } from '../colors';
import logo from "../images/logo.png";

const MobileNav = () => {
    const hideNav = () => {
        document.getElementById('mobileNav').style.width = "0px";
        const mobileNav = document.getElementById('mobileNav').style;
        mobileNav.width = "0px";
        mobileNav.paddingTop = "60px";
        mobileNav.paddingLeft = "0px";
        mobileNav.paddingRight = "0px";
      };
  return (
        <div id="mobileNav" className="mobileNav">
            <div className="mobileCloseBar">
                <FontAwesomeIcon 
                onClick={hideNav}
                size="sm" 
                icon={faTimes} 
                color={white} />
            </div>
            <div className="appTitle">
                <img src={logo} />
                <span> First Link ICT </span>
            </div>
            <div className="navDivider"></div>

            <ul className="menuList">
                <li>Home</li>
                <li>Projects</li>
                <li>Programs</li>
                <li>Profile</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </div>
  )
}

export default MobileNav;
