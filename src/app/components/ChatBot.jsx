"use client";
import React, { useState } from "react";
import Mensaje from "./Mensaje";
import { FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
  const [mensajes, setMensajes] = useState([
    {
      texto: "¡Hola, soy Don Fainencito! ¿Cómo te puedo ayudar?",
      esMio: false,
    },
  ]);
  const [mensajeNuevo, setMensajeNuevo] = useState("");

  const enviarDatos = async (prompt) => {
    const url = "https://loopcash-back.vercel.app/porkash";

    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": "fiamsd34iwe4232mfoer34DFFkfD34344Ff",
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
      console.log("Respuesta del servidor:", data);
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  const enviarMensaje = async () => {
    if (mensajeNuevo.trim()) {
      // Agregar mensaje del usuario
      setMensajes([...mensajes, { texto: mensajeNuevo, esMio: true }]);

      // Enviar el mensaje como prompt y esperar la respuesta
      const respuestaBot = await enviarDatos(mensajeNuevo);
      console.log(respuestaBot);
      // Simular respuesta del bot
      setTimeout(() => {
        if (respuestaBot) {
          setMensajes((prevMensajes) => [
            ...prevMensajes,
            { texto: respuestaBot.text, esMio: false }, // Muestra la respuesta del bot
          ]);
        } else {
          setMensajes((prevMensajes) => [
            ...prevMensajes,
            {
              texto: "Lo siento, no pude obtener una respuesta.",
              esMio: false,
            },
          ]);
        }
      }, 1000);

      setMensajeNuevo("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      {/* Contenedor superior con el nombre del bot */}
      <div className="bg-[#16915a] w-[1000px] h-16 mx-8 my-8 rounded-full text-white flex justify-center items-center text-3xl">
        DON FAINENCITO
      </div>

      {/* Contenedor de mensajes */}
      <div className="flex-grow p-4 overflow-y-auto w-[1000px] max-h-[400px]">
        {mensajes.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.esMio ? "justify-end" : "justify-start"}`}
          >
            <Mensaje mensaje={msg.texto} esMio={msg.esMio} />
          </div>
        ))}
      </div>

      {/* Contenedor de input de mensajes */}
      <div className="bg-[#16915a] w-[1000px] h-16 mx-8 my-8 rounded-full text-white flex items-center text-xl absolute bottom-0 px-4">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={mensajeNuevo}
          onChange={(e) => setMensajeNuevo(e.target.value)}
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
