import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex justify-center p-4 logo">
        <Image src={"/Logo.png"} alt="Logo" height={300} width={200} />
      </div>
      <nav className="relative space-y-4 text-center">
        <Link
          href="/Inicio"
          className="w-64 h-8 flex items-center space-x-2 px-8 hover:bg-[#1fb878] hover:rounded-r-full
                           hover:text-xl hover:py-5"
        >
          <FaHome />
          <p>INICIO</p>
        </Link>

        <Link
          href="/QueEs"
          className="w-64 h-8 flex items-center space-x-2 px-8 hover:bg-[#1fb878] hover:rounded-r-full
                           hover:text-xl hover:py-5"
        >
          <FaInfoCircle />
          <p>¿QUÉ ES?</p>
        </Link>

        <Link
          href="/Compras"
          className="w-64 h-8 flex items-center space-x-2 px-8 hover:bg-[#1fb878] hover:rounded-r-full
                           hover:text-xl hover:py-5"
        >
          <FaMoneyBillWave />
          <p>MOVIMIENTOS</p>
        </Link>

        <Link
          href="/Estrategias"
          className="w-64 h-8 flex items-center space-x-2 px-8 hover:bg-[#1fb878] hover:rounded-r-full
                           hover:text-xl hover:py-5"
        >
          <FaChartLine />
          <p>ESTRATEGIAS</p>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
