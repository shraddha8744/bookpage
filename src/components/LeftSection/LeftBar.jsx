import React, { useContext } from "react";
import { leftMenu } from "../../utils/constant";
import book from "../../assets/images/book.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

const LeftBar = () => {
  const { language } = useContext(LanguageContext);
  console.log(language);
  return (
    <div className=" h-[100%]  ">
      <div className="flex ml-3 ">
        <img src={book} alt="" className="h-12" />
        <h1 className="text-3xl font-bold text-[#151515] ml-1 mt-1">
          {language.skill}
        </h1>
      </div>

      <div className="mt-8  ">
        {leftMenu.map((e) => {
          let setLanguage = e.name;
          if (language.search == "search") {
            setLanguage = e.name;
          } else if (language.search == "खोज") {
            setLanguage = e.hindi;
          } else if (language.search == "शोध") {
            setLanguage = e.marathi;
          }
          return (
            <>
              <div key={e.name} className=" my-8 flex ml-4 ">
                <span className="ml-2 text-[#818181] font-semibold hover:scale-110 hover:font-extrabold">
                  {e.icon}
                </span>
                <span className="ml-6 text-gray-500  font-medium hover:font-bold ">
                  {/* {e.name} */}
                  {setLanguage}
                </span>
              </div>
            </>
          );
        })}
      </div>
      <div className="h-[110px] w-[200px]  ml-4 shadow-2xl">
        <div className="text-center w-[170px] ml-2 mt-3">
          <p className=" text-gray-500 font-medium mt-2">{language.upgrade}</p>
        </div>
        <div className="flex h-10 w-36   ml-5 align-middle bg-gradient-to-t from-[#506BE0]   to-[#aa9df4] rounded-lg text-white mt-5 cursor-pointer">
          <button className="ml-6 font-medium text-[18px] ">
            {language.upgradeButton}
          </button>
          <span className="mt-2 ml-2">
            <ArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
