import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuClose from '../../images/icon-close-menu.svg'

const MobileSidebar = ({handleShowMenu}) => {
  return (
    <div>
        <div onClick={handleShowMenu} className='menu-close'>
            <img src={MenuClose} alt="menu-close" />
        </div>
        <div>
            <nav className='nav-mobile'>
              <div className='nav-route'>
                <div>
                  <NavLink to={'/'} className='nav-links'>Home</NavLink>
                </div>
                <div>
                  <NavLink to={'/about'} className='nav-links'>About</NavLink>
                </div>
                <div>
                  <NavLink to={'/contact'} className='nav-links'>Contact Us</NavLink>
                </div>
                <div>
                  <NavLink to={'/login'} className='nav-links'>Login</NavLink>
                </div>
              </div>
              <div>
                <div className='btn-signup mt-5 py-2'>
                  <Link to={'/login'} className='text-white signup-link'>Signup</Link>
                </div>
              </div>
            </nav>
        </div>
    </div>
  )
}

export default MobileSidebar