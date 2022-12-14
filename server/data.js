import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name: 'Javier',
            email: 'admin@example.com',
            password: bcrypt.hashSync('128756'),
            isAdmin: true
        },
        {
            name: 'Carlos',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false

        },
    ],
    products: [ 
        {
            
            name: 'Nike Slim shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 11,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            //_id:'2',
            name: 'Adidas Fit Pant',
            slug: 'adidas-fit-pant',
            category: 'Pant',
            image: '/images/p4.jpg',
            price: 65,
            countInStock: 0,
            brand: 'Adidas',
            rating: 5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            //_id:'3',
            name: 'Nike Slim pant',
            slug: 'nike-slim-pant',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 35,
            countInStock: 19,
            brand: 'Nike',
            rating: 4.1,
            numReviews: 20,
            description: 'high quality product',
        },
        {
            //_id:'4',
            name: 'Adidas Fit Shirt',
            slug: 'adidas-fit-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 250,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
    ],
}

export default data;