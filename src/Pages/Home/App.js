import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import NewItems from './components/NewItems';
import Footer from './components/Footer';
import AdvertisementSection from './components/AdvertisementSection';

const App = () => {
  return (
    <div>
      <Header />
      <ProductList />
      
      <NewItems />
      <Footer />
    </div>
  );
};

export default App;
