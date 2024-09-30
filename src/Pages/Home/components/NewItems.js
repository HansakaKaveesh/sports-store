import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'; // Styles for grid layout

const products = [
  {
    id: 1,
    name: 'Indoor Volleyball',
    price: 120,
    image: '/Ball.jpg',
  },
  {
    id: 2,
    name: 'SS Prince Cricket Helmet',
    price: 6700,
    image: '/Crickect Helmet.jpg',
  },

  {
    id: 3,
    name: 'Adidas Running Shoes',
    price: 55550,
    image: '/Pro6.avif',
  },

  {
    id: 2,
    name: 'Pocket Sports Trousers',
    price: 150,
    image: '/Drawstring Waist Zipper Pocket Sports Trousers.jpg',
  },

  {
    id: 2,
    name: 'Adidas Running Shoes',
    price: 150,
    image: '/Pro4.png',
  },

  {
    id: 2,
    name: 'Adidas Running Shoes',
    price: 150,
    image: '/Pro3.jpg',
  },
  // Add more products
];

const ProductList = () => {
  return (
    <section className="product-list">
      <h2>New Items</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;