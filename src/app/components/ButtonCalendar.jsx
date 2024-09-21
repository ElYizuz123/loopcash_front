"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";

const ButtonCalendar = () => {
  const [currentDate, setCurrentDate] = useState(""); // Almacena la fecha seleccionada
  const [monthName, setMonthName] = useState(""); // Almacena el nombre del mes seleccionado

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Formato YYYY-MM-DD
    const month = moment(today).format("MMMM"); // Nombre del mes actual
    setCurrentDate(formattedDate);
    setMonthName(month);
  }, []);

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const month = moment(selectedDate).format("MMMM"); // Obtener el nombre del mes
    setCurrentDate(event.target.value); // Actualiza la fecha seleccionada
    setMonthName(month); // Actualiza el nombre del mes
  };

  return (
    <div className="flex justify-center items-center h-full">
      {/* Input date oculto para seleccionar la fecha */}
      <button
        type="date"
        className="opacity-0 absolute px-44 py-5" // Escondemos el input de fecha
        value={currentDate}
        onChange={handleDateChange}
        autoFocus
      />

      {/* Input de texto para mostrar el mes seleccionado */}
      <input
        type="text"
        className="bg-green-500 text-white font-bold px-6 py-2 rounded-2xl 
          text-3xl shadow-2xl hover:bg-green-600 active:shadow-lg focus:outline-none h-20 w-[500px]"
        value={monthName} // Mostrar el nombre del mes
        readOnly
        onFocus={(e) => e.target.previousSibling.click()} // Al hacer foco, abrimos el input de fecha
      />
    </div>
  );
};

export default ButtonCalendar;
