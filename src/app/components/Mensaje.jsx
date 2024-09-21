import React from "react";

const Mensaje = ({ mensaje, esMio, mostrarIcono }) => {
  return (
    <div className={`flex items-center p-2 m-2 rounded-lg max-w-xs ${esMio ? "bg-[#16915a] text-white self-end" : "bg-[#12676b] text-white self-start"}`}>
      {/* Condicional para mostrar la imagen */}
      {mostrarIcono && (
        <img
          src="cerdito.png" // Reemplaza con la ruta de tu imagen
          alt="Icono de usuario"
          className="w-8 h-8 mr-2" // Ajusta el tamaño según necesites
        />
      )}
      {/* Mensaje */}
      <div>
        {mensaje}
      </div>
    </div>
  );
};

export default Mensaje;

