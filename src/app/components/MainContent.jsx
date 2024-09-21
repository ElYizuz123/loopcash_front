"use client";
import React from "react";
import ButtonCalendar from "../components/ButtonCalendar";
import Progress from "./Progress";
import Perfil from "./Perfil";
import GraficaAhorro from "./GraficaAhorro";
import GraficaGastos from "./GraficaGastos";
import Puerquito from "./Puerquito";
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

const MainContent = () => {
  const [popUpProgress, setPopUpProgress] = useState(false);

  const handlePopUp = () => {
    setPopUpProgress(true);
  };

  const closePopUp = () => {
    setPopUpProgress(false);
  };
  return (
    <div className="relative w-screen h-screen">
      <div className="flex justify-between my-4 mb-32">
        <div className="h-20 w-40 mx-8 ml-20 relative">
          {/* ButtonCalendar encima del div de fondo */}
          <div className="absolute z-10">
            <ButtonCalendar />
          </div>

          {/* Div de fondo que se quiere superponer */}
          <div className="bg-[#12676b] h-20 w-[500px] absolute rounded-2xl top-2 left-2 z-0"></div>
        </div>
        <div className="bg-[#12676b] h-20 w-72 rounded-l-full flex items-center relative">
          {/* Fondo detrás del Perfil */}
          <div className="absolute z-0 bg-green-500 h-20 w-[280px] rounded-l-full"></div>

          {/* Componente Perfil sobre el fondo */}
          <div className="bg-green-500 h-20 w-72 rounded-l-full flex items-center relative">
            <Perfil />
          </div>
        </div>
      </div>

      <div className="flex flex-col  w-full h-20" onClick={handlePopUp}>
        <div className="relative ml-[650px] -translate-y-16  ">
          <Progress/>
        </div>
      </div>
      <div className="flex flex-col   w-full h-20" onClick={handlePopUp}>
        <div className="relative ml-[800px] -translate-y-4 ">
          <Progress/>
        </div>
        <div className={exo.className}>
          <span className="text-9xl font-bold text-gray-700 ml-8  ">“</span>
          <h1 className="font-extralight text-5xl ml-16 -translate-y-16">
            Mantén en ciclo
          </h1>
          <h1 className="font-extrabold text-5xl ml-16 -translate-y-16 ">
            tu dinero
          </h1>
          <div className="-translate-y-24">
            <span className="text-9xl font-bold text-gray-700 ml-[280px]">
              ”
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-20" onClick={handlePopUp}>
        <div className="relative ml-[600px] translate-y-6 ">
          <Progress/>
        </div>
      </div>
      <div className="flex flex-col  w-full h-20" onClick={handlePopUp}>
        <div className="relative ml-[420px] translate-y-8 ">
          <Progress/>
        </div>
      </div>

      <Link 
        href="/ChatBot"
        className="cursor-pointer">
        <div className="flex justify-end mx-12">
          <Puerquito />
        </div>
      </Link>
      {popUpProgress && (
        <div className="fixed inset-0 flex items-center bg-black justify-center bg-opacity-50">
          <div className="absolute bg-[#12676b] w-[500px] h-[420px] p-4 rounded-lg shadow-lg z-10 ">
            <div
              className="absolute bg-[#16915a] w-[500px] h-[420px] p-4 rounded-lg shadow-lg z-0 bottom-2 right-2 
              flex flex-col items-center"
            >
              <div className="w-96 h-auto flex justify-center mt-8">
                <span className="text-center text-2xl text-white">AVANCE</span>
                <div
                  className="absolute top-4 right-4 text-red-500 cursor-pointer transition-transform duration-300 transform hover:rotate-180 hover:scale-125"
                  onClick={closePopUp}
                >
                  <FaTimes className="h-8 w-8 text-white bg-red-600 rounded-full" />
                </div>
              </div>

              <div className="w-96 h-auto text-center">
                <span className="text-sm text-center text-[#FFFB66]">SEMANA 1</span>
              </div>

              <div className="w-96 h-10">
                <GraficaAhorro/>
              </div>

              <div className="w-96 h-20 mt-14 justify-center items-center">
                <GraficaGastos/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    // <div className="relative">
    //   <div className="absolute flex justify-center items-center bg-black w-16 h-16">
    //     HOLA
    //   </div>

    //   <div className="absolute">
    //     <div className="bg-red-600">
    //       <div className="hover:animate-fade-down hover:animate-once mr-64 translate-y-8">
    //         <Progress />
    //       </div>

    //     </div>
    //   </div>
    //   <div className="absolute flex flex-c p-4 items-center">
    //     <div className="quote">
    //       <p>La meta siempre está cerca</p>
    //       {/* </div> */}
    //     </div>
    //   </div>
    //   <Perfil className="absolute" />
    //   <ButtonCalendar className="absolute" />
    // </div>
  );
};

export default MainContent;
