import React from 'react';
import '../Styles/Header.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className='Header'>
      <span className='website'>Best Website Bulider in the US</span>
       <div className='line'></div>
      <div className='Header-wrapper'>
       
        <div className='left'>
        <RiCheckboxCircleLine  />
          <span>Last update</span>
         
          <span>Feb 22, 2020</span>
          <span>Advertising Disclosure </span>
        </div>
        <div className='right'>
          <span>Top Relevant </span>
          <RiArrowDropDownLine className='top-icon'/>
        </div>
       
      </div>
      <div className='line'></div>
    </div>
  );
}

export default Header;
