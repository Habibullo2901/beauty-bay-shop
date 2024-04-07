import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../components/Footer'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addSelect } from '../../redux/actionsSlice';
import { removeLike } from '../../redux/actionsSlice';
import { IoHeartDislike } from "react-icons/io5";

const Likes = () => {
  const likes = useSelector(state => state.actions.likes)

  const dispatch = useDispatch()
  const handleLikeProduct = (id) => {
    dispatch(removeLike(id))
  }

  const handleSelectProduct = (product) => {
    dispatch(addSelect(product))
  }

  return (
    <div>
      <div className='blush'>
        <p>Likes</p>
        <p className='blush_count'>{likes && likes.length} items</p>
        <div className='blush-cards'>
          {
            likes &&
            likes.map(product => (
              <div className='product-cardcont' key={product.id}>
                <div className='blush-card' onClick={() => window.location.href = `/blush/${product.id}`}>
                  <img src={product.api_featured_image} alt="" />
                  <div><p className='brand'>{product.brand}</p> </div>
                  <p>{product.name}</p>
                  <p>{product.rating} <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></p>
                  <p>{product.price} {product.currency}</p>
                </div>
                <div className='like' onClick={() => handleLikeProduct(product.id)} ><IoHeartDislike className='heart' onClick={() => handleLikeProduct(product.id)} /></div>
                <button className='add-product' onClick={ () => handleSelectProduct(product)}>Add to bag</button>
              </div>
            ))
          }
        </div>
        <p className='almay_count2'>{likes && likes.length} of {likes && likes.length} items</p>
      </div>
      <Footer />
    </div>
  )
}

export default Likes