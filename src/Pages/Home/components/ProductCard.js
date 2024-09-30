import React from 'react';
import './ProductCard.css'; // Card-specific styles

const ProductCard = ({ product }) => {
  return (
    <div className="product-card1">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>LKR {product.price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
