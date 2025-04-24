import React from "react";
import { RoverPosition, Obstacle } from "@/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faShuttleSpace } from "@fortawesome/free-solid-svg-icons";

interface MarsGridProps {
  rover: RoverPosition;
  obstacles: Obstacle[];
  worldSize: number;
  viewSize: number;
}

const MarsGrid: React.FC<MarsGridProps> = ({ rover, obstacles, worldSize, viewSize }) => {
  const half = Math.floor(viewSize / 2);
  const startX = Math.max(0, Math.min(worldSize - viewSize, rover.x - half));
  const startY = Math.max(0, Math.min(worldSize - viewSize, rover.y - half));

  const getRotationClass = (direction: string) => {
    switch (direction) {
      case "E":
        return "rotate-0";
      case "S":
        return "rotate-90";
      case "W":
        return "rotate-180";
      case "N":
        return "rotate-270";
      default:
        return "";
    }
  };

  return (
    <div
      className="grid gap-0"
      style={{
        gridTemplateColumns: `repeat(${viewSize}, 20px)`,
      }}
    >
      {Array.from({ length: viewSize }).flatMap((_, row) =>
        Array.from({ length: viewSize }).map((_, col) => {
          const x = startX + col;
          const y = startY + row;
          const isInsideMap = x >= 0 && x < worldSize && y >= 0 && y < worldSize;
          const isRover = rover.x === x && rover.y === y;
          const isObstacle = obstacles.some((o) => o.x === x && o.y === y);

          return (
            <div
              key={`${x}-${y}`}
              className={`flex items-center justify-center text-sm border border-gray-300 ${
                !isInsideMap ? "bg-gray-200" : "bg-white"
              }`}
              style={{ width: 20, height: 20 }}
            >
             {isInsideMap && isRover ? (
                <FontAwesomeIcon icon={faShuttleSpace} className={`text-[#16adfa] ${getRotationClass(rover.direction)}`} />
              ) : isObstacle ? (
                <FontAwesomeIcon icon={faMountain} className="text-red-500" />
              ) : null}
            </div>
          );
        })
      )}
    </div>
  );
};

export default MarsGrid;