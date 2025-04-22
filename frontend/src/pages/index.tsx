import React from "react";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { fetchItemsByCategory, fetchMenuItems } from "../services/menuApi";
import { MenuItem } from "../types/menu";

type HomePageProps = {
  category: string;
  setCategory: (category: string) => void;
};

export default function HomePage({ category, setCategory }: HomePageProps) {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const categoryColors: Record<string, string> = {
    Breakfast: "bg-[#F4CBDF]",
    Drinks: "bg-[#CDDFEC]",
    Soups: "bg-[#E7DEE3]",
    Sushi: "bg-[#D1D1EF]",
    Orders: "bg-[#D0EAE3]",
  };
  const [cart, setCart] = useState<Record<number, number>>({});
  const [allMenu, setAllMenu] = useState<MenuItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    fetchMenuItems()
      .then((items) => {
        setMenu(items);

        const sortedCategories = [
          ...new Set(items.map((item) => item.category)),
        ].sort();
        setCategories(sortedCategories);

        const counts: Record<string, number> = {};
        for (const item of items) {
          counts[item.category] = (counts[item.category] || 0) + 1;
        }
        setCategoryCounts(counts);

        if (sortedCategories.length > 0) {
          setCategory(sortedCategories[0]);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (category) {
      fetchItemsByCategory(category)
        .then(setMenu)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [category]);

  useEffect(() => {
    const totalOrders = Object.values(cart).reduce(
      (sum, count) => sum + count,
      0
    );
    setCategoryCounts((prev) => ({
      ...prev,
      Orders: totalOrders,
    }));
  }, [cart]);

  useEffect(() => {
    fetchMenuItems()
      .then((items) => {
        setAllMenu(items);
        setMenu(items);

        const sortedCategories = [
          ...new Set(items.map((item) => item.category)),
        ].sort();
        setCategories(sortedCategories);

        const counts: Record<string, number> = {};
        for (const item of items) {
          counts[item.category] = (counts[item.category] || 0) + 1;
        }
        setCategoryCounts(counts);

        if (sortedCategories.length > 0) {
          setCategory(sortedCategories[0]);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (category && category !== "Orders") {
      fetchItemsByCategory(category)
        .then(setMenu)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <FaSpinner className="animate-spin text-3xl text-pink-400" />
      </div>
    );
  }
  return (
    <>
      <div className="px-15 max-w-screen-xl mx-auto">
        {/* Categories Cards */}
        <div className="text-black font-normal text-[30px] mb-1">
          <div className="flex justify-center items-center space-x-7 overflow-x-auto px-8 py-8">
            {[...categories.filter((cat) => cat !== "Orders"), "Orders"].map(
              (categoryName, index, arr) => (
                <React.Fragment key={categoryName}>
                  {/* Cards */}
                  <div
                    onClick={() => setCategory(categoryName)}
                    className={`bg-white rounded-xl p-3 text-black min-w-[200px] cursor-pointer transition-shadow duration-200 ${
                      category === categoryName ? "shadow-xl/30" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`rounded-lg px-3 py-2 ${
                          categoryColors[categoryName] || "bg-gray-200"
                        }`}
                      >
                        <img
                          src={`/food-${categoryName.toLowerCase()}.svg`}
                          className="w-8 h-8"
                          alt={categoryName}
                        />
                      </div>
                      <h1 className="text-black text-[18px] flex items-center space-x-8">
                        <span>{categoryName}</span>
                        <span>{categoryCounts[categoryName] || 0}</span>
                      </h1>
                    </div>
                  </div>

                  {/* Divider */}
                  {index === arr.length - 2 && (
                    <div className="h-15 border-l border-gray-300 w-[1px]" />
                  )}
                </React.Fragment>
              )
            )}
          </div>
        </div>

        {/* Menu Grid */}
        {category && (
          <>
            <div className="text-black font-normal text-[30px] mb-5 py-2 ">
              <div className="flex items-center space-x-4">
                <h1 className="text-[30px] font-normal text-black whitespace-nowrap">
                  {category}
                </h1>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {menu
                .filter((item) => item.category === category)
                .map((item) => (
                  <li
                  key={item.id}
                  className="bg-white shadow-md rounded-xl overflow-hidden p-4 relative cursor-pointer"
                  onClick={() => {
                    setSelectedItem(item);
                    setShowModal(true);
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-md"
                    />
                    <div className="flex flex-col space-y-1 mb-18">
                      <h2 className="text-[21px] text-black">{item.name}</h2>
                      <p className="text-gray-500">{item.calorie} Cal</p>
                    </div>
                  </div>
                
                  <div className="absolute bottom-4 right-3 flex items-center space-x-4">
                    <p className="text-[#F4CBDF] text-[22px]">{item.price} SR</p>
                    
                    <button
                      className="bg-[#F4CBDF] px-3 py-1 rounded text-black font-bold"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCart((prev) => ({
                          ...prev,
                          [item.id]: Math.max((prev[item.id] || 0) - 1, 0),
                        }));
                      }}
                    >
                      -
                    </button>
                
                    <span className="text-st font-bold text-black">
                      {cart[item.id] || 0}
                    </span>
                
                    <button
                      className="bg-[#F4CBDF] px-3 py-1 rounded text-black font-bold"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCart((prev) => ({
                          ...prev,
                          [item.id]: (prev[item.id] || 0) + 1,
                        }));
                      }}
                    >
                      +
                    </button>
                  </div>
                </li>
                
                ))}
            </ul>
            {showModal && selectedItem && (
              <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white mx-8 my-10 px-8 py-8 rounded-[2vw] w-[90%] max-w-lg relative ">
                  {/* Close button */}
                  <button
                    className="absolute top-2 right-2 text-white text-xl w-6 h-6 mx-4 my-2  rounded-full bg-gray-300 flex items-center justify-center "
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </button>

                  {/* Modal content */}
                  <h2 className="text-[24.68px] text-black mb-2">
                    {selectedItem.name}
                  </h2>

                  <p className="text-gray-400 mb-2">
                    {selectedItem.calorie} Cal
                  </p>
                  <p className="text-gray-400 mb-2">
                    {selectedItem.description || "No description available."}
                  </p>
                  
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-56 object-cover rounded-lg mb-13"
                  />

                  <div className="absolute bottom-4 right-3 flex items-center space-x-4 mx-5">
                    <p className="text-[#F4CBDF] text-[22px]">
                      {selectedItem.price} SR
                    </p>
                    <button
                      className="bg-[#F4CBDF] px-3 py-1 rounded text-black font-bold"
                      onClick={() =>
                        setCart((prev) => ({
                          ...prev,
                          [selectedItem.id]: Math.max(
                            (prev[selectedItem.id] || 0) - 1,
                            0
                          ),
                        }))
                      }
                    >
                      -
                    </button>

                    <span className="text-st font-bold text-black">
                      {cart[selectedItem.id] || 0}
                    </span>

                    <button
                      className="bg-[#F4CBDF] px-3 py-1 rounded text-black font-bold"
                      onClick={() =>
                        setCart((prev) => ({
                          ...prev,
                          [selectedItem.id]: (prev[selectedItem.id] || 0) + 1,
                        }))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Orders Page */}
        {category === "Orders" && (
          <div className="mt-10 px-4">
            {Object.keys(cart).filter((id) => cart[Number(id)] > 0).length ===
            0 ? (
              <p className="text-black text-center">
                No items in your order yet.
              </p>
            ) : (
              <>
                {/* Order Items */}
                <ul className="space-y-4 max-w-2xl mx-auto">
                  {allMenu
                    .filter((item) => cart[item.id] > 0)
                    .map((item) => (
                      <li
                        key={item.id}
                        className="bg-white p-4 rounded shadow flex justify-between items-center"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 object-cover rounded"
                          />
                          <div>
                            <p className="font-medium text-black">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              Quantity: {cart[item.id]}
                            </p>
                          </div>
                        </div>
                        <p className="text-[#F4CBDF] font-bold text-lg">
                          {(item.price * cart[item.id]).toFixed(2)} SR
                        </p>
                      </li>
                    ))}
                </ul>

                {/* Order Summary */}
                <div className="mt-6 text-center text-[19px] font-bold text-white w-full max-w-sm mx-auto p-4 space-y-2 bg-[#111216] rounded-lg shadow-xl">
                  {/* Subtotal */}
                  <div>
                    Subtotal:{" "}
                    {allMenu
                      .reduce(
                        (sum, item) => sum + (cart[item.id] || 0) * item.price,
                        0
                      )
                      .toFixed(2)}{" "}
                    SAR
                  </div>

                  {/* Tax */}
                  <div>Tax: 4.10 SAR</div>

                  {/* Total */}
                  <div className="border-t border-dotted pt-2">
                    Total:{" "}
                    {(
                      allMenu.reduce(
                        (sum, item) => sum + (cart[item.id] || 0) * item.price,
                        0
                      ) + 4.1
                    ).toFixed(2)}{" "}
                    SAR
                  </div>

                  {/* Place Order Button */}
                  <div>
                    <button className="py-1 px-6 rounded-full font-medium bg-[#F4CBDF] text-black text-[15px] hover:opacity-90 transition">
                      Place Order
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
