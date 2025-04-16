import { MenuItem } from '../types/menu';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  const res = await fetch(`${BASE_URL}/api/menu/all`);
  if (!res.ok) throw new Error('Failed to fetch menu');
  return res.json();
};
