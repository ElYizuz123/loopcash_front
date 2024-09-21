import React from "react";
import Image from "next/image";
import DataInput from "./DataInput";
import GraficaAhorro from "./GraficaAhorro";
import GraficaGastos from "./GraficaGastos";

export const DataPerfil = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div
        className=" absolute bg-[#12676B] rounded-2xl w-[660px] h-[515px] 
      translate-y-0 translate-x-3 shadow-2xl shadow-[#16915A] top-20"
      ></div>
      <div
        className="absolute flex justify-center 
      bg-[#16915A] rounded-2xl w-[650px] h-[500px] shadow-2xl shadow-[#12676B] top-20"
      >
        <div className="absolute  h-16 w-[500px] top-10">
          <p className="translate-x-16 text-white text-3xl font-bold">
            Perfil
            <span className="ml-32 ">Estadística</span>
          </p>
        </div>
        <div className="absolute h-32 w-[500px] top-32 flex gap-10">
          <Image
            src={"/profile.png"}
            height={200}
            width={150}
            alt="Profile"
            className="translate-x-7 w-36 h-36"
          />
          {/* Nuevo contenedor para la gráfica y el texto */}
          <div className="translate-x-[130px]  gap-3 flex justify-center items-center">
            <GraficaAhorro />
          </div>
        </div>

        <div className="absolute  h-32 w-[220px] top-[295px] -translate-x-[140px]">
          <DataInput />
        </div>
        <div className="absolute  h-32 w-[220px] top-[295px] translate-x-[140px] flex justify-center items-center">
          <GraficaGastos />
        </div>
      </div>

      <div className="absolute bg-[#16915A] shadow-[#12676B] rounded-2xl w-80 h-14 translate-y-72 -translate-x-40 flex justify-center items-center">
        <span className="text-white mx-8 font-bold text-2xl">Ahorro</span>
        <span className="text-[#FFFB66] font-bold text-2xl mx-8">$8000</span>
      </div>
    </div>
  );
};
export default DataPerfil;
