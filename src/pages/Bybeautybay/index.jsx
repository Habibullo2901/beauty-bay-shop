import React from 'react'
import herobanner from '../Bybeautybay/Herobanner.jpg'
import './Bybeautybay.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaCaretRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import almaylogo from '../Bybeautybay/almay.png'
import alvalogo from '../Bybeautybay/alva.png'
import anabellalogo from '../Bybeautybay/anabelle.png'
import benefitlogo from '../Bybeautybay/benefit.png'
import maybeline from '../Bybeautybay/maybeline.png'
import wellpeoplelogo from '../Bybeautybay/wellpeople.png'
import Footer from '../../components/Footer';

const Bybeautybay = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then(response => response.data)
      .then(data => setProducts(data))
  }, [])
  console.log(products)


  http://makeup-api.herokuapp.com/api/v1/products.json
  return (
    <>
      <div className='hero'>
        <img src={herobanner} width={939} height={586} alt="" />
        <div className='hero-list'>
          <p>OUR SPRING SALE IS ENDING...</p>
          <p>Bag your beauty essentials for less, while you still can!</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className='cards-container'>
        <div className='card' onClick={() => navigate('/blush')}>
          <img className='card-img' width={440} src="https://images.ctfassets.net/eoaaqxyywn6o/4FUZGa67ZaOqtjhXPiR1vj/33847addd23900e454228b210ef09b98/Trading_Trio-UK.jpeg" alt="" />
          <div className="myDIV">Minimal effort, maximum glow</div>
          <div className="hide" >Prepare for radiant results with the By BEAUTY BAY Liquid Highlighters</div>
          <button>Shop Now<FaCaretRight /></button>
        </div>
        <div className='card' onClick={() => navigate('/foundation')}>
          <img className='card-img' width={440} src="https://images.ctfassets.net/eoaaqxyywn6o/1MT6RjAqNOxjX0mPzbgyZD/d0de538a559b3d66fd59c5a417105298/Trading_Trio.jpeg" alt="" />
          <div className="myDIV">me-time musts</div>
          <div className="hide" >Prepare for radiant results with the By BEAUTY BAY Liquid Highlighters</div>
          <button>Shop Now<FaCaretRight /></button>
        </div>
        <div className='card' onClick={() => navigate('/lipstick')}>
          <img className='card-img' width={440} src="https://images.ctfassets.net/eoaaqxyywn6o/1vjJPtV6aolqvDAYy7ljja/95e815be8ecfe54742b04bf26cd8aaae/Trading_Trio_Full_Face.jpg" alt="" />
          <div className="myDIV">TikTok trending and totally worth it</div>
          <div className="hide" >Prepare for radiant results with the By BEAUTY BAY Liquid Highlighters</div>
          <button>Shop Now<FaCaretRight /></button>
        </div>
      </div>
      <div className='brands'>
        <p>SHOP BY BRANDS</p>
        <div className='brands-container'>
          <div onClick={() => navigate('/almay')}><div className='almay'><img width={265} src={almaylogo} alt="" /></div><p>ALMAY</p></div>
          <div onClick={() => navigate('/alva')}><div className='alva'><img width={265} height={265} src={alvalogo} alt="" /></div><p>ALVA</p></div>
          <div onClick={() => navigate('/anabelle')} ><div className='anabella'><img  width={265}  src={anabellalogo} alt="" /></div><p>ANABELLE</p></div>
          <div onClick={() => navigate('/benefit')} ><div className='benefit'><img width={265} height={265}  src={benefitlogo} alt="" /></div><p>BENEFIT</p></div>
          <div onClick={() => navigate('/maybeline')} ><div className='maybeline'><img  width={265} height={265} src={maybeline} alt="" /></div><p>MAYBELINE</p></div>
          <div onClick={() => navigate('/w3people')} ><div className='wellpeople'><img  width={265} height={265} src={wellpeoplelogo} alt="" /></div><p>W3LLPEOPLE</p></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Bybeautybay