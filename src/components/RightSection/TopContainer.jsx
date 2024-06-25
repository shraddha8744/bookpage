import { Circle } from "lucide-react";
import React, { useContext, useState } from "react";
import girl5 from "../../assets/images/girl5.jpg";
import girl6 from "../../assets/images/girl6.jpg";
import { LanguageContext } from "../context/LanguageContext";

const TopContainer = () => {
  const { language } = useContext(LanguageContext);
  const [circle, setCircle] = useState(false);
  const handleClick = () => {
    setCircle(!circle);
  };
  return (
    <div className="h-[160px] pl-4 rounded-xl  ml-3 shadow-lg mt-2">
      <div className="flex">
        <div>
          <h1 className="text-xl font-semibold">{language.unlock}</h1>
          <h2 className="text-gray-500 text-[15px]">{language.success}</h2>
        </div>
        <div
          className="h-7 w-12 bg-gradient-to-t from-[#506BE0]   to-[#aa9df4] rounded-xl ml-8 mt-3 flex"
          onClick={handleClick}
        >
          {circle ? (
            <Circle
              className="ml-2 border border-none mt-1 "
              fill="white"
              size={20}
              strokeWidth={0}
            />
          ) : (
            <Circle
              className="ml-6 border border-none mt-1 "
              fill="white"
              size={20}
              strokeWidth={0}
            />
          )}
        </div>
      </div>
      {/* profile section */}
      <div className="flex mt-1">
        <img
          src={girl5}
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="ml-2">
          <div className="flex mt-2">
            <div className="h-2 w-20  rounded-s-full rounded-e-full bg-[#8297f7]"></div>
            <div className="h-2 w-20 rounded-s-full rounded-e-full ml-2 bg-[#8798e5]"></div>
            <div className="h-2 w-20  rounded-s-full rounded-e-full ml-2 bg-gray-200"></div>
          </div>
          <div className="flex justify-between">
            <span>66% {language.achivement}</span>
            <span>7 {language.day}</span>
          </div>
        </div>
      </div>
      {/* profile section 2 */}
      <div className="flex mt-4">
        <img
          src={girl6}
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="ml-2">
          <div className="flex mt-2">
            <div className="h-2 w-20  rounded-s-full rounded-e-full bg-[#8297f7]"></div>
            <div className="h-2 w-20 rounded-s-full rounded-e-full ml-2 bg-[#8798e5]"></div>
            <div className="h-2 w-20 rounded-s-full rounded-e-full ml-2 bg-gray-200"></div>
          </div>
          <div className="flex justify-between">
            <span>33% {language.achivement}</span>
            <span>12{language.day}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
