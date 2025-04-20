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
        <section className="bg-white rounded-2xl shadow-lg -mt-9 px-4 py-4 flex justify-between items-center relative">
          {/* Search input */}
          <div className="flex items-center space-x-2 w-40 rounded-xl px-1 py-1">
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

          {/* Right side: Filter + Button */}
          <div className="flex items-center space-x-2">
            {/* Divider */}
            <div className="w-px h-5 bg-gray-600"></div>

            {/* Filter */}
            <div className="flex items-center space-x-2 px-2 py-1 rounded-xl">
              <img
                src="/filter.svg"
                alt="Filter"
                className="w-4 h-4 text-gray-400"
              />
              <span className="text-black font-medium text-sm">Filter</span>
            </div>

            {/* Search Button */}
            <button className="bg-pink-200 text-black px-4 py-2 rounded-xl font-medium text-sm ms-8">
              Search
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
