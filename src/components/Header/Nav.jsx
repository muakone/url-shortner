import React from 'react'
import { NavLink } from 'react-router-dom'
import shortly from '../../images/logo.svg'

const Navs = () => {
    return (
        <section className='nav-section'> 
            <div className='d-flex'>
                <img src={shortly} alt="shortly" className='shorty-logo' />
                <nav className='shortly-nav'>
                    <div>
                        <NavLink to={'/'} activeClassName='active' className='nav-links'>Home</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/about'}  className='nav-links'>About</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/contact'} className='nav-links'>Contact</NavLink>
                    </div>
                </nav>
            </div>
            <div className='d-flex'>
                <div>
                    <NavLink to={'/login'} className='nav-links'>Login</NavLink>
                </div>
                <div className='sign-up'>
                    <button  className='btn-signup'>Signup</button>
                </div>
            </div>
        </section>
    )
}

export default Navs
