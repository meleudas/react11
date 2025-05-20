export interface Pizza {
  id: number;
  name: string;
  description: string;
  sizes: {
    small: number;
    medium: number;
    large: number;
  };
  doughOptions: {
    traditional: number;
    thin: number;
  };
  toppings: Record<string, number>;
}

export interface Drink {
  id: number;
  name: string;
  volumes: Record<string, number>;
}

export type MenuItem = Pizza | Drink;
