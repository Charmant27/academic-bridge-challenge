import { GoHome } from "react-icons/go"
import { CiMail, CiFileOn, CiFolderOn } from "react-icons/ci"
import { FaPlus, FaRegUser } from "react-icons/fa"
import { IoSettingsOutline } from "react-icons/io5"

const Sidebar = () => {
  return (
    <section
      className='bg-white w-[5%] flex flex-col gap-6 border-r border-r-gray-100 h-screen'
    >
      <div className="px-4 py-8">
        <img
          src="/logo.jpeg"
          className='w-10 h-10 object-cover'
          alt="logo"
        />
      </div>

      <div className="flex flex-col gap-3 px-4">
        <div className="text-gray-200 font-extrabold text-3xl">
          <GoHome />
        </div>
        <div className="text-gray-200 font-extrabold text-3xl">
          <CiMail />
        </div>
        <div className="text-gray-200 font-extrabold text-3xl">
          <CiFileOn />
        </div>
        <div className="text-gray-200 font-extrabold text-3xl">
          <CiFolderOn />
        </div>
      </div>

      <div className="h-[1px] bg-gray-100 w-full"></div>

      <div className="px-4 flex flex-col gap-3">

        <div className="relative">
          <div className="absolute w-2 h-2 left-[25px] bg-green-200 rounded-full"></div>
          <img src="/p-1.avif" alt="profile" className="w-8 h-8 rounded-full object-cover" />
        </div>

        <div className="relative">
          <div className="absolute w-2 h-2 left-[25px] bg-green-200 rounded-full"></div>
          <img src="/p-2.avif" alt="profile" className="w-8 h-8 rounded-full object-cover" />
        </div>

        <div>
          <img src="/p-3.avif" alt="profile" className="w-8 h-8 rounded-full object-cover" />
        </div>

        <div>
          <button
            className="text-gray-200 border border-dashed border-gray-200 rounded-full px-2 py-2"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="h-[1px] bg-gray-100 w-full"></div>

      <div className="flex flex-col gap-5 px-4 pt-20">
        <div className="text-gray-200 font-extrabold text-2xl">
          <IoSettingsOutline />
        </div>
        <div className="text-gray-200 font-extrabold text-2xl">
          <FaRegUser />
        </div>
      </div>

    </section>
  )
}

export default Sidebar