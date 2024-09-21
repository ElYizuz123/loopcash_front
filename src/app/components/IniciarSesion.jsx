"use client";
import React, { useState } from "react";

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-96 md:w-1/3 lg:w-1/4">
        {/* Lugar para el logo */}
        <div className="mb-4 flex justify-center text-3xl">
          LoopCash
        </div>
        {/* Lugar para la mascota */}
        <div className="mb-4 flex justify-center">
          <img src="cerdito.png" alt="Mascota" className="h-24 w-24" />
        </div>
        <h2 className="text-2xl text-[#16915a] mb-6 text-center">Iniciar Sesión</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-[#16915a] hover:bg-[#12676b] text-white font-bold py-2 px-4 rounded w-full"
        >
          Iniciar Sesión
        </button>
        <p className="mt-4 text-center">
          ¿No tienes una cuenta? <a href="/Registrar" className="text-[#16915a] hover:underline">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default IniciarSesion;

