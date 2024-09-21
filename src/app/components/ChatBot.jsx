"use client";
import React, { useState } from "react";
import Mensaje from "./Mensaje";
import { FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
  const [mensajeNuevo, setMensajeNuevo] = useState("");
  const [mensajeUsuario, setMensajeUsuario] = useState("");
  const [respuestaBot, setRespuestaBot] = useState("Hola! Soy Financito, ¿En qué te puedo ayudar?");

  // Función para enviar el mensaje al backend
  const enviarDatos = async (prompt) => {
    const url = "https://loopcash-back.vercel.app/porkash"; // URL de la API

    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": "fiamsd34iwe4232mfoer34DFFkfD34344Ff", // Cambia por tu token correcto
    };

    const body = JSON.stringify({
      text: prompt,
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la petición:", error);
      return { respuesta: "Error al obtener respuesta" }; // Mensaje de error por defecto
    }
  };

  const manejarTecla = (e) => {
    if (e.key === "Enter") {
      enviarMensaje();
    }
  };

  const enviarMensaje = async () => {
    if (mensajeNuevo.trim() === "") return; // Evitar enviar mensajes vacíos
    setRespuestaBot("");
    console.log("Enviando mensaje: ", mensajeNuevo); // Verificar si el mensaje está siendo enviado

    // Guardar mensaje del usuario
    setMensajeUsuario(mensajeNuevo);

    // Enviar el prompt al bot
    let respuesta;
    try {
      respuesta = await enviarDatos(mensajeNuevo); // Simula la llamada a tu API
      if (typeof respuesta === "string" && respuesta !== "") {
        setRespuestaBot(respuesta);
      } else {
        throw new Error("Respuesta del bot en formato incorrecto");
      }
    } catch (error) {
      console.error("Error al obtener la respuesta del bot", error);
      setRespuestaBot(respuesta);
      setMensajeNuevo("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      {/* Contenedor superior con el nombre del bot */}
      <div className="bg-[#16915a] w-[1000px] h-16 mx-8 my-8 rounded-full text-white flex justify-center items-center text-3xl">
        DON FINANCITO
      </div>

      {/* Contenedor de mensajes */}
      <div className="flex-grow p-4 overflow-y-auto w-[1000px] max-h-[400px]">
        {/* Mostrar el mensaje del usuario si existe */}
        {mensajeUsuario && <Mensaje mensaje={mensajeUsuario} esMio={true} mostrarIcono={false}/>}

        {/* Mostrar la respuesta del bot si existe */}
        {respuestaBot && <Mensaje mensaje={respuestaBot} esMio={false} mostrarIcono={true} />}
      </div>

      {/* Contenedor de input de mensajes */}
      <div className="bg-[#16915a] w-[1000px] h-16 mx-8 my-8 rounded-full text-white flex items-center text-xl absolute bottom-0 px-4">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={mensajeNuevo}
          onChange={(e) => setMensajeNuevo(e.target.value)}
          onKeyDown={manejarTecla} // Agrega este evento
          className="bg-transparent outline-none text-white w-full px-4"
        />
        <FaPaperPlane
          className="text-white text-2xl ml-4 cursor-pointer"
          onClick={enviarMensaje}
        />
      </div>
    </div>
  );
};

export default ChatBot;
