import React from "react";

const Puerquito = () => {
  return (
    <div className=" relative flex justify-center items-center ">
      {/* Contenedor del cerdito con animación de salto */}
      <div className="relative w-28 h-28 animate-bounceCerdito">
        <p className="absolute top-[-60px] text-black font-semibold text-lg text-center">
          ¿Tienes duda?
        </p>
        {/* Cuerpo del cerdito */}
        <div className="w-28 h-28 bg-pink-400 rounded-full relative shadow-lg"></div>

        {/* Orejas más grandes */}
        <div className="absolute top-0 left-4 w-6 h-6 bg-pink-400 rounded-full transform rotate-45"></div>
        <div className="absolute top-0 right-4 w-6 h-6 bg-pink-400 rounded-full transform -rotate-45"></div>

        {/* Nariz */}
        <div className="absolute w-10 h-10 bg-pink-300 rounded-full bottom-8 left-9 shadow-md">
          <div className="flex justify-center items-center h-full">
            <div className="w-2 h-4 bg-pink-500 rounded-full mx-1"></div>
            <div className="w-2 h-4 bg-pink-500 rounded-full mx-1"></div>
          </div>
        </div>

        {/* Ojos grandes y expresivos */}
        <div className="absolute top-5 left-6">
          <div className="eye-container">
            <div className="eye w-6 h-6 bg-white rounded-full flex justify-center items-center">
              <div className="eye-pupil w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-5 right-6">
          <div className="eye-container">
            <div className="eye w-6 h-6 bg-white rounded-full flex justify-center items-center">
              <div className="eye-pupil w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bigote mexicano */}
        <div className="absolute bottom-16 left-8 w-20 h-4">
          <div className="mustache"></div>
        </div>

        {/* Corbata */}
        <div className="absolute w-12 h-5 bottom-4 left-8">
          <img src="/corbata.png" alt="corbata" />
        </div>

        {/* Patas */}
        <div className="absolute w-3 h-8 bg-pink-500 rounded-full bottom-0 left-6"></div>
        <div className="absolute w-3 h-8 bg-pink-500 rounded-full bottom-0 right-6"></div>
      </div>
    </div>
  );
};

export default Puerquito;
