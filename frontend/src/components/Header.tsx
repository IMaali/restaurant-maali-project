import Link from "next/link";
import { usePathname } from "next/navigation";
import FilterSearchBar from "@/components/FilterSearchBar";
import SearchBar from "@/components/SearchBar";
import { MenuItem } from "@/types/menu";
import { useState } from "react";
import Head from "next/head";


type HeaderProps = {
  category: string;
  setCategory: (category: string) => void;
};

export default function Header({ category, setCategory }: HeaderProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); 

  return (
    <>

<Head>
        <title>Restaurant</title>
        <link rel="icon" href="/Mask.svg" />
      </Head>
      <div className="w-[95%]">
        <header
          className="bg-cover bg-center text-white rounded-br-3xl flex items-center justify-between px-4"
          style={{ backgroundImage: "url('/Group.png')" }}
        >
          <div className="max-w-6xl ml-36 mb-10">
            <nav className="flex space-x-4">
              <Link
                href="/"
                className={`px-4 py-7 font-medium rounded-b-xl ${
                  isActive("/") ? "bg-pink-200 text-black border-t-4" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/Map"
                className={`px-4 py-7 font-medium rounded-b-xl ${
                  isActive("/Map") ? "bg-pink-200 text-black border-t-4" : "text-white"
                }`}
              >
                Map
              </Link>
            </nav>
          </div>
        </header>
      </div>

      <div className="w-[85%] mx-auto">
        {/* Section Search & Filter */}
        <section className="bg-white rounded-2xl shadow-lg -mt-9 px-4 flex justify-stretch items-center">
          {/* Search Component */}
          <SearchBar
            setMenuItems={setMenuItems}
            setLoading={setLoading}
            setIsDropdownOpen={setIsDropdownOpen}
            isDropdownOpen={isDropdownOpen}
          />

          {/* Divider */}
          <div className="border-l h-15 border-gray-300" />

          {/* Filter Component */}
          <div className="flex justify-between items-right w-full max-w-[50%] px-2 rounded-xl">
            <div className="w-[20%] m-3">
              <FilterSearchBar
                selectedCategory={category}
                setSelectedCategory={setCategory}
              />
            </div>

            {/* Search Button */}
            <div className="flex justify-between items-right px-2 py-2 rounded-xl">
              <button
                className="bg-pink-200 text-black px-4 py-2 rounded-xl font-medium text-sm"
                onClick={() => {}}
              >
                Search
              </button>
            </div>
          </div>
        </section>

        {isDropdownOpen && (
          <div className="mt-4 w-full bg-white rounded-xl shadow-md max-h-64 overflow-y-auto">
            <ul>
              {loading && <li className="p-2">Loading...</li>}
              {!loading && menuItems.length === 0 && (
                <li className="p-2">No results found</li>
              )}
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer text-black flex items-center space-x-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
