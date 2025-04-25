import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

const ObstacleIcon: React.FC = () => {
  return <FontAwesomeIcon icon={faMountain} className="text-red-500" />;
};

export default ObstacleIcon;