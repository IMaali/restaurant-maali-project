import { useState } from "react";
import { fetchItemsByDescrip, fetchItemsByName } from "@/services/menuApi";
import { MenuItem } from "@/types/menu";

type SearchBarProps = {
  setMenuItems: (items: MenuItem[]) => void;
  setLoading: (loading: boolean) => void;
  setIsDropdownOpen: (open: boolean) => void;
  isDropdownOpen: boolean;
};

const SearchBar = ({
  setMenuItems,
  setLoading,
  setIsDropdownOpen,
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      setIsDropdownOpen(false); 
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const handleSearchSubmit = async () => {
    if (searchTerm.trim() === "") return; 

    setLoading(true);
    setIsDropdownOpen(true);
    try {
      
      const items = searchTerm
        ? await fetchItemsByName(searchTerm) 
        : await fetchItemsByDescrip(searchTerm); 
      setMenuItems(items);
    } catch (error) {
      console.error(error);
      setMenuItems([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-2 w-[50%] rounded-xl px-1">
      <img src="/search.svg" alt="Search" className="w-6 h-6 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-transparent text-black placeholder:text-black w-full text-[18px]"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown} 
      />
    </div>
  );
};

export default SearchBar;
