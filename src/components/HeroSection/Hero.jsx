import React, { useContext } from "react";
import first from "../../assets/images/1.jpg";
import { LanguageContext } from "../context/LanguageContext";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  console.log("myyyyyyyy", language);
  return (
    <div className="h-[200px]   mt-2 bg-gradient-to-t from-[#506BE0]   to-[#aa9df4]  rounded-lg flex justify-between align-middle shadow-2xl shadow-indigo-500/50">
      <div className="pl-8">
        <img src={first} alt="" className="h-[200px]" />
      </div>
      <div className="w-[450px] p-4 text-center text-white mt-3">
        <h1 className="text-xl">Hi,{language.name} </h1>
        <p className="text-[16px] mt-2">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia error,
          adipisicing elit. Quia error,
        </p>
        <button className="h-10 w-40 text-center  border border-white mt-4 rounded-lg font-medium text-[16px] hover:bg-white hover:bg-opacity-25 hover:font-bold">
          {" "}
          {language.Button}
        </button>
      </div>
      <div className="pr-8">
        {" "}
        <img src={first} alt="" className="h-[200px]" />
      </div>
    </div>
  );
};

export default Hero;
