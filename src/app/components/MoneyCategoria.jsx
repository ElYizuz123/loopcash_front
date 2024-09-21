import React from 'react'
import Image from "next/image";

const MoneyCategoria = ({imagen}) => {
  return (
    <div>
      <div
        className=" absolute bg-[#8E8C58] rounded-full w-[65px] h-[65px] 
      translate-y-0 translate-x-1 shadow-xl shadow-gray-600 "
      ></div>
      <div
        className="absolute flex justify-center items-center 
      bg-[#FFFB66] rounded-full w-16 h-16 shadow-xl shadow-gray-600  "
      >
        <Image
          src={imagen}
          height={2000}
          width={2000}
          alt="categoria"
          className="h-12 w-12 z-0 absolute "
        />
      </div>
      
    </div>
  );
} 
export default MoneyCategoria;