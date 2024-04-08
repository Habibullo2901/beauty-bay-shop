import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MdOutlineStar } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import Footer from '../../components/Footer';
import { BsFillInfoCircleFill } from "react-icons/bs";
import './Maybellineproduct.css'
import { addSelect } from '../../redux/actionsSlice';
import { addLike } from '../../redux/actionsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Maybelineproduct = () => {
    const navigate = useNavigate();
    const [ region, setRegion ] = useState(localStorage.getItem('country'))
    const country = useSelector(state => state.actions.region)
    console.log(country)
    useEffect(() => {
      setRegion(country)
    }, [country])
    const [product, setProduct] = useState(null)
    const [ isloading, setIsLoading ] = useState(false)
    const { productId } = useParams();
    // console.log(productId)

    useEffect(() => {
        setIsLoading(true)
        axios(`http://makeup-api.herokuapp.com/api/v1/products/${productId}.json`)
            .then(response => response.data)
            .then(data => setProduct(data))
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
    :
    (
    <div>
    <p className='back' onClick={() => navigate(-1)}>back</p>
        <div className='anabelle-productview'>
            {
                  product && (
                    <div className='product-view'>
                        <img src={product.api_featured_image} alt="" />
                        <div className='product-details'>
                            <p>ONLY AT BEAUTY BAY</p>
                            <p>{product.brand}</p>
                            <p>{product.name}</p>
                            <p>{product.rating} <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></p>
                            <p>{region === 'usa' ? product.price : region === 'uzbekistan' ? (product.price * 12600) : region === 'russia' ? (product.price * 92) : (product.price)} {region === 'usa' ? 'USD' : region === 'uzbekistan' ? 'UZS' : region === 'russia' ? 'RUB' : ''}</p>
                            <p>{product.description}</p>
                            <p>Free delivery available <BsFillInfoCircleFill /></p>
                            <div className='add-to-bag'><button className='add-product' onClick={() => handleSelectProduct(product)}>Add to bag</button> <button onClick={() => handleLikeProduct(product)} className='like-product'><IoHeart className='like' /></button></div>
                        </div>
                    </div>
                )
            }
        </div>
        <Footer />
    </div>
  ))
}

export default Maybelineproduct