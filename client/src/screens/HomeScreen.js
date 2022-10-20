import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

export default function HomeScreen() {
  return (
    <div>
        <h1>New Products</h1>
        <div className='products'>
          {data.products.map((product) => (
            <div key={product.slug} className='product' >
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt = {product.name}/>
              </Link>
              <div className='product-info'>
                <p><strong>${product.price}</strong></p>
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <button>Add to Cart</button>
              </div>
            </div>
        
           ))}
        </div>
    </div>
  )
}
