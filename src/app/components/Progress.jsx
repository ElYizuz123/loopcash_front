"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const Progress = ({ sombra, color }) => {
  const [popUpProgress, setPopUpProgress] = useState(false);

  const handlePopUp = () => {
    setPopUpProgress(true);
  };

  const closePopUp = () => {
    setPopUpProgress(false);
  };

  return (
    <div
      className="w-28 h-28 rounded-full absolute top-4 bg-[#b7950b]"
      onClick={handlePopUp}
    >
      <div
        className="w-28 h-28 rounded-full absolute -translate-y-3 bg-[#f1c40f] 
                      transition-transform duration-300 ease-in-out hover:translate-y-2 
                      flex justify-center items-center
                      cursor-pointer"
      >
        100%
      </div>
    </div>
  );
};

export default Progress;
