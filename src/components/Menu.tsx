// src/components/Menu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { pizzas, drinks } from '../data/menu';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // ShadCN UI

const Menu: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">Меню</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Піца</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pizzas.map((pizza) => (
            <Link key={pizza.id} to={`/pizza/${pizza.id}`} className="block">
              <Card className="transition-transform hover:scale-[1.02] hover:bg-gray-50 cursor-pointer">
                <CardHeader>
                  <CardTitle>{pizza.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{pizza.description}</p>
                  <p>Від ${pizza.sizes.small}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Напої</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {drinks.map((drink) => (
            <Link key={drink.id} to={`/drink/${drink.id}`} className="block">
              <Card className="transition-transform hover:scale-[1.02] hover:bg-gray-50 cursor-pointer">
                <CardHeader>
                  <CardTitle>{drink.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Об'єми:</p>
                  {Object.entries(drink.volumes).map(([volume, price]) => (
                    <p key={volume}>
                      {volume} л - ${price}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;