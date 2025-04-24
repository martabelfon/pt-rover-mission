'use client';

import React from "react";
import MissionTemplate from "@/templates/missionTemplate";
import { Direction } from "@/types/types";
import { useRover } from "@/hooks/useRover";
import Header from "@/organisms/header";


export default function Page() {
  const {
    rover,
    obstacles,
    startX,
    startY,
    startDir,
    setStartX,
    setStartY,
    setStartDir,
    onStartMission,
    command,
    handleCommandChange,
    handleGenerateRandom,
    executeCommand,
    executing,
    message,
  } = useRover();

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <div className="flex-1"></div>
        <MissionTemplate
          rover={rover}
          obstacles={obstacles}
          worldSize={200}
          viewSize={30}
          startX={startX}
          startY={startY}
          startDir={startDir}
          setStartX={setStartX}
          setStartY={setStartY}
          setStartDir={(value: string) => setStartDir(value as Direction)}
          onStartMission={onStartMission}
          command={command}
          onCommandChange={handleCommandChange}
          onGenerateRandom={handleGenerateRandom}
          onExecuteCommand={executeCommand}
          executing={executing}
          message={message}
        />
      </div>

  );
}