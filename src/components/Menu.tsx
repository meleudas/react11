// src/components/Menu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// ShadCN UI
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';

// Дані
import { pizzas, drinks } from '../data/menu';

const Menu: React.FC = () => {
  return (
    <div className="p-4 space-y-8 max-w-6xl mx-auto">
      {/* Заголовок меню */}
      <Label className="text-3xl font-bold text-center">Меню</Label>

      {/* Піца */}
      <section>
        <Label className="text-2xl font-semibold mb-4">Піца</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {pizzas.map((pizza, index) => {
            const spanMap = ['col-span-1 row-span-1', 'col-span-1 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1'];
            const span = spanMap[index % spanMap.length];
            return (
              <motion.div
                key={pizza.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`${span} h-full`}
              >
                <Link to={`/pizza/${pizza.id}`}>
                  <Card className="w-full bg-card text-card-foreground rounded-xl shadow-sm flex flex-col h-full">
                    {/* Верхня частина картки */}
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-xl font-bold">{pizza.name}</CardTitle>
                    </CardHeader>

                    {/* Нижня частина картки */}
                    <CardContent className="px-4 pb-4 space-y-2">
                      {/* Опис */}
                      <div>
                        <span className="text-muted-foreground text-sm">Опис:</span>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">{pizza.description}</p>
                      </div>

                      {/* Ціни */}
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-lg font-semibold text-primary">${pizza.sizes.small.toFixed(2)}</span>
                        <span className="text-gray-500 dark:text-gray-400">Рейтинг: { 0}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Напої */}
      <section>
        <Label className="text-2xl font-semibold mb-4">Напої</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(120px,_auto)]">
          {drinks.map((drink, index) => {
            const spanMap = ['col-span-1 row-span-1', 'col-span-1 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1'];
            const span = spanMap[index % spanMap.length];
            return (
              <motion.div
                key={drink.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`${span} h-full`}
              >
                <Link to={`/drink/${drink.id}`}>
                  <Card className="w-full bg-card text-card-foreground rounded-xl shadow-sm flex flex-col h-full">
                    {/* Верхня частина картки */}
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-xl font-bold">{drink.name}</CardTitle>
                    </CardHeader>

                    {/* Нижня частина картки */}
                    <CardContent className="px-4 pb-4 space-y-2">
                      {/* Об'єми */}
                      <div>
                        <span className="text-muted-foreground text-sm">Об'єми:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {Object.entries(drink.volumes).map(([volume, price]) => (
                            <Label
                              key={volume}
                              className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs"
                            >
                              {volume} л - ${price}
                            </Label>
                          ))}
                        </div>
                      </div>

                      {/* Ціна та рейтинг */}
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-lg font-semibold text-primary">${drink.volumes['0.33']?.toFixed(2) || 0}</span>
                        <span className="text-gray-500 dark:text-gray-400">Рейтинг: {0}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Menu;