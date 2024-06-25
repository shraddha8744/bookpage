// Header.js
import { BellDot, Circle, Moon, Search } from "lucide-react";
import React, { useContext } from "react";
import girl2 from "../../assets/images/girl2.jpg";
import lang, { supported_languages } from "../../utils/constant";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(lang[selectedLanguage]);
  };

  return (
    <div className="flex justify-between">
      <div className="mt-1=2 flex h-12 w-72 shadow-xl rounded-md bg-white">
        <Search className="mt-3 ml-3 text-[#6d6d6d]" size={22} />
        <input
          type="text"
          className="text-gray-400 text-[18px] outline-0 ml-1 font-medium"
          placeholder={language.search}
        />
      </div>
      <div className="flex w-[33%]">
        <select
          name="language"
          id="language"
          className="px-3 bg-gray-500 text-white h-9 font-bold cursor-pointer mt-[7px] mr-3 ouline-none"
          onChange={handleLanguageChange}
        >
          {supported_languages.map((e) => (
            <option
              value={e.identifier}
              key={e.identifier}
              className="cursor-pointer"
            >
              {e.name}
            </option>
          ))}
        </select>
        <div className="w-[100px] h-9 bg-[#fb6567] flex text-white align-center mt-2 rounded-lg pt-1 cursor-pointer hover:bg-red-600">
          <Circle
            fill="white"
            className="border-none mt-2 ml-2"
            strokeWidth={0}
            size={12}
          />
          <span className="text-[18px] font-medium ml-2">Live</span>
        </div>
        <div>
          <Moon
            className="mt-3 ml-6 text-[#6d6d6d] hover:scale-110"
            size={25}
          />
        </div>
        <div>
          <BellDot
            className="mt-3 ml-8 text-[#6d6d6d] hover:scale-110"
            size={25}
          />
        </div>
        <div className="h-12 w-12 rounded-full ml-12 mt-1">
          <img
            src={girl2}
            alt=""
            className="h-12 w-12 rounded-full object-cover items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
