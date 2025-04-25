import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 text-white p-4">
      <div className="text-lg font-bold">Prueba Técnica  - Marta Beltrán Fonseca</div>
      <div>
        <img
          src="/icons/housfy.png" 
          alt="Logo Housfy"
          className="h-8"
        />
      </div>

      <div className="text-sm">
        <p>PT Housfy - Mars Rover Mission</p>
        <p>25 de abril de 2025</p>
      </div>
    </header>
  );
};

export default Header;