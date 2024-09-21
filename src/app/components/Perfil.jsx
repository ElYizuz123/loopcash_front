import React from "react";
import Link from "next/link";

export const Perfil = () => {
  return (
    <Link
      href="/UpdateData"
      className="flex items-center space-x-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:translate-x-4"
    >
      <div className="w-16 h-16 bg-gray-600 rounded-full ml-4 flex items-center justify-center transition-all duration-300 ease-in-out">
        <img
          src="profile.png"
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <span className="text-xl font-bold transition-all duration-300 ease-in-out">
        GutyPambolero
      </span>
    </Link>
  );
};

export default Perfil;
