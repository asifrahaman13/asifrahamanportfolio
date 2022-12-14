import React from 'react'
import "./Navbar.css";
import { NavLink, } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar-react">
        <ul className="navbar-ul">
            <li><NavLink  to ="/" className="links">Home</NavLink></li>
          
            <li><NavLink to="/about" className="links">About</NavLink></li>
            <li><NavLink to="contact" className="links">Contact</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar