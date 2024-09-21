import React from 'react'
import Image from "next/image";

const Categories = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div
        className=" absolute bg-[#12676B] rounded-2xl w-[850px] h-[525px] 
      translate-y-0 translate-x-3 shadow-2xl shadow-[#16915A] top-20"
      ></div>
      <div
        className="absolute flex justify-center 
      bg-[#16915A] rounded-2xl w-[850px] h-[515px] shadow-2xl shadow-[#12676B] top-20"
      >
        <div>
            {/* <Image/> */}
        </div>
        
      </div>
    </div>
  );
}

export default Categories
