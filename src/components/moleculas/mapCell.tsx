import React from "react";
import RoverIcon from "../atoms/roverIcon";
import ObstacleIcon from "../atoms/obstacleIcon";

interface MapCellProps {
  isRover: boolean;
  isObstacle: boolean;
  isInsideMap: boolean;
  direction?: string;
}

const MapCell: React.FC<MapCellProps> = ({ isRover, isObstacle, isInsideMap, direction }) => {
  return (
    <div
      className={`flex items-center justify-center text-sm border border-gray-300 ${
        !isInsideMap ? "bg-gray-200" : "bg-white"
      }`}
      style={{ width: 20, height: 20 }}
    >
      {isRover ? (
        <RoverIcon direction={direction || "N"} />
      ) : isObstacle ? (
        <ObstacleIcon />
      ) : null}
    </div>
  );
};

export default MapCell;