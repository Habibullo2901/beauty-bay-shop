import React from 'react'
import './Footer.css'
import { FaTruck } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { HiOutlineCreditCard } from "react-icons/hi2";
import beautybayicon from '../Navbar/beautybayicon.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { PiTiktokLogoFill } from "react-icons/pi";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

import amex from '../../images/amex.png'
import ipay from '../../images/applepay.jpg'
import clearpay from '../../images/clearpay.webp'
import klarna from '../../images/klarna.avif'
import maestro from '../../images/Maestro.png'
import mastercard from '../../images/Mastercard.png'
import paypal from '../../images/PayPal.svg.png'
import visa from '../../images/resize.webp'


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <p className='footer-title'>REASONS TO LOVE BEAUTY BAY</p>
                <div className='footer-cards'>
                    <div className='footer-card'>
                        <FaTruck className='footericon' />
                        <p>Pick your delivery</p>
                        <p>Discover the best option for you.</p>
                    </div>
                    <div className='footer-card'>
                        <IoCardOutline className='footericon' />
                        <p>Pick your delivery</p>
                        <p>Discover the best option for you.</p>
                    </div>
                    <div className='footer-card'>
                        <GiReturnArrow className='footericon' />
                        <p>Pick your delivery</p>
                        <p>Discover the best option for you.</p>
                    </div>
                    <div className='footer-card'>
                        <HiOutlineCreditCard className='footericon' />
                        <p>Pick your delivery</p>
                        <p>Discover the best option for you.</p>
                    </div>
                </div>
                <div className='footer-info'>
                    <img src={beautybayicon} className='footer-logo' alt="" />
                    <div className='footer-list'>
                        <ul>
                            <li>Help & Information</li>
                            <li>Delivery & Returns</li>
                            <li>FAQ's</li>
                            <li>Haul Pass</li>
                            <li>Gift Cards</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Affiliates</li>
                            <li>Student Discount</li>
                        </ul>
                        <ul>
                            <li>Legal</li>
                            <li>Terms & Conditions</li>
                            <li>TRIBE Terms</li>
                            <li>Website Terms of Use</li>
                            <li>Privacy</li>
                            <li>Anti-Slavery</li>
                            <li>Cookies</li>
                            <li>Manage Preferences</li>
                        </ul>
                        <ul>
                            <li>WANT MORE FROM BEAUTY BAY?</li>
                            <li>Let’s stay in touch! We promise to send you the latest news, offers, and the freshest beauty drops, straight to your inbox.</li>
                            <li><input type="text" placeholder='Your email' /> <FaArrowRight /></li>
                            <li className='footer-socials'><FaFacebook className='footer-social' /> <FaInstagram  className='footer-social'/> <FaTwitterSquare className='footer-social' /> <PiTiktokLogoFill className='footer-social' /> <FaPinterest className='footer-social' /> <FaYoutube  className='footer-social'/></li>
                        </ul>
                    </div>
                </div>
                <p className='footer-copyright'>Copyright © 2022 BEAUTY BAY Ltd.</p>
                <p className='footer-address'>Registered office address Level 12, 5 Exchange Quay, M5 3EF. Registered in England, company registration number 6427672.</p>
                <div className='footer-payment'>
                    <img src={paypal} width={50} alt="" />
                    <img src={klarna} width={50} alt="" />
                    <img src={clearpay} width={50} alt="" />
                    <img src={ipay} width={50} alt="" />
                    <img src={visa} width={50} alt="" />
                    <img src={amex} width={50} alt="" />
                    <img src={mastercard} width={50} alt="" />
                    <img src={maestro} width={50} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer