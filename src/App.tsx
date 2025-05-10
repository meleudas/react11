// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import PizzaItem from './components/PizzaItem';
import DrinkItem from './components/DrinkItem';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/pizza/:id" element={<PizzaItem />} />
          <Route path="/drink/:id" element={<DrinkItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;