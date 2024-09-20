"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ButtonCalendar = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Formato YYYY-MM-DD
    setCurrentDate(formattedDate);
  }, []);

  const handleDateChange = (event) => {
    setCurrentDate(event.target.value); // Actualiza la fecha seleccionada
  };

  return (
    <div>
      <div class="flex justify-center items-center h-screen">
        {/* SELECTOR DE FECHA */}
        <input
          type="date"
          className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md 
          shadow-md hover:bg-green-600 active:shadow-lg focus:outline-none"
          value={currentDate}
          onChange={handleDateChange}
          autoFocus
        />
      </div>
    </div>
  );
};

export default ButtonCalendar;
