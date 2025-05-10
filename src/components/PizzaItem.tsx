// src/components/PizzaItem.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { pizzas } from '../data/menu';
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
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'; // ShadCN UI
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';


const PizzaItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pizza = pizzas.find((p) => p.id === Number(id));

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

  const addToCart = () => {
    alert(`Додано до кошика: ${pizza.name}, ціна: $${totalPrice}`);
    navigate('/');
  };

  return (
    <div className="p-4">
      <Card className="transition-transform hover:scale-[1.02] hover:bg-gray-50 cursor-pointer">
        <CardHeader>
          <CardTitle>{pizza.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{pizza.description}</p>

          {/* Вибір розміру */}
          <div>
            <h3 className="font-semibold">Розмір:</h3>
            <Select value={size} onValueChange={(value) => setSize(value as any)}>
              <SelectTrigger>
                <SelectValue placeholder="Виберіть розмір" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Мала (${pizza.sizes.small})</SelectItem>
                <SelectItem value="medium">Середня (${pizza.sizes.medium})</SelectItem>
                <SelectItem value="large">Велика (${pizza.sizes.large})</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Вибір типу тіста */}
          <div>
            <h3 className="font-semibold">Тісто:</h3>
            <RadioGroup value={dough} onValueChange={(value) => setDough(value as any)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="traditional" id="traditional" />
                <Label htmlFor="traditional">
                  Традиційне (+${pizza.doughOptions.traditional})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="thin" id="thin" />
                <Label htmlFor="thin">Тонке (+${pizza.doughOptions.thin})</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Додаткові інгредієнти */}
          <div>
            <h3 className="font-semibold">Додаткові інгредієнти:</h3>
            {Object.keys(pizza.toppings).map((topping) => (
              <div key={topping} className="flex items-center space-x-2">
                <Checkbox
                  checked={toppings.includes(topping)}
                  onCheckedChange={(checked) =>
                    checked
                      ? setToppings([...toppings, topping])
                      : setToppings(toppings.filter((t) => t !== topping))
                  }
                />
                <Label>{`${topping} (+$${pizza.toppings[topping]})`}</Label>
              </div>
            ))}
          </div>

          {/* Загальна ціна */}
          <p>Загальна ціна: ${totalPrice}</p>

          {/* Кнопка "Додати до кошика" */}
          <Button onClick={addToCart} className="w-full">
            Додати до кошика
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PizzaItem;