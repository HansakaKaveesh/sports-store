import React from 'react';
import './Products.css';

const products = [
  { id: 1, image: "/Tshirt1.jpg", name: "T Shirt Men Solid Color", price: "Rs 135.00" },
  { id: 2, image: "/Tshirt2.jpg", name: "Men La Sportiva T Shirt", price: "$142" },
  { id: 3, image: "/Tshirt3.jpg", name: "Quick Dry Men Running T-shirt", price: "$122" },
  { id: 4, image: "/Tshirt4.jpg", name: "2024 New Tennis Jersey", price: "$120" },
  { id: 5, image: "/Tshirt5.jpg", name: "Tops Men's Compression Shirt", price: "$110" },
  { id: 6, image: "/Tshirt6.jpeg", name: "Sportswear Basic 3-Stripes Tricot", price: "$120" },
  { id: 7, image: "/Tshirt7.png", name: "Adidas Men Doodle Fill T-Shirt", price: "$105" },
  { id: 8, image: "/Tshirt4.jpg", name: "2024 New Tennis Jersey", price: "$120" },
  { id: 9, image: "/Tshirt8.avif", name: "Sportswear Training Jersey", price: "$150" },
  { id: 10, image: "/Tshirt2.jpg", name: "Men La Sportiva T Shirt", price: "$142" },
  { id: 11, image: "/Tshirt1.jpg", name: "T Shirt Men Solid Color", price: "$135" },
  { id: 12, image: "/Tshirt7.png", name: "Adidas Men Doodle Fill T-Shirt", price: "$105" },
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
