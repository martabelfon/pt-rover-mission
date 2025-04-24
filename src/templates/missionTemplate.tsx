"use client";

import React from "react";
import MarsGrid from "@/organisms/marsGrid";
import ControlPanel from "@/molecules/controlPanel";
import { RoverPosition, Obstacle } from "@/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";

interface MissionTemplateProps {
  rover: RoverPosition;
  obstacles: Obstacle[];
  worldSize: number;
  viewSize: number;
  startX: number;
  startY: number;
  startDir: string;
  setStartX: (value: number) => void;
  setStartY: (value: number) => void;
  setStartDir: (value: string) => void;
  onStartMission: () => void;
  command: string;
  onCommandChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerateRandom: () => void;
  onExecuteCommand: () => void;
  executing: boolean;
  message: string;
}

const MissionTemplate: React.FC<MissionTemplateProps> = ({
  rover,
  obstacles,
  worldSize,
  viewSize,
  startX,
  startY,
  startDir,
  setStartX,
  setStartY,
  setStartDir,
  onStartMission,
  command,
  onCommandChange,
  onGenerateRandom,
  onExecuteCommand,
  executing,
  message,
}) => (
<div className="flex flex-col md:flex-row h-screen p-5 font-sans bg-gray-800">
    <div className="flex-1 flex flex-col space-y-5 bg-gray-800">
      <div className="flex justify-center mb-5">
        <FontAwesomeIcon icon={faShuttleSpace} className="text-[#16adfa] mr-2" />
        <h1 className="text-[#16adfa] font-bold"> Mars Rover Mission</h1>
      </div>
        <ControlPanel
          startX={startX}
          startY={startY}
          startDir={startDir}
          setStartX={setStartX}
          setStartY={setStartY}
          setStartDir={setStartDir}
          onStartMission={onStartMission}
          executing={executing}
        />
      <div style={{ marginBottom: 10 }}>
            <input
              value={command}
              onChange={onCommandChange}
              placeholder="Comando (ej. FFRLR)"
              disabled={executing}
              className="text-white"
            />
            <button onClick={onGenerateRandom} disabled={executing} className="text-white mr-1 border border-[#16adfa] rounded-md">
              Generar comando aleatorio
            </button>
            <button onClick={onExecuteCommand} disabled={executing || !command} className="text-white border border-[#16adfa] rounded-md">
              Ejecutar
            </button>
          </div>
          {message && <p>{message}</p>}
          <p className="text-white">Posición actual: ({rover.x}, {rover.y}) mirando hacia {rover.direction}</p>
      </div>
      <div className="flex-2 flex justify-center items-center bg-gray-800 rounded-md p-5">
      <MarsGrid rover={rover} obstacles={obstacles} worldSize={worldSize} viewSize={viewSize} />
    </div>
  </div>
    
);

export default MissionTemplate;