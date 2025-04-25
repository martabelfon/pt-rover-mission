import React from "react";

interface CompassProps {
  direction: "N" | "E" | "S" | "W";
  position?: { x: number; y: number };
}

const Compass: React.FC<CompassProps> = ({ direction, position }) => {
  const letters = [
    { label: "N", top: "", left: "50%", translateX: "-50%" },
    { label: "E", top: "50%", left: "90%", translateY: "-50%" },
    { label: "S", top: "90%", left: "50%", translateX: "-50%" },
    { label: "W", top: "50%", left: "", translateY: "-50%" },
  ];

  return (
    <div className="relative w-48 h-48 mx-auto mt-6" style={{ backgroundImage: "url('icons/compass.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {position && (
        <div className="flex flex-col justify-center items-center absolute text-white font-bold text-lg " style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          {position.y} | {position.x}
        </div>
      )}
      {letters.map(({ label, top, left, translateX = "0", translateY = "0" }) => (
        <span
          key={label}
          className={`absolute text-2xl font-bold ${label === direction ? "text-[#16adfa]" : "text-gray-500"}`}
          style={{
            top,
            left,
            transform: `translate(${translateX}, ${translateY})`,
          }}
        >
          {label}
        </span>
      ))}
    </div>
  );
};

export default Compass;
