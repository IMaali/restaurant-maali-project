import { useEffect, useState } from 'react';
import { fetchMenuItems } from '../services/menuApi';
import { MenuItem } from '../types/menu';

export default function HomePage() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenuItems()
      .then(setMenu)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Menu</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {menu.map(item => (
            <li key={item.id}>
              <strong>{item.name}</strong> - ${item.price}
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
