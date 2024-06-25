import React from "react";
import Popular from "./Popular";
import Ongoing from "./Ongoing";

const Middle = () => {
  return (
    <div className="w-[900px]  h-[800px]">
      <Popular />

      <Ongoing />
    </div>
  );
};

export default Middle;
