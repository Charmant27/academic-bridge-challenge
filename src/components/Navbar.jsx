import { useState } from 'react';
import { useTranslation } from 'react-i18next'

// global context
import { useGlobalContext } from '../context/Context';

// icons
import { FaSearch, FaRegMoon, FaRegBell } from "react-icons/fa";

const Navbar = () => {
  const [lang, setLang] = useState("en");
  const { toggle, mode } = useGlobalContext()

  const languages = [
    { value: "", text: "Options" },
    { value: "en", text: "English" },
    { value: "en", text: "French" },
  ];

  const { t } = useTranslation()

  const handleLanguage = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(
      loc + "?lng=" + e.target.value
    );
  };

  return (
    <nav className={
      `${mode === 'light' ? 'bg-white'
        :
        'bg-slate-800 text-white'} w-full px-10 py-8 h-20 flex items-center gap-3 md:justify-between`
    }>
      <div className="relative flex items-center">
        <div className="absolute right-6">
          <FaSearch />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder={t('search') || 'Search'}
            className="bg-gray-100 text-black px-3 py-3 rounded-lg md:w-[300px]"
          />
        </div>
      </div>

      <div className="flex gap-5">
        <button onClick={toggle} className="bg-gray-100 px-2 py-2 rounded-lg text-gray-200 text-xl">
          <FaRegMoon />
        </button>
        <div className="relative">
          <div className="absolute bg-red-500 w-2 h-2 rounded-full left-5 top-2"></div>
          <button className="bg-gray-100 px-2 py-2 rounded-lg text-gray-200 text-xl">
            <FaRegBell />
          </button>
        </div>
        <div>
          <select
            value={lang}
            onChange={handleLanguage}
            className='bg-gray-100 text-gray-200 px-4 py-2 rounded-lg'
          >
            {languages.map((item) => {
              return (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </nav>
  )
}

export default Navbar