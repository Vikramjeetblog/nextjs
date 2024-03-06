import React from 'react';
import '../Styles/Footer.css'
import { RiArrowDropDownLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer-wrapper'>
                <div className='Left'>
                    <span>CATEGORIES</span>
                    <span>Web Builder</span>
                    <span>Hosting</span>
                    <span>Data Center</span>
                    <span>Robotic Automation</span>
                </div>
                <div className='center'>
                    <span>CONTACT</span>
                    <span>Contact</span>
                    <span>Privacy Policy</span>
                    <span>Terms Of Services</span>
                    <span>Categories</span>
                    <span>About us</span>
                </div>
                <div className='Right'>
                    <span>United States <RiArrowDropDownLine/></span>
                   

                </div>
            </div>
        </div>
    )
}

export default Footer;
