import { FaSearch, FaRegMoon, FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='bg-white w-full px-10 py-8 h-20 flex items-center gap-3 md:justify-between'>
      <div className="relative flex items-center">
        <div className="absolute right-6">
          <FaSearch />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 px-3 py-3 rounded-lg md:w-[300px]"
          />
        </div>
      </div>

      <div className="flex gap-5">
        <button className="bg-gray-100 px-2 py-2 rounded-lg text-gray-200 text-xl">
          <FaRegMoon />
        </button>
        <div className="relative">
          <div className="absolute bg-red-500 w-2 h-2 rounded-full left-5 top-2"></div>
          <button className="bg-gray-100 px-2 py-2 rounded-lg text-gray-200 text-xl">
            <FaRegBell />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar