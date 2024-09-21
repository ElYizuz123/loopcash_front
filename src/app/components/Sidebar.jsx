import Image from "next/image";
import React from "react";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex justify-center p-4 logo">
        <Image src={"/Logo.png"} alt="Logo" height={300} width={200} />
      </div>
      <nav className="relative space-y-4 text-center">

        <button className="w-64 h-8 flex items-center space-x-2 px-8 hover:bg-[#1fb878] hover:rounded-r-full
                           hover:text-xl hover:py-5">
          <FaHome/>
          <p>INICIO</p>
        </button>

        <button className="w-64 h-8 flex items-center space-x-2 px-8 hover:bg-[#1fb878] hover:rounded-r-full
                           hover:text-xl hover:py-5">
          <FaHome/>
          <p>¿QUÉ ES?</p>
        </button>

        <button className="w-64 h-8 flex items-center space-x-2 px-8 hover:bg-[#1fb878] hover:rounded-r-full
                           hover:text-xl hover:py-5">
          <FaHome/>
          <p>COMPRAS</p>
        </button>

        <button className="w-64 h-8 flex items-center space-x-2 px-8 hover:bg-[#1fb878] hover:rounded-r-full
                           hover:text-xl hover:py-5">
          <FaHome/>
          <p>ESTRATEGIAS</p>
        </button>

        <button className="w-64 h-8 flex items-center space-x-2 px-8 hover:bg-[#1fb878] hover:rounded-r-full
                           hover:text-xl hover:py-5">
          <FaHome/>
          <p>RANKING</p>
        </button>
        
      
      </nav>
    </div>
  );
};

export default Sidebar;
