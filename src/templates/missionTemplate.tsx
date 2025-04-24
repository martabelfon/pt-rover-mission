"use client";

import React from "react";
import MarsGrid from "@/organisms/marsGrid";
import { RoverPosition, Obstacle, Direction } from "@/types/types";


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
  setStartDir?: (value: Direction) => void;
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
  command,
  onCommandChange,
  onGenerateRandom,
  onExecuteCommand,
  executing,
  message,
}) => (
<div className="flex flex-grow items-start md:flex-row h-screen p-5 font-sans overflow-hidden">
    <div className="flex-2 flex justify-center items-center rounded-md p-5 overflow-auto">
      <MarsGrid rover={rover} obstacles={obstacles} worldSize={worldSize} viewSize={viewSize} />
    </div>
    <div className="flex-1 flex flex-col space-y-5 overflow-auto">
      <div style={{ marginBottom: 10 }}>
            <input
              value={command}
              onChange={onCommandChange}
              placeholder="Comando (ej. FFRLR)"
              disabled={executing}
              className="text-white"
            />
            <button 
              onClick={onGenerateRandom} 
              disabled={executing} 
              className="text-white mr-1 border border-[#16adfa] rounded-md">
              Generar comando aleatorio
            </button>
            <button 
              onClick={onExecuteCommand} 
              disabled={executing || !command} 
              className="text-white border border-[#16adfa] rounded-md">
              Ejecutar
            </button>
          </div>
          {message && <p>{message}</p>}
          <p className="text-white">Posición actual: ({rover.x}, {rover.y}) mirando hacia {rover.direction}</p>
      </div>
      
  </div>
    
);

export default MissionTemplate;