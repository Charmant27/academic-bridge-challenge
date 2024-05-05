// components
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import Tasks from "./Tasks"

// translation
import { useTranslation } from 'react-i18next';

// icons
import { MdArrowForwardIos } from "react-icons/md"
import { TiLockOpenOutline } from "react-icons/ti"
import { IoIosArrowDown } from "react-icons/io"
import { FaPlus, FaUnlink } from "react-icons/fa"
import { FaBarsProgress } from "react-icons/fa6"
import { HiOutlineSquares2X2 } from "react-icons/hi2"

const Overview = () => {
  const { t } = useTranslation()

  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full flex flex-col gap-3">
        <Navbar />
        <div className="px-10 py-8 flex flex-col gap-3 md:flex-row md:justify-between">
        {/* first col */}
          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-4">
              <button className="text-gray-200">{t('workspace')}</button>
              <div className="text-gray-200">
                <MdArrowForwardIos />
              </div>
              <button className="text-gray-200">{t('creative')}</button>
              <div className="text-gray-200">
                <MdArrowForwardIos />
              </div>
              <button>{t('creativeWebsite')}</button>
            </div>
            <h1 className="font-extrabold text-4xl">{t('webDesign')}</h1>
            <div className="flex items-center gap-5">

              <div className="flex items-center gap-2">
                <div className="text-gray-200 text-xl">
                  <TiLockOpenOutline />
                </div>
                <div>
                  <h3>{t('limitedAccess')}</h3>
                </div>
                <div className="text-gray-200 text-xl">
                  <IoIosArrowDown />
                </div>
              </div>

              <div className="bg-gray-200 h-6 w-[0.8px]"></div>

              <div className="flex gap-3">
                <div className="relative flex">
                  <div>
                    <img src="/p-1.avif"
                      className='w-6 h-6 object-cover rounded-full'
                      alt="user" />
                  </div>
                  <div className="ml-[-4px]">
                    <img src="/p-2.avif"
                      className='w-6 h-6 object-cover rounded-full'
                      alt="user" />
                  </div>
                  <div className="ml-[-4px]">
                    <img src="/p-3.avif"
                      className='w-6 h-6 object-cover rounded-full'
                      alt="user" />
                  </div>
                  <div className="ml-[-4px]">
                    <img src="/p-1.avif"
                      className='w-6 h-6 object-cover rounded-full'
                      alt="user" />
                  </div>
                  <div className="ml-[-4px]">
                    <button className="bg-gray-200 text-white rounded-full w-6 h-6">2+</button>
                  </div>
                </div>
              </div>

              <div className="add-btn">
                <button className="bg-purple-100 text-center px-1 h-6 w-6 rounded-full text-white">
                  <FaPlus />
                </button>
              </div>

            </div>

          </div>
        {/* second col */}
          <div className="flex flex-col items-end gap-6">
            <h2>{t('From 23 April')}</h2>
            <div className="flex gap-3 items-center">
              <div className="h-2 w-2 bg-green-200 rounded-full"></div>
              <p className="text-gray-200">{t('Updated 12 min ago')}</p>
            </div>
            <div className="flex gap-3 items-center">
              <button className="text-purple-100">
                <FaUnlink />
              </button>
              <div className="bg-gray-200 h-6 w-[0.8px]"></div>
              <button className="bg-purple-100 text-white p-2 rounded-lg">
                <FaBarsProgress />
              </button>
              <button className="text-gray-200 text-2xl font-bold">
                <HiOutlineSquares2X2 />
              </button>
            </div>
          </div>

        </div>
        <Tasks />
      </div>

    </div>
  )
}

export default Overview