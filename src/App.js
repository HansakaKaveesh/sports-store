import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AdvertisementSection from './components/AdvertisementSection';

const App = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <AdvertisementSection />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
