// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; // Іконка кошика
import { Button } from '@/components/ui/button'; // ShadCN UI

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-red-500">
        Піцерія
      </Link>
      <div className="flex space-x-4">
        <Link to="/cart">
          <Button variant="outline" className="flex items-center space-x-2">
            <ShoppingCart size={20} />
            <span>Кошик</span>
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;