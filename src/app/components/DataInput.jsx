"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPencilAlt } from "react-icons/fa";

const DataInput = () => {
  const [name, setName] = useState("Juan Perez");
  const [income, setIncome] = useState(1500);
  const [goalAmount, setGoalAmount] = useState(8000);
  const [goalTime, setGoalTime] = useState("1 año");

  return (
    <div className="p-4 rounded-md max-w-sm mx-auto  translate-x-5 ">
      {/* Nombre */}
      <div className="flex items-center mb-4">
        <FaPencilAlt className=" absolute text-[#FFFB66] -left-4" />{" "}
     
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-[#FFFB66] font-semibold outline-none border-b-2 border-[#FFFB66] bg-transparent"
        />
      </div>

      {/* Ingreso */}
      <div className="flex items-center mb-4">
        <FaPencilAlt className=" absolute text-[#FFFB66] -left-4" />{" "}
        <p className="text-white font-semibold mr-2">Ingreso</p>
        <span className="text-[#FFFB66]">$</span>
        <input
          type="texto"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="text-[#FFFB66] font-semibold outline-none border-b-2 border-[#FFFB66] bg-transparent w-[123px]"
        />
      </div>

      {/* Meta */}
      <div className="mb-4">
        <div className="flex items-center">
          <FaPencilAlt className=" absolute text-[#FFFB66] -left-4" />{" "}
          <span className="text-white font-semibold mr-2">Meta en</span>
          <select
            value={goalTime}
            onChange={(e) => setGoalTime(e.target.value)}
            className="bg-transparent text-[#FFFB66] font-semibold outline-none border-b-2 border-[#FFFB66] "
          >
            <option className="text-black" value="1 semana">1 semana</option>
            <option className="text-black" value="1 mes">1 mes</option>
            <option className="text-black" value="1 año">1 año</option>
          </select>
        </div>

        <div className="flex items-center mt-2">
          <span className="text-[#FFFB66] mr-1">$</span>
          <input
            type="texto"
            value={goalAmount}
            onChange={(e) => setGoalAmount(Number(e.target.value))}
            className="flex justify-center stibg-transparent text-[#FFFB66] font-semibold outline-none border-b-2 border-[#FFFB66] 
            bg-[#16915A] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DataInput;
