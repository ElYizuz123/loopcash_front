import React from 'react'
import Image from "next/image";
import MoneyCategoria from './MoneyCategoria';

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
        <div
          className=" absolute  flex justify-center h-16 w-96  rounded-2xl top-8 
         border-2 border-black bg-white"
        >
          <Image
            src={"/Foto2.jpeg"}
            height={2000}
            width={2000}
            alt="Fondo2"
            className="h-[61px] w-96 rounded-2xl   "
          />
        </div>
        <div className=" absolute  h-16 w-[500px] top-32">
          <p className="text-white text-center font-bold text-2xl">
            CATEGORIAS
          </p>
        </div>

        <div
          className="grid grid-cols-3  absolute h-8 w-[500px] top-52 
        items-center "
        >
          <MoneyCategoria imagen={"/comida.png"} />
          <MoneyCategoria imagen={"/educacion.png"} />
          <MoneyCategoria imagen={"/golosinas.png"} />
        </div>

        <div
          className="grid grid-cols-3 top-80 absolute h-8 w-[500px] 
        items-center "
        >
          <MoneyCategoria imagen={"/salud.png"} />
          <MoneyCategoria imagen={"/transporte.png"} />
          <MoneyCategoria imagen={"/wifi.png"} />
        </div>
      </div>
    </div>
  );
}

export default Categories
