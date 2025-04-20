import { useEffect, useState } from "react";
import { fetchItemsByCategory, fetchMenuItems } from "../services/menuApi";
import { MenuItem } from "../types/menu";

export default function HomePage() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<string>("");
  const categoryColors: Record<string, string> = {
    Breakfast: "bg-[#F4CBDF]",
    Drinks: "bg-[#CDDFEC]",
    Soups: "bg-[#E7DEE3]",
    Sushi: "bg-[#D1D1EF]",
    Orders: "bg-[#D0EAE3]",
  };

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

        // 👉 Count items per category
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="px-15 max-w-screen-xl mx-auto">
        {/* Categories Row */}
        <div className="text-black font-normal text-[30px] mb-1 ">
          <div className="flex justify-center items-center space-x-7 overflow-x-auto px-8 py-8">
            {[...categories.filter((cat) => cat !== "Orders"), "Orders"].map(
              (categoryName) => (
                <div
                  key={categoryName}
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
                        src={`/food-${categoryName.toLowerCase()}.svg`} // Example: Assuming images match category names
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
                    className="bg-white shadow-md rounded-xl overflow-hidden p-4 relative"
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
                    <p className="text-[#F4CBDF] text-[22px]">
                          {item.price} SR
                        </p>
                      <button className="bg-[#F4CBDF] px-3 py-1 rounded text-black font-bold">
                        -
                      </button>
                      <span className="text-st font-bold text-black">0</span>
                      <button className="bg-[#F4CBDF] px-3 py-1 rounded text-black font-bold">
                        +
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
