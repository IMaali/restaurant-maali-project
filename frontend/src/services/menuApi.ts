import { MenuItem } from '../types/menu';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  const res = await fetch(`${BASE_URL}/api/menu/all`);
  if (!res.ok) throw new Error('Failed to fetch menu');
  return res.json();
};



export const fetchItemsByCategory = async (category: string): Promise<MenuItem[]> => {
  const res = await fetch(`${BASE_URL}/api/menu/filter?category=${category}`, {});
  if (!res.ok) throw new Error('Failed to fetch menu items');
  return res.json();
};



export const fetchItemsByName = async (name: string): Promise<MenuItem[]> => {
  const res = await fetch(`${BASE_URL}/api/menu/filter?name=${name}`, {});
  if (!res.ok) throw new Error('Failed to fetch menu items');
  return res.json();
};



export const fetchItemsByDescrip = async (description: string): Promise<MenuItem[]> => {
  const res = await fetch(`${BASE_URL}/api/menu/filter?description=${description}`, {});
  if (!res.ok) throw new Error('Failed to fetch menu items');
  return res.json();
};




