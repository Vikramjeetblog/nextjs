import React from 'react';
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar-container'>
        <div className='Navbar-wrapper'>
        <div className='left'></div>
        <div className='Center'>
        <input className='input-search' type='text' placeholder="search"/>
        </div>
        <div className='right'>
            <span>Categories</span>
            <span>website Bulider</span>
            <span>Today's deals</span>
        </div>
        </div>
    </div>
  )
}

export default Navbar