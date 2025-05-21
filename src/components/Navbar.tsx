"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/contexts/ModeToggle";
import { useCart } from "@/contexts/CartContext"; 

const Navbar: React.FC = () => {
  const { cart } = useCart(); 

  return (
    <nav className="bg-background text-foreground shadow-md p-4 sticky top-0 z-10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors duration-300">
          <Label className="text-xl">Піцерія 🍕</Label>
        </Link>

        <ModeToggle />

        <Link to="/cart" className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <ShoppingCart size={18} />
            <Label>Кошик ({cart.length})</Label>
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;