import React from 'react';
import Menu from './Menu';
import logo from '../images/logo.svg';
import searchIcon from '../images/search.svg';

import '../styles/Navigation.scss';

function Navigation() {
  return (
    <>
        <div className="navigation">
            <div className="container">
                <img src={logo} alt="instagram logo" className="logo" />
                <div className="search">
                    <img src={searchIcon} alt="search icon" className="search-icon" />
                    <span className="search-text">Search</span>
                </div>
                <Menu></Menu>
            </div>
        </div>
    </>
  )
}

export default Navigation