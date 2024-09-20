import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/App';
import Tshirts from './Pages/Items/T shirts/App'
import Cricket from './Pages/Items/CricketShop/CricketShop'
import Contact from './Pages/Contact/ContactUs'
import Login from './Pages/LoginPage/LoginPage'
import Checkout from './Pages/Checkout/CheckoutPage'
import Rugby from './Pages/Items/Rugby/Rugby'
import About from './Pages/About/App'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Tshirts" element={<Tshirts />} />
        <Route path="Cricket" element={<Cricket />} />
        <Route path="Login" element={<Login/>} />
        <Route path="Checkout" element={<Checkout/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Rugby" element={<Rugby/>} />
        <Route path="About" element={<About/>} />
        </Routes>
    </Router>

  );
}

export default App;
