import React from 'react';
import './Products.css';

const products = [
  { id: 1, image: "/tshirt1.png", name: "T Shirt Men Solid Color", price: "$135" },
  { id: 2, image: "/tshirt2.png", name: "La Sportiva T Shirt", price: "$142" },
  { id: 3, image: "/tshirt3.png", name: "Quick Dry Men Running T-shirt", price: "$122" },
  { id: 4, image: "/tshirt4.png", name: "2024 New Tennis Jersey", price: "$120" },
  { id: 5, image: "/tshirt5.png", name: "Running Sports Tops Men's Compression Shirt", price: "$110" },
  { id: 6, image: "/jacket.png", name: "Adidas - Sportswear Basic 3-Stripes Tricot", price: "$120" },
  { id: 7, image: "/adidas-doodle.png", name: "Adidas Men Doodle Fill T-Shirt", price: "$105" },
  { id: 8, image: "/sports-jersey.png", name: "Sportswear Training Jersey", price: "$150" }
];

const ProductGrid = () => {
  return (
    <main className="product-grid">
      <h2>T-Shirts</h2>
      <div className="product-grid-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductGrid;
