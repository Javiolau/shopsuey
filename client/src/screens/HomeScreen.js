import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import data from '../data'

const reducer = (state,action) => {
  switch(action.type) {
    case 'FETCH_REQUEST': 
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return{...state, products: action.payload, loading: false};
    case 'FETCH_FAIL':
      return{...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

export default function HomeScreen() {
  //const [products, setProducts] = useState([]);

  const [{loading, error, products}, dispatch] = useReducer(reducer, {
    products: [],    
    loading: true,
    error: '',
  })

  useEffect(()=>{
    const fetchData = async () => {

      dispatch({type: 'FETCH_REQUEST'});
      try{
        const result = await axios.get('/api/products');
        dispatch({type: 'FETCH_SUCCESS', payload: result.data});
      }catch(err){
        dispatch({type: 'FETCH_FAIL', payload: err.message});
      }

      const result = await axios.get('/api/products');
      //setProducts(result.data);
    };
    fetchData();
  },[]);
  
  return (
    <div>
        <h1>New Products</h1>
        <div className='products'>
          {loading ? ( 
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            products.map((product) => (
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
          
            ))
          )}
          
        </div>
    </div>
  )
}
