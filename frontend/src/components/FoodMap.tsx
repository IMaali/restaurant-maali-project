import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFhbGk1NTMzIiwiYSI6ImNtOXBia2d5NzB4Nm8ybHNlaG5qZTd5NGsifQ.GyaGSUirO2Pn8gOLqQv6IA";

const FoodMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const foodItems = [
    {
      name: "Branch 1",
      lat: 24.658,
      lng: 46.7314,
    },
    {
      name: "Branch 2",
      lat: 24.7131,
      lng: 46.8021,
    },
    {
      name: "Branch 3",
      lat: 24.7136,
      lng: 46.6753,
    },
    {
      name: "Branch 4",
      lat: 24.6443,
      lng: 46.7931,
    },
    {
      name: "Branch 5",
      lat: 24.7523,
      lng: 46.7299,
    },
    {
      name: "Branch 6",
      lat: 24.8034,
      lng: 46.7402,
    },
  ];

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/light-v11",
      center: [46.6753, 24.7136],
      zoom: 10.5,
    });

    // Add markers and popups
    foodItems.forEach((item, index) => {
      const popupId = `popup-btn-${index}`;

      const popupHtml = `
        <div style="display: flex; padding: 8px; border-radius: 10px; background-color: white; align-items: flex-start; width: 230px; height: 130px;">
          <img src="/Mask.svg" alt="${item.name}" style="width: 80px; height: 90px; border-radius: 5px; margin-right: 10px;" />
          <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; flex: 1;">
            <h3 style="font-size: 16px; margin-top: 18px; margin-left: 5px; color: #333;">${item.name}</h3>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <p style="font-size: 14px; color: #808080; margin-bottom: 5px;">Menu list</p>
              <button id="${popupId}" style="background-color: #F4CBDF; padding: 6px 10px; display: flex; align-items: center; border: none; border-radius: 5px; cursor: pointer;">
                <img src="/chevron.svg" alt="Chevron" style="width: 10px; height: 10px;" />
              </button>
            </div>
          </div>
        </div>
      `;

      const popup = new mapboxgl.Popup({ closeButton: false }).setHTML(popupHtml);

      const marker = new mapboxgl.Marker({ color: "black" })
        .setLngLat([item.lng, item.lat])
        .setPopup(popup)
        .addTo(map);

      marker.getElement().addEventListener("click", () => {
        // Wait until the popup is rendered
        setTimeout(() => {
          const btn = document.getElementById(popupId);
          if (btn) {
            btn.addEventListener("click", () => {
              router.push("/");
            });
          }
        }, 0);
      });
    });

    return () => map.remove();
  }, [router]);

  return <div ref={mapContainerRef} className="w-full h-screen text-black" />;
};

export default FoodMap;
