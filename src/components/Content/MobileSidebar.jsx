import React from 'react'
import { NavLink } from 'react-router-dom'
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
                  <NavLink to={'/'} className='nav-links' onClick={handleShowMenu}>Home</NavLink>
                </div>
                <div>
                  <NavLink to={'/about'} className='nav-links' onClick={handleShowMenu}>About</NavLink>
                </div>
                <div>
                  <NavLink to={'/contact'} className='nav-links' onClick={handleShowMenu}>Contact Us</NavLink>
                </div>
                <div>
                  <NavLink to={'/login'} className='nav-links' onClick={handleShowMenu}>Login</NavLink>
                </div>
              </div>
            </nav>
        </div>
    </div>
  )
}

export default MobileSidebar