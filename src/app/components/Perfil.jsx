import React from "react";
import Link from 'next/Link'

export const Perfil = () => {
  return (
    <Link
    href='/Register'
    className="flex justify-between items-center space-x-8">  
      <div className="w-16 h-16 bg-gray-600 rounded-full ml-4">
        <img></img>
      </div>
      <span className="text-2xl">Juan Perez</span>
    </Link>
  );
};
export default Perfil;
