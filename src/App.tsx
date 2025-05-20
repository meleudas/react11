// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import PizzaItem from './components/PizzaItem';
import DrinkItem from './components/DrinkItem';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { ThemeProvider } from 'next-themes'; // Імпорт ThemeProvider
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider attribute="class">
         <CartProvider>
       <div className="min-h-screen bg-background text-foreground flex flex-col theme-transition">
     
        <Navbar />
        
        <Routes>
          <Route path="/" element={<><Header /><Menu /></>} />
          <Route path="/pizza/:id" element={<PizzaItem />} />
          <Route path="/drink/:id" element={<DrinkItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderForm />} />
        </Routes>
        <Footer />
      </div>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;