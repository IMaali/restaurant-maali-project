// components/FoodMap.tsx
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFhbGk1NTMzIiwiYSI6ImNtOXBia2d5NzB4Nm8ybHNlaG5qZTd5NGsifQ.GyaGSUirO2Pn8gOLqQv6IA';

const FoodMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const foodItem = {
    name: 'nougat',
    lat: -47.1976,
    lng: -178.4445,
    description: `Quaerat quibusdam minima magni...`,
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [foodItem.lng, foodItem.lat],
      zoom: 4,
    });

    new mapboxgl.Marker()
      .setLngLat([foodItem.lng, foodItem.lat])
      .setPopup(new mapboxgl.Popup().setText(foodItem.name)) // Optional popup
      .addTo(map);

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} className="w-full h-[500px]" />;
};

export default FoodMap;
