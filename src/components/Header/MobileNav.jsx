import React, { useState } from 'react'
import MenuOpen from '../../images/icon-menu.svg'
import logo from '../../images/logo.svg'
import SideBarContent from '../Content/MobileSidebar'

const MobileNav = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
  

  return (
    <section className='display-mobile d-flex'>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className='slide-sidebar'>
            <img src={MenuOpen} alt="menu-open" className='menu-open' onClick={handleShowMenu} />
            <div>
            {
            showMenu ?
            <div className='side-menu-bg' onClick={handleShowMenu}>
                <div className='side-menu'>
                    <SideBarContent handleShowMenu={handleShowMenu} />
                </div>
            </div>
            :
            <div className='close-sidebar'>

            </div>
            }
            </div>
            
        </div>
    </section>
  )
}

export default MobileNav