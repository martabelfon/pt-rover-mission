import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace, faUser } from "@fortawesome/free-solid-svg-icons";
import Compass from "@/components/moleculas/compass";
import MissionTemplate from "@/components/templates/missionTemplate";
import { Direction, RoverPosition, Obstacle } from "@/types/types";

interface MissionViewProps {
  rover: RoverPosition;
  obstacles: Obstacle[];
  startX: number;
  startY: number;
  startDir: Direction;
  pilotName: string;
  command: string;
  onCommandChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerateRandom: () => void;
  onExecuteCommand: () => void;
  executing: boolean;
  message: string;
  onCloseMessage: () => void;
}

const MissionView: React.FC<MissionViewProps> = ({
  rover,
  obstacles,
  startX,
  startY,
  startDir,
  pilotName,
  command,
  onCommandChange,
  onGenerateRandom,
  onExecuteCommand,
  executing,
  message,
  onCloseMessage,
}) => {
  return (
    <div>
      <div className="flex justify-center mb-5">
        <FontAwesomeIcon icon={faShuttleSpace} className="text-[#16adfa] mr-2 text-4xl" />
        <h1 className="text-[#16adfa] font-bold text-4xl">Mars Rover Mission</h1>
      </div>
      <div className="flex">
        <div className="info-message p-4 rounded-md mb-4 text-white">
          <h3 className="text-lg font-bold">Información de la misión:</h3>
          <p>
            <strong>
              <FontAwesomeIcon icon={faUser} /> {pilotName}
            </strong>
          </p>
          <p>
            <strong>Posición inicial:</strong> Longitud {startX}, Latitud {startY}
          </p>
          <p>
            <strong>Dirección inicial:</strong> {startDir}
          </p>
          <Compass direction={rover.direction} />
        </div>
        <MissionTemplate
          rover={rover}
          obstacles={obstacles}
          worldSize={200}
          viewSize={30}
          startX={startX}
          startY={startY}
          startDir={startDir}
          onStartMission={() => {}}
          setStartX={() => {}}
          setStartY={() => {}}
          command={command}
          onCommandChange={onCommandChange}
          onGenerateRandom={onGenerateRandom}
          onExecuteCommand={onExecuteCommand}
          executing={executing}
          message={message}
          onCloseMessage={onCloseMessage}
        />
      </div>
    </div>
  );
};

export default MissionView;