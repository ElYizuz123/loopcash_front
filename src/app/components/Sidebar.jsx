import Image from "next/image";
import React from "react";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex justify-center p-4 logo">
        <Image src={"/Logo.png"} alt="Logo" height={300} width={200} />
      </div>
      <nav >
        <ul>
          <li className="flex items-center space-x-4 px-4 hover:bg-green-500 
          hover:py-2 hover:rounded-r-full">
            <FaHome className="w-5 h-5" />
            <span className="text-xl">Inicio</span>
          </li>
          <li>Datos</li>
          <li>Conceptos</li>
          <li>Financiamiento </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
