import React from 'react'
import './Navbar.css'
import Modal from '../Modal'
import beautybayicon from './beautybayicon.png'
import { PiTruckLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const [ element, setElement ] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        // setElement(e.target.value)
        if(element.length > 2){
            if(element === 'blushe' || element === 'blush'){
                navigate('/blush')
            }
            if(element === 'bronzer'){
                navigate('/bronzer')
            }
            if(element === 'eyebrow'){
                navigate('/eyebrow')
            }
            if(element === 'eyeliner'){
                navigate('/eyeliner')
            }
            if(element === 'eyeshadow'){
                navigate('/eyeshadow')
            }
            if(element === 'lipstick' || element === 'lipsticks'){
                navigate('/lipstick')
            }
            if(element === 'lipsticks' || element === 'lipstick'){
                navigate('/lipstick')
            }
            if(element === 'mascara'){
                navigate('/mascara')
            }
            if(element === 'nailpolish'){
                navigate('/nailpolish')
            }
            if(element === 'foundation'){
                navigate('/foundation')
            }
            if(element === 'lipliner' || element === 'lipliners' || element === 'lip liner'){
                navigate('/lipliner')
            }
            if(element === 'almay'){
                navigate('/almay')
            }
            if(element === 'alva'){
                navigate('/alva')
            }
            if(element === 'annabelle' || element === 'annabell' || element === 'anabelle'){
                navigate('/annabelle')
            }
            if(element === 'benefit'){
                navigate('/benefit')
            }
            if(element === 'w3people' || element === 'wellpeople'){
                navigate('/w3people')
            }
            if(element === 'maybelline' || element === 'maybeline'){
                navigate('/maybeline')
            }
            if(element === 'bag'){
                navigate('/bag')
            }
            if(element === 'likes' || element === 'like'){
                navigate('/likes')
            }
            if(element === 'home'){
                navigate('/')
            }
        }
        else{
            alert('please enter something more than 3 characters')
        }
        setElement('')
    }

    return (
        <nav className='navbar'>
            <p>Get 10% off selected items when you spend £50 with code: YAY10 *Exclusions apply</p>
            <div className='navbar2'>
                <div className='navbar2part'>
                    <p>FREE Sheer Tinted Lip Balm when you spend £40 on By BEAUTY BAY</p>
                    <p>Ready, set, haul! These newbies belong in your collection</p>
                    <p>Download the app for exclusive offers and discounts!</p>
                </div>
                <Modal />
            </div>
            <div className='navbar3'>
                <img width={90} src={beautybayicon} alt="" />
                <form onSubmit={handleSearch}>
                    <input type="text" className='navbar3input' value={element} onChange={(e) => setElement(e.target.value)} placeholder='Search products, brands' />
                </form>
                <p className='navbar3p'>EDITED</p>
                <p className='navbar3p'>TRIBE</p>
                <div><PiTruckLight className='icon' /></div>
                <div><GoPerson className='icon' /></div>
                <div><NavLink to={'/likes'} ><CiHeart className='icon' /></NavLink></div>
                <div><NavLink className='link' to="/bag"><IoBagOutline className='icon' /></NavLink></div>
            </div>
            <div className='navbar4'>
                <NavLink className='link' to="/">By BEAUTY BAY</NavLink>
                <NavLink className='link' to="/blush">Blush</NavLink>
                <NavLink className='link' to="/bronzer">Bronzer</NavLink>
                <NavLink className='link' to="/eyebrow">Eyebrow</NavLink>
                <NavLink className='link' to="/eyeliner">Eyeliner</NavLink>
                <NavLink className='link' to="/eyeshadow">Eyeshadow</NavLink>
                <NavLink className='link' to="/foundation">Foundation</NavLink>
                <NavLink className='link' to="/lipliner">Lip liner</NavLink>
                <NavLink className='link' to="/lipstick">Lipstick</NavLink>
                <NavLink className='link' to="/mascara">Mascara</NavLink>
                <NavLink className='link' to="/nailpolish">Nail polish</NavLink>
            </div>
        </nav>
    )
}

export default Navbar