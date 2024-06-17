import React, { useEffect, useState } from 'react'
import  './Navbar.css'
// if you want to import logo in navbar then you need to import first the logo path from folder
import logo from '../../assets/logo.png'
function Navbar() {
const [sticky, setSticky] = useState(false);

useEffect(() => {
  window.addEventListener('scroll', () =>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false)
  })
},[]);
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'></img>
      <ul>
        <li><a  href="#">Home</a></li>
        <li><a  href="#">Program</a></li>
        <li><a  href="#">About Us</a></li>
        <li><a  href="#">Campus</a></li>
        <li><a  href="#">Testimonials</a></li>
        <li><button className='btn'>Contactt us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
