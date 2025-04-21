import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {

  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <>
      <div className="w-[95%]">
      <header className="bg-gradient-to-r from-black to-gray-900 text-white rounded-br-3xl flex items-center justify-between px-4">
      <div className="max-w-6xl ml-36 mb-10">
        <nav className="flex space-x-4">
          <Link
            href="/"
            className={`px-4 py-7 font-medium rounded-b-xl ${
              isActive('/')
                ? 'bg-pink-200 text-black border-t-4'
                : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link
            href="/map"
            className={`px-4 py-7 font-medium rounded-b-xl ${
              isActive('/map')
                ? 'bg-pink-200 text-black border-t-4'
                : 'text-white'
            }`}
          >
            Map
          </Link>
        </nav>
      </div>
    </header>
      </div>
      <div className="w-[85%] mx-auto">
  {/* Section (Search + Filter) */}
  <section className="bg-white rounded-2xl shadow-lg -mt-9 px-4 flex justify-stretch items-center">
    {/* Search input */}
    <div className="flex items-center space-x-2 w-[50%] rounded-xl px-1 py-5">
      <img
        src="/search.svg"
        alt="Search"
        className="w-6 h-6 text-gray-400"
      />
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-transparent text-black placeholder:text-black w-full text-[18px]"
      />
    </div>

    {/* Vertical divider */}
    <div className="border-l h-15 border-gray-300" />
    {/* Filter + Button */}
    <div className="flex justify-between items-right w-full max-w-[50%] px-2 py-1 rounded-xl">


    <div className="flex items-center ">
    <img
      src="/filter.svg"
      alt="Filter"
      className="w-6 h-6 text-gray-400"
    />
    <span className="text-black font-medium text-[19px]">Filter</span>
  </div>

  {/* Search Button on the right */}
  <button className="bg-pink-200 text-black px-4 py-2 rounded-xl font-medium text-sm">
    Search
  </button>
</div>

  </section>
</div>

    </>
  );
}
