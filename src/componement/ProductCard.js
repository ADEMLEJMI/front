import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductpanier } from '../redux/slices/PanierSlice'

const ProductCard = ({product}) => {
    const dispatch=useDispatch()
  return (
    <div className='card1'>
    <div className='Card'><h3>{product.name}</h3>
    <img    src={product.poster} alt='image product not found'></img>
    <h3 className='des'>{product.description}</h3>
    <h3 className='price'>Price:{product.price}</h3>
    <button onClick={()=>{dispatch(addProductpanier(product))}}>Add to Cart</button>
    
    </div>
    </div>
  )
}

export default ProductCard