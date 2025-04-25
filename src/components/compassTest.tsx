import React, { useState } from "react";
import Compass from "./compass";

const CompassTest = () => {
  const [direction, setDirection] = useState<"N" | "E" | "S" | "W">("N");

  const directions: ("N" | "E" | "S" | "W")[] = ["N", "E", "S", "W"];

  return (
    <div className="flex flex-col items-center space-y-4">
      <Compass direction={direction} />
      <div className="flex space-x-2">
        {directions.map((dir) => (
          <button
            key={dir}
            onClick={() => setDirection(dir)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            {dir}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CompassTest;
