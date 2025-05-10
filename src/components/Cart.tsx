// src/components/Cart.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // ShadCN UI

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]); // Замінити на конкретну структуру

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Кошик</h1>
      {cartItems.length === 0 ? (
        <p>Кошик порожній.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Загальна сума: ${totalPrice}</p>
          <Button onClick={() => alert('Оформлення замовлення...')}>
            Оформити замовлення
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;