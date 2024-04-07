import React from 'react'
import './Almayproduct.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MdOutlineStar } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import Footer from '../../components/Footer';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { addSelect } from '../../redux/actionsSlice';
import { addLike } from '../../redux/actionsSlice';
import { useDispatch } from 'react-redux';

const Almayproduct = () => {
    const [product, setProduct] = useState(null)
    const { productId } = useParams();
    const [ isloading, setIsLoading ] = useState(false)

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


    console.log(product)
    return (
        isloading ? (
            <p className='loader'></p>
        )
        :
        (
        <div>
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
                                <p>{product.price} {product.currency}</p>
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

export default Almayproduct