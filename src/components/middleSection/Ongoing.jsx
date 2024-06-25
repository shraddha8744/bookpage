import React, { useContext, useState } from "react";
import { ongoingBooks } from "../../utils/constant";
import { BookMarked, Heart } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

const Ongoing = () => {
  const [hearColor, setHeartColor] = useState("white");
  const { language } = useContext(LanguageContext);
  const handleHeartColor = () => {
    if (hearColor == "white") {
      setHeartColor("red");
    } else {
      setHeartColor("white");
    }
  };
  return (
    <div className="mx-4">
      <div className="flex justify-between mx-3">
        <h1 className="text-xl font-semibold text-black">{language.ongoing}</h1>
        <h2 className="text-[16px] text-gray-500 font-medium">
          {language.view_all}
        </h2>
      </div>
      <div className="w-[100%] flex justify-evenly mt-1">
        {ongoingBooks.map((e) => {
          return (
            <>
              <div className="w-[300px] px-2 hover:scale-110 hover:ease-in hover:duration-300 transform transition-transform cursor-pointer">
                <div className="relative">
                  <img
                    src={e.image}
                    alt=""
                    className="h-[140px] w-[170px] rounded-lg"
                  />
                  <div className="absolute bottom-2   bg-white bg-opacity-40 text-white  w-36 h-9 flex justify-between rounded-lg ml-3">
                    <div className="h-7 w-8  mt-1 ml-1">
                      <BookMarked className="text-center ml-1 " />
                    </div>
                    <div className="h-7 w-8 bg-opacity-50 rounded-full mt-1 mr-1">
                      <Heart
                        fill={hearColor}
                        className="text-center ml-1 border-none"
                        onClick={handleHeartColor}
                      />{" "}
                    </div>
                  </div>
                </div>

                <h1 className="font-bold text-gray-700">{language.book}</h1>
                <p className="text-[14px]">{language.des}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Ongoing;
