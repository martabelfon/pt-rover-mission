import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";

interface RoverIconProps {
  direction: string;
}

const RoverIcon: React.FC<RoverIconProps> = ({ direction }) => {
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
    <FontAwesomeIcon
      icon={faShuttleSpace}
      className={`text-[#16adfa] ${getRotationClass(direction)}`}
    />
  );
};

export default RoverIcon;