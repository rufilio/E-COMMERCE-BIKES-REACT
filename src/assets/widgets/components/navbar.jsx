import React from 'react'
import '../styles/navbar.css'
import Logo from '../../images/lgo.png'

import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export const Navbar = () => {
  return (
    <header>
      <div className="navbar-content">
          <div className="logo">
          <img src={Logo} alt="logo"/>
          </div>
          <ul>
            <li><Link to="/" className='links'>Home</Link></li>
            <li><Link to="/About" className='links'>About</Link></li>
            <li><Link to="/Contact" className='links'>Contact</Link></li>
          </ul>

          <div className='cart-and-heart'>
            <CartWidget/>
            <a href="" className='buttons-t'><i class='bx bxs-heart' ></i></a>
          </div>
          
          <div className="nav-users-settings">
             <div className="active">
             <a href="" className='links'>Login</a>
             </div>
             <a href="" className='links'>Register</a>
          </div>
      </div>
     </header>
  )
}

export default Navbar