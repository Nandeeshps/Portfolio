import React from 'react'
import './Navbar.css';
import logo from './logo.png';

function Navbar() {
  return (
    <nav>
<img src={logo} alt="logo" />
<ul className='container'>
  <li>Home</li>
  <li>About</li>
  <li>Skills</li>
  <li>Projects</li>
  <li>Resume</li>
  <li>Contact</li>
</ul>
    </nav>
  )
}

export default Navbar