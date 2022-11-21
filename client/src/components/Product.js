import React, { useContext } from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Store } from '../Store'

export default function Product(props) {
  const {product} = props;

  const {state, dispatch: cxtDispatch} = useContext(Store);
  const addToCartHandler = () => {
    cxtDispatch({
      type: 'CART_ADD_ITEM',
      payload: {...product, quantity: 1},
    });
  }

  return (    
    <Card key={product.slug}>
        <Link to={`/product/${product.slug}`}>
            <img src={product.image} className="card-img-top" alt = {product.name}/>
        </Link>
        <Card.Body>
            <Link to={`/product/${product.slug}`}>
              <Card.Title>{product.name}</Card.Title>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <Card.Text>${product.price}</Card.Text>
            <Button onClick={product.countInStock > 0 ? addToCartHandler : null}>Add to cart</Button>
        </Card.Body>        
    </Card>
  )
}
