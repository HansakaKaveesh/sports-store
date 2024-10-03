import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'; // Styles for grid layout

const products = [
  {
    id: 1,
    name: 'Nike Air Max 270 500',
    price: 120,
    image: '/Pro1.jpg',
  },
  {
    id: 2,
    name: 'Adidas Running Shoes',
    price: 150,
    image: '/Pro2.jpg',
  },

  {
    id: 3,
    name: 'Adidas Running Shoes',
    price: 55550,
    image: '/Pro5.png',
  },

  {
    id: 4,
    name: 'Adidas Running Shoes',
    price: 150,
    image: '/Pro5.png',
  },

  {
    id: 5,
    name: 'Adidas Running Shoes',
    price: 150,
    image: '/Pro4.png',
  },

  {
    id: 6,
    name: 'Adidas Running Shoes',
    price: 150,
    image: '/Pro3.jpg',
  },
  // Add more products
];

const ProductList = () => {
  return (
    <section className="product-list">
      <h2>Most Popular Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
