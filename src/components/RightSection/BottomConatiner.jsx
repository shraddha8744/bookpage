import React, { useContext } from "react";
import four from "../../assets/images/4.jpg";
import { Star } from "lucide-react";
import { bestSales } from "../../utils/constant";
import { LanguageContext } from "../context/LanguageContext";

const BottomConatiner = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="h-[270px] pl-4 rounded-xl  ml-3 shadow-lg mt-2">
      <div className="flex justify-between mx-1">
        <span className="font-semibold">{language.sale}</span>
        <span className="text-gray-500 font-medium">{language.view_all}</span>
      </div>
      {bestSales.map((e) => {
        return (
          <>
            <div
              className="flex h-14 w-[280px] shadow-lg justify-evenly mx-4 mt-1"
              key={e.name}
            >
              <div className="mt-1">
                <img
                  src={e.image}
                  alt=""
                  className="h-12 ml-3 rounded-lg w-16 hover:scale-110 cursor-pointer"
                />
              </div>
              <div className="ml-2">
                <h1 className="font-medium">{e.name}</h1>
                <div className="flex">
                  <Star fill="yellow" className="border-none" strokeWidth={0} />
                  <span className="ml-1 font-semibold">4.5</span>
                </div>
              </div>
              <button className="h-8 w-16 bg-blue-500 rounded-md text-white mt-3 ml-2 hover:bg-blue-700 font-semibold">
                Order
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default BottomConatiner;
