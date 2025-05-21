import React from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext'; 
import { useNavigate } from 'react-router-dom'; 

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart(); 
  const navigate = useNavigate(); 

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0); 

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Кошик порожній. Додайте товари перед оформленням замовлення.');
      return;
    }

    navigate('/order');
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Кошик</h1>
      {cart.length === 0 ? (
        <p>Кошик порожній.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Розмір: {item.size || item.volume}</p>
                  <p>Тісто: {item.dough || 'Немає'}</p>
                  <p>Топінги: {item.toppings?.join(', ') || 'Немає'}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p>${item.price.toFixed(2)}</p>
                  <Button
                    onClick={() => removeFromCart(item.id)}
                    variant="destructive"
                    size="sm"
                  >
                    Видалити
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">Загальна сума: ${totalPrice.toFixed(2)}</p>
            <div className="space-x-2">
              <Button onClick={clearCart} variant="outline">
                Очистити кошик
              </Button>
              <Button onClick={handleCheckout}>Оформити замовлення</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;