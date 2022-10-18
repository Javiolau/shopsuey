import React from 'react'
import data from '../data'

export default function HomeScreen() {
  return (
    <div>
        <h1>New Products</h1>
        <div className='products'>
          {data.products.map((product) => (
            <div key={product.slug} className='product' >
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt = {product.name}/>
              </a>
              <div className='product-info'>
                <p><strong>${product.price}</strong></p>
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <button>Add to Cart</button>
              </div>
            </div>
        
           ))}
        </div>
    </div>
  )
}
