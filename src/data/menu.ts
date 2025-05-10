// src/data/menu.ts
export interface Pizza {
  id: number;
  name: string;
  description: string;
  sizes: { small: number; medium: number; large: number };
  doughOptions: { traditional: number; thin: number };
  toppings: { [key: string]: number }; // Додаткові інгредієнти
}

export interface Drink {
  id: number;
  name: string;
  volumes: { [key: string]: number }; // Об'єми та ціни
}

export const pizzas: Pizza[] = [
  {
    id: 1,
    name: 'Пеппероні',
    description: 'Сир, пеппероні, томатний соус',
    sizes: { small: 10, medium: 15, large: 20 },
    doughOptions: { traditional: 0, thin: 1 },
    toppings: { cheese: 2, mushrooms: 1.5, sausage: 3 },
  },
  {
    id: 2,
    name: 'Маргарита',
    description: 'Сир, базилік, томатний соус',
    sizes: { small: 9, medium: 14, large: 18 },
    doughOptions: { traditional: 0, thin: 1 },
    toppings: { cheese: 2, mushrooms: 1.5, sausage: 3 },
  },
];

export const drinks: Drink[] = [
  { id: 1, name: 'Кола', volumes: { '0.33': 2, '0.5': 3, '1': 5 } },
  { id: 2, name: 'Сік', volumes: { '0.33': 3, '0.5': 4, '1': 6 } },
];