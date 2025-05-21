// src/components/PizzaItem.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { pizzas } from '../data/menu';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '@/contexts/CartContext'; 

const PizzaItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pizza = pizzas.find((p) => p.id === Number(id));
  const { addToCart } = useCart(); 

  const [size, setSize] = useState<'small' | 'medium' | 'large'>('small');
  const [dough, setDough] = useState<'traditional' | 'thin'>('traditional');
  const [toppings, setToppings] = useState<string[]>([]);

  if (!pizza) {
    return <p>Піцу не знайдено.</p>;
  }

  const totalPrice =
    pizza.sizes[size] +
    pizza.doughOptions[dough] +
    toppings.reduce((sum, topping) => sum + pizza.toppings[topping], 0);

  const handleAddToCart = () => {
    const newItem = {
      id: pizza.id,
      name: pizza.name,
      size,
      dough,
      toppings,
      price: totalPrice,
    };

    addToCart(newItem); 
    navigate('/');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Card className="transition-transform hover:scale-[1.02] cursor-pointer bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{pizza.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300">{pizza.description}</p>

          <div>
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">Розмір:</h3>
            <Select value={size} onValueChange={(value) => setSize(value as any)}>
              <SelectTrigger className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md">
                <SelectValue placeholder="Виберіть розмір" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md">
                <SelectItem value="small" className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  Мала (${pizza.sizes.small})
                </SelectItem>
                <SelectItem value="medium" className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  Середня (${pizza.sizes.medium})
                </SelectItem>
                <SelectItem value="large" className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  Велика (${pizza.sizes.large})
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">Тісто:</h3>
            <RadioGroup
              value={dough}
              onValueChange={(value) => setDough(value as any)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="traditional"
                  id="traditional"
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
                <Label htmlFor="traditional" className="text-gray-600 dark:text-gray-300">
                  Традиційне (+${pizza.doughOptions.traditional})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="thin"
                  id="thin"
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
                <Label htmlFor="thin" className="text-gray-600 dark:text-gray-300">
                  Тонке (+${pizza.doughOptions.thin})
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">
              Додаткові інгредієнти:
            </h3>
            {Object.keys(pizza.toppings).map((topping) => (
              <div key={topping} className="flex items-center space-x-2">
                <Checkbox
                  checked={toppings.includes(topping)}
                  onCheckedChange={(checked) =>
                    checked
                      ? setToppings([...toppings, topping])
                      : setToppings(toppings.filter((t) => t !== topping))
                  }
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
                <Label className="text-gray-600 dark:text-gray-300">
                  {`${topping} (+$${pizza.toppings[topping]})`}
                </Label>
              </div>
            ))}
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

export default PizzaItem;