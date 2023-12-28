import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductPanierCard from './ProductPanierCard'
import { CreateOrder } from '../redux/slices/OrderSlice'

const Panier = () => {
  const {products}=useSelector(state=>state.panier)
  const dispatch=useDispatch()
  
  return (
    <div >{
      products.map((el)=><ProductPanierCard product={el}/>)
      }
      
  <button className='btnn' onClick={()=>dispatch(CreateOrder({productList:products}))}>Add Order</button>
        </div>
      
  )
}

export default Panier