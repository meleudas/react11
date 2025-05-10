// src/components/OrderForm.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // ShadCN UI
import { Input } from '@/components/ui/input'; // ShadCN UI
import { Textarea } from '@/components/ui/textarea'; // ShadCN UI

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Замовлення оформлено!\nІм'я: ${formData.name}\nТелефон: ${formData.phone}\nАдреса: ${formData.address}\nКоментар: ${formData.comment}`);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Оформлення замовлення</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Ваше ім'я"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          placeholder="Номер телефону"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          placeholder="Адреса доставки"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <Textarea
          placeholder="Додатковий коментар (необов'язково)"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
        <Button type="submit" className="w-full">
          Підтвердити замовлення
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;