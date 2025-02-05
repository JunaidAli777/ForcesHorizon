import React from 'react'
import {Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import BackButton from './BackButton';
import logo from '../assets/logo.png';
import './styles/Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ isButtonActive }) => {

  const brandColor = isButtonActive ? '#F76800' : '#1E3452';
  
  return (
    <header className='header'>
        <Navbar bg='light' variant='light' expand='md' className='navbar'>
          <LinkContainer to="/">
            <NavLink className="back-button">
              <BackButton />
            </NavLink>
          </LinkContainer>

          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand">
              <img src={logo} alt="" className='logo'/>
              <span className="forces" style={{ color: brandColor }}>Forces</span><span className="horizon" style={{ color: brandColor }} >Horizon</span>
            </Navbar.Brand>
          </LinkContainer>
        </Navbar>
    </header>
  )
}

export default Header