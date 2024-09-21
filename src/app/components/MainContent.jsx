import React from "react";
import ButtonCalendar from "../components/ButtonCalendar";
import Progress from "./Progress";
import Perfil from "./Perfil";

import { Exo_2 } from "next/font/google";

const exo = Exo_2({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

const MainContent = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="flex justify-between my-4 mb-32">
        <div className="bg-red-500 h-20 w-40 mx-8 ml-52 relative">
          <ButtonCalendar />
        </div>
        <div className="bg-green-500 h-20 w-72 rounded-l-full flex items-center relative">
          <Perfil />
        </div>
      </div>

      <div className="flex flex-col  w-full h-20">
        <div className="relative ml-[650px] -translate-y-16  ">
          <Progress />
        </div>
      </div>
      <div className="flex flex-col   w-full h-20">
        <div className="relative ml-[800px] -translate-y-4 ">
          <Progress />
        </div>
        <div className={exo.className}>
          <span className="text-9xl font-bold text-gray-700 ml-8  ">“</span>
          <h1 className="font-extralight text-5xl ml-16 -translate-y-16">
            Mantén en ciclo
          </h1>
          <h1 className="font-extrabold text-5xl ml-16 -translate-y-16">
            tu dinero
          </h1>
          <div className="-translate-y-24">
            <span className="text-9xl font-bold text-gray-700 ml-[280px]">
              ”
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-20">
        <div className="relative ml-[600px] translate-y-6 ">
          <Progress />
        </div>
      </div>
      <div className="flex flex-col  w-full h-20">
        <div className="relative ml-[420px] translate-y-8 ">
          <Progress />
        </div>
      </div>

      <div className="flex justify-end my-12 mb-32">
        <div className="bg-red-500 h-20 w-40 mx-8">
      <div className="flex justify-center items-center h-screen">
      {/* Contenedor del cerdito con animación de salto */}
      <div className="relative w-48 h-48 animate-bounceNatural">
        {/* Sombrero */}
        <div className="sombrero-container absolute -top-10 left-8 w-32 h-16 bg-yellow-500 rounded-t-full border-4 border-yellow-600"></div>
        <div className="sombrero-brim absolute -top-6 left-4 w-40 h-6 bg-yellow-600 rounded-full"></div>

        {/* Cuerpo del cerdito */}
        <div className="w-48 h-48 bg-pink-400 rounded-full relative"></div>

        {/* Orejas */}
        <div className="absolute top-0 left-6 w-10 h-10 bg-pink-400 rounded-full transform rotate-45"></div>
        <div className="absolute top-0 right-6 w-10 h-10 bg-pink-400 rounded-full transform -rotate-45"></div>

        {/* Nariz */}
        <div className="absolute w-16 h-16 bg-pink-300 rounded-full bottom-12 left-16">
          <div className="flex justify-center items-center h-full">
            <div className="w-3 h-6 bg-pink-500 rounded-full mx-1"></div>
            <div className="w-3 h-6 bg-pink-500 rounded-full mx-1"></div>
          </div>
        </div>

        {/* Ojos con animación de parpadeo */}
        <div className="absolute top-12 left-12">
          <div className="eye-container">
            <div className="eye w-6 h-6 bg-white rounded-full flex justify-center items-center">
              <div className="eye-pupil w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-12 right-12">
          <div className="eye-container">
            <div className="eye w-6 h-6 bg-white rounded-full flex justify-center items-center">
              <div className="eye-pupil w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Patas */}
        <div className="absolute w-6 h-12 bg-pink-500 rounded-full bottom-0 left-10"></div>
        <div className="absolute w-6 h-12 bg-pink-500 rounded-full bottom-0 right-10"></div>
      </div>
    </div>



     </div>
      </div>
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
