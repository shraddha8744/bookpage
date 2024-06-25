import React from "react";
import LeftBar from "./components/LeftSection/LeftBar";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/Hero";
import Middle from "./components/middleSection/Middle";
import TopContainer from "./components/RightSection/TopContainer";
import BottomConatiner from "./components/RightSection/BottomConatiner";
import { LanguageProvider } from "./components/context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <div className=" flex">
        <div className="w-[18%] mt-2 bg-white shadow-xl rounded-[10px] h-[100vh]">
          <LeftBar />
        </div>
        <div className="ml-10 mt-2 w-[100%] ">
          <div className="h-12  ">
            <Header />
          </div>
          <div>
            <Hero className=" h-12 w-[100%] rounded-lg " />
          </div>
          <div className="flex">
            <div className="">
              <Middle />
            </div>
            <div>
              <TopContainer />
              <BottomConatiner />
            </div>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;
