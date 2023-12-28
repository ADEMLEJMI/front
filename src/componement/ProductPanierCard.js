import React from 'react'

const ProductPanierCard = ({product}) => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
        <h2>name: {product.name}</h2>
        <h2>price: {product.price}</h2>
        
    </div>
  )
}

export default ProductPanierCard