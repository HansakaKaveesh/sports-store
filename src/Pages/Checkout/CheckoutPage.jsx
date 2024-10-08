import axios from 'axios';
import React, { useEffect, useState } from 'react';

const WooCommerceAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://your-woocommerce-store.com/wp-json/wc/v3/products',
          {
            auth: {
              username: 'your_consumer_key',
              password: 'your_consumer_secret'
            }
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>WooCommerce Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WooCommerceAPI;
