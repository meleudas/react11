import { drinks, pizzas } from '@/data/menu';
import type { MenuItem } from '@/types/menu';

export const menuItems: MenuItem[] = [...pizzas, ...drinks];
