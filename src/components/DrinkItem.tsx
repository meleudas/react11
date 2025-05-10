// src/components/DrinkItem.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { drinks } from '../data/menu';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent}
  from "@/components/ui/card";
import { Button } from './ui/button'; 
import { Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from '@/components/ui/select';
const DrinkItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const drink = drinks.find((d) => d.id === Number(id));

  const [volume, setVolume] = useState<string>('0.33');

  if (!drink) {
    return <p>Напій не знайдено.</p>;
  }

  const price = drink.volumes[volume];

  const addToCart = () => {
    alert(`Додано до кошика: ${drink.name}, об'єм: ${volume} л, ціна: $${price}`);
    navigate('/');
  };

  return (
    <div className="p-4">
      <Card className="transition-transform hover:scale-[1.02] hover:bg-gray-50 cursor-pointer">
        <CardHeader>
          <CardTitle>{drink.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Об'єм:</h3>
            <Select value={volume} onValueChange={(value) => setVolume(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Виберіть об'єм" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(drink.volumes).map((v) => (
                  <SelectItem key={v} value={v}>
                    {v} л - ${drink.volumes[v]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p>Ціна: ${price}</p>
          <Button onClick={addToCart} className="w-full">
            Додати до кошика
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DrinkItem;