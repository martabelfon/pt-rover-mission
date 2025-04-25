import React, { useEffect, useState } from "react";
import { RoverPosition, Obstacle } from "@/types/types";
import MapCell from "../moleculas/mapCell";

interface MarsGridProps {
  rover: RoverPosition;
  obstacles: Obstacle[];
  worldSize: number;
  viewSize: number;
}

const MarsGrid: React.FC<MarsGridProps> = ({ rover, obstacles, worldSize, viewSize }) => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  useEffect(() => {
    const halfView = Math.floor(viewSize / 2);
    const newStartX = Math.max(0, Math.min(worldSize - viewSize, rover.x - halfView));
    const newStartY = Math.max(0, Math.min(worldSize - viewSize, rover.y - halfView));

    setStartX(newStartX);
    setStartY(newStartY);
  }, [rover, worldSize, viewSize]);

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
            <MapCell
              key={`${x}-${y}`}
              isRover={isRover}
              isObstacle={isObstacle}
              isInsideMap={isInsideMap}
              direction={isRover ? rover.direction : undefined}
            />
          );
        })
      )}
    </div>
  );
};

export default MarsGrid;