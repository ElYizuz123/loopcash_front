import React from "react";

const Mensaje = ({ mensaje, esMio }) => {
  return (
    <div
      className={`w-fit max-w-[80%] p-4 my-2 rounded-lg text-white ${
        esMio ? "bg-[#16915a]" : "bg-[#12676b]"
      }`}
    >
      {mensaje}
    </div>
  );
};

export default Mensaje;
