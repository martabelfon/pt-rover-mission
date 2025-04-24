import React from "react";
import { RoverPosition, Obstacle } from "@/types/types";

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

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${viewSize}, 20px)`,
        margin: "20px 0",
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
              style={{
                width: 20,
                height: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                backgroundColor: !isInsideMap ? "#eee" : isObstacle ? "red" : "white",
                border: "1px solid #ccc",
              }}
            >
              {isInsideMap && isRover && {
                N: "↑",
                S: "↓",
                E: "→",
                W: "←",
              }[rover.direction]}
            </div>
          );
        })
      )}
    </div>
  );
};

export default MarsGrid;