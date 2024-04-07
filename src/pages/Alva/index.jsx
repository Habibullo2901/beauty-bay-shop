import React from 'react'
import './Alva.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { MdOutlineStar } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import Footer from '../../components/Footer';
import { useDispatch } from 'react-redux';
import { addSelect } from '../../redux/actionsSlice';
import { addLike } from '../../redux/actionsSlice';


const Alva = () => {
  const [products, setProducts] = useState([])
  const [ isloading, setIsLoading ] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios('http://makeup-api.herokuapp.com/api/v1/products.json?brand=alva')
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
      <div className='almay'>
        <p>ALVA</p>
        <p className='almay_count'>{products && products.length} items</p>
        <div className='product-cards'>
          {
            products &&
            products.map(product => (
              <div className='product-cardcont' key={product.id}>
                <div className='blush-card' onClick={() => window.location.href = `/alva/${product.id}`}>
                  <img src={product.api_featured_image} alt="" />
                  <div><p className='brand'>{product.brand}</p> </div>
                  <p>{product.name}</p>
                  <p>{product.rating} <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></p>
                  <p>{product.price} {product.currency}</p>
                </div>
                <div className='like' onClick={() => handleLikeProduct(product)} > <IoHeart className='heart'  /></div>
                <button className='add-product' onClick={() => handleSelectProduct(product)}>Add to bag</button>
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

export default Alva