import React from 'react'
import './Foundation.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { MdOutlineStar } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import Footer from '../../components/Footer';
import { useDispatch } from 'react-redux';
import { addSelect } from '../../redux/actionsSlice';
import { addLike } from '../../redux/actionsSlice';
import { useSelector } from 'react-redux';

const Foundation = () => {
  const [ region, setRegion ] = useState(localStorage.getItem('country'))
  const country = useSelector(state => state.actions.region)
  console.log(country)
  useEffect(() => {
    setRegion(country)
  }, [country])

  const [products, setProducts] = useState([])
  const [ isloading, setIsLoading ] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation')
      .then(response => response.data)
      .then(data => setProducts(data))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }, [])

  const dispatch = useDispatch()
  const handleLikeProduct = (product) => {
    dispatch(addLike(product))
  }

  const handleSelectProduct = (product) => {
    dispatch(addSelect(product))
  }

  return (
  isloading ? (
    <p className='loader'></p>
  )
  : (
    <div>
      <div className='blush'>
        <p>Foundation</p>
        <p className='blush_count'>{products && products.length} items</p>
        <div className='blush-cards'>
          {
            products &&
            products.map(product => (
              <div className='product-cardcont' key={product.id}>
                <div className='blush-card' onClick={() => window.location.href = `/foundation/${product.id}`}>
                  <img src={product.api_featured_image} alt="" />
                  <div><p className='brand'>{product.brand}</p> </div>
                  <p>{product.name}</p>
                  <p>{product.rating} <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></p>
                  <p>{region === 'usa' ? product.price : region === 'uzbekistan' ? (product.price * 12600) : region === 'russia' ? (product.price * 92) : (product.price)} {region === 'usa' ? 'USD' : region === 'uzbekistan' ? 'UZS' : region === 'russia' ? 'RUB' : ''}</p>
                </div>
                <div className='like' onClick={() => handleLikeProduct(product)} ><IoHeart className='heart' onClick={() => handleLikeProduct(product)} /></div>
                <button className='add-product' onClick={ () => handleSelectProduct(product)}>Add to bag</button>
              </div>
            ))
          }
        </div>
        <p className='almay_count2'>{products && products.length} of {products && products.length} items</p>
      </div>
      <Footer />
    </div>
  ))
}

export default Foundation