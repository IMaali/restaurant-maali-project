'use client';
import { useState, useEffect, useRef } from "react";
type FilterSearchBarProps = {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
};

export default function FilterSearchBar({
  selectedCategory,
  setSelectedCategory,
}: FilterSearchBarProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const filteredCategories = ["Drinks", "Breakfast", "Soups", "Sushi"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-between items-center w-full max-w-[50%] rounded-xl">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img src="/filter.svg" alt="Filter" className="w-6 h-6 text-gray-400" />
        <span className="text-black font-medium text-[19px] ml-2">
          {selectedCategory}
        </span>
      </div>

      {showDropdown && (
        <ul
        ref={dropdownRef} 
        className="absolute top-12 left-0 bg-white shadow-md rounded-md w-40 z-10"
        >
          {filteredCategories.map((cat) => (
            <li
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowDropdown(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
