import Image from "next/image";
import React from "react";
import DataInput from "./DataInput";

const Login = () => {
  return (
    <div className="relative w-screen h-screen mt-20">
      <div className=" absolute  w-[900px] h-[600px] mx-auto inset-0 bg-[#16915A] rounded-2xl shadow-2xl shadow-[#12676B] ">
        <div className=" w-full h-10 ">
          <h1 className="text-3xl text-white font-bold text-center">
            Registra tus datos
          </h1>

          <div className="flex justify-start mt-10 px-4">
            <h1 className="text-white text-2xl text-center items-center  "> Perfil</h1>
         
           
            <Image
              src={"/profile.png"}
              height={200}
              width={150}
              alt="Profile2"
              className=" w-48 h-48 mt-10"
            />
            <div className=" w-[500px] mx-3 p-4">
              {/* Contenedor vertical para los campos del formulario */}
              <div className="flex flex-col space-y-4">
                {/* Fila 1: Label e Input en horizontal */}
                <div className="flex flex-row items-center space-x-4">
                  <label
                    className="w-1/4 text-lg text-white font-semibold"
                    htmlFor="name"
                  >
                    Nombre
                  </label>

                  <input
                    className="w-3/4 p-2  text-[##FFFB66] border-b-2 border-[#FFFB66]  bg-transparent"
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>

                <div className="flex flex-row items-center space-x-4">
                  <label
                    className="w-1/4 text-lg text-white font-semibold"
                    htmlFor="text"
                  >
                    Ingresos
                  </label>
                  <input
                    className="w-3/4  p-2 text-[##FFFB66] border-b-2 border-[#FFFB66]  bg-transparent"
                    type="text"
                    id="text"
                    name="text"
                  />
                </div>

                <div className="flex flex-row items-center space-x-4">
                  <label
                    className="w-1/4 text-lg text-white font-semibold"
                    htmlFor="meta"
                  >
                    Meta
                  </label>
                  <input
                    className="w-3/4 p-2  text-[#FFFB66] border-b-2 border-[#FFFB66]  bg-transparent"
                    type="text"
                    id="meta"
                    name="meta"
                  />
                </div>
                <div className="flex items-center mb-4">
                 
                  <input
                    type="radio"
                    id="weekly"
                    name="goalPeriod"
                    value="Semanal"
                    //checked={formData.goalPeriod === "Semanal"}
                    //onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="weekly" className="mr-16  text-[#FFFB66] font-semibold">
                    Semanal
                  </label>

                  <input
                    type="radio"
                    id="annual"
                    name="goalPeriod"
                    value="Anual"
                    //checked={formData.goalPeriod === "Anual"}
                    //onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="annual" className="mr-16 text-[#FFFB66] font-semibold">
                    Anual
                  </label>

                  <input
                    type="radio"
                    id="monthly"
                    name="goalPeriod"
                    value="Mensual"
                    //checked={formData.goalPeriod === "Mensual"}
                    //onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="monthly " className="mr-16  text-[#FFFB66] font-semibold">Mensual</label>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <label
                    className="w-1/4 text-lg text-white font-semibold"
                    htmlFor="email"
                  >
                    Correo
                  </label>
                  <input
                    className="w-3/4  p-2 text-[##FFFB66] border-b-2 border-[#FFFB66]  bg-transparent"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <label
                    className="w-1/4 text-lg text-white font-semibold"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <input
                    className="w-3/4 p-2  text-[#FFFB66] border-b-2 border-[#FFFB66]  bg-transparent"
                    type="password"
                    id="password"
                    name="password"
                  />
                </div>
                <p className="text-xs text-white"> Tus datos personales se utilizarán para asegurar el correcto funcionamiento de la aplicación, mejorar tu experiencia de usuario y otros propósitos especificados en nuestra política de privacidad.</p>
                <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              //checked={formData.acceptTerms}
              //onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="acceptTerms" className="text-white ">Acepto el uso de mis datos personales</label>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full border-[#FFFB66] border-2 p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Registrar
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
