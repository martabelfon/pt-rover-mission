"use client";

import React from "react";
import MarsGrid from "@/organisms/marsGrid";
import ControlPanel from "@/molecules/controlPanel";
import { RoverPosition, Obstacle } from "@/types/types";

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
  <div style={{ padding: 20, fontFamily: "sans-serif" }}>
    <h1>🛸 Mars Rover Mission</h1>
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
    <MarsGrid rover={rover} obstacles={obstacles} worldSize={worldSize} viewSize={viewSize} />
    <div style={{ marginBottom: 10 }}>
      <input
        value={command}
        onChange={onCommandChange}
        placeholder="Comando (ej. FFRLR)"
        disabled={executing}
      />
      <button onClick={onGenerateRandom} disabled={executing}>
        Generar comando aleatorio
      </button>
      <button onClick={onExecuteCommand} disabled={executing || !command}>
        Ejecutar
      </button>
    </div>
    {message && <p>{message}</p>}
    <p>📍 Posición actual: ({rover.x}, {rover.y}) mirando hacia {rover.direction}</p>
  </div>
);

export default MissionTemplate;