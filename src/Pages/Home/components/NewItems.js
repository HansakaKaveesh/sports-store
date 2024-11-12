import React, { useState } from 'react';
import './ProductList.css'

// Sample data for products
const products = [
  { id: 1, title: "Product A", description: "High-quality product A", price: 49.99, discount: 10, image: "" },
  { id: 2, title: "Product B", description: "Premium product B", price: 59.99, discount: 15, image: "/images/product-b.jpg" },
  { id: 3, title: "Product C", description: "Popular product C", price: 69.99, discount: 20, image: "/images/product-c.jpg" },
  { id: 4, title: "Product C", description: "Popular product C", price: 69.99, discount: 20, image: "/images/product-c.jpg" },
  { id: 5, title: "Product C", description: "Popular product C", price: 69.99, discount: 20, image: "/images/product-c.jpg" },
];

const PopularProducts = () => {
  const [cart, setCart] = useState([]);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <section className="popular-products">
      <h2>New Items</h2>
      <div className="product-grid">
        {products.map((product) => {
          const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);

          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="price-info">
                <span className="original-price">${product.price.toFixed(2)}</span>
                <span className="discounted-price">${discountedPrice}</span>
              </div>
              <span className="discount-tag">{product.discount}% OFF</span>
              <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
