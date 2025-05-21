import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { drinks } from '../data/menu';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext'; 

const DrinkItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const drink = drinks.find((d) => d.id === Number(id));
  const { addToCart } = useCart(); 

  const [volume, setVolume] = useState<'0.33' | '0.5' | '1.0'>('0.33');

  if (!drink) {
    return <p>Напій не знайдено.</p>;
  }

  const totalPrice = drink.volumes[volume];

  const handleAddToCart = () => {
    const newItem = {
      id: drink.id,
      name: drink.name,
      volume,
      price: totalPrice,
    };

    addToCart(newItem); 
    navigate('/');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Card className="transition-transform hover:scale-[1.02] cursor-pointer bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{drink.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div>
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">Об'єм:</h3>
            <Select value={volume} onValueChange={(value) => setVolume(value as any)}>
              <SelectTrigger className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md">
                <SelectValue placeholder="Виберіть об'єм" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md">
                {Object.entries(drink.volumes).map(([vol, price]) => (
                  <SelectItem key={vol} value={vol}>
                    {vol} л (${price})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-lg font-semibold text-primary dark:text-primary">
            Загальна ціна: ${totalPrice}
          </p>


          <Button
            onClick={handleAddToCart}
            className="w-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300 rounded-md py-2"
          >
            Додати до кошика
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DrinkItem;