
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input'; 
import { Textarea } from '@/components/ui/textarea'; 
import { useCart } from '@/contexts/CartContext'; 
import { toast } from 'sonner'; 

const OrderForm: React.FC = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart(); 

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comment: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      address: '',
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Ім’я є обов’язковим полем.';
      isValid = false;
    }

    if (!formData.phone.trim() || !/^\+?\d+$/.test(formData.phone)) {
      newErrors.phone = 'Номер телефону повинен бути дійсним.';
      isValid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Адреса доставки є обов’язковим полем.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return; 
    }

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrder = {
      items: cart,
      customer: formData,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      date: new Date().toISOString(),
    };
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));

    toast.success('Замовлення успішно оформлено!', {
      description: `Дякуємо, ${formData.name}! Очікуйте доставку.`,
    });

    clearCart(); 
    navigate('/'); 
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">Оформлення замовлення</h1>

      <div className="space-y-2">
        <h2 className="font-semibold">Ваше замовлення:</h2>
        {cart.length === 0 ? (
          <p>Кошик порожній.</p>
        ) : (
          <ul className="space-y-1">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="font-bold">
          Загальна сума: ${totalPrice.toFixed(2)}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Ваше ім'я"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <Input
          type="tel"
          placeholder="Номер телефону"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={`w-full ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <Input
          type="text"
          placeholder="Адреса доставки"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className={`w-full ${
            errors.address ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address}</p>
        )}

        <Textarea
          placeholder="Додатковий коментар (необов'язково)"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          className="w-full"
        />

        <Button
          type="submit"
          className="w-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300 rounded-md py-2"
        >
          Підтвердити замовлення
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;