'use client';

import React, { useState } from "react";
import MissionTemplate from "@/templates/missionTemplate";
import { Direction } from "@/types/types";
import { useRover } from "@/hooks/useRover";
import Header from "@/organisms/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";
import Compass from "@/components/compass";

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
    pilotName,
    setPilotName,
    command,
    handleCommandChange,
    handleGenerateRandom,
    executeCommand,
    executing,
    message,
  } = useRover();

  const [isMissionStarted, setIsMissionStarted] = useState(false);

  const handleStartMission = () => {
    onStartMission(); 
    setIsMissionStarted(true); 
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex-1 flex overflow-hidden bg-gray-800">
      {!isMissionStarted ? (
        <div className="flex flex-col flex-grow p-5 space-y-5 overflow-auto text-white">
          <div className="flex justify-center mb-5">
            <p className="mt-2 font-bold text-yellow-300 text-center text-3xl">
              ¿Estás listo para dejar tu huella en Marte?
            </p>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex-1 pr-5">
              <p className="text-sm italic text-gray-400">Protocolo de activación: Misión PT-Housfy</p>
              <p className="mt-4 italic">
                <strong>Piloto, tu misión está a punto de comenzar.</strong>
              </p>
              <p className="mt-2 italic">
                Hemos detectado actividad inusual en la superficie marciana. Necesitamos que configures tu módulo rover para iniciar la exploración. 
              </p>
              <p className="mt-2 italic">
                Para ello, necesitamos que ingreses tus datos como comandante de misión, la posición inicial desde donde comenzará el despliegue y la dirección hacia la que quieres que se oriente el rover.
              </p>
              <p className="mt-2 italic">
                Una vez configurado el sistema, pulsa <strong>“Start Mission”</strong> y tu viaje comenzará. Mantente alerta: cada decisión cuenta en un terreno tan hostil.
              </p>
            </div>
            <div className="flex-1 pl-5">
              <div>
                <label>
                  Nombre del piloto:
                  <input
                    type="string"
                    value={pilotName}
                    onChange={(e) => setPilotName?.(e.target.value)}
                    className="bg-white mr-2 ml-1"
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label>
                  Longitud inicial:
                  <input
                    type="number"
                    value={startX}
                    onChange={(e) => setStartX(Number(e.target.value))}
                  />
                </label>
                <label>
                  Latitud inicial:
                  <input
                    type="number"
                    value={startY}
                    onChange={(e) => setStartY(Number(e.target.value))}
                  />
                </label>
              </div>
              <div>
                <label>
                  Start Direction:
                  <select
                    value={startDir}
                    onChange={(e) => setStartDir(e.target.value as Direction)}
                  >
                    <option value="NORTH">Norte</option>
                    <option value="EAST">Este</option>
                    <option value="SOUTH">Sud</option>
                    <option value="WEST">Oeste</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button 
              onClick={handleStartMission} 
              className="px-4 py-2 bg-[#16adfa] text-white rounded-md hover:bg-[#16adfa]"
            >
              Start Mission
            </button>
          </div>
        </div>
        ) : (
          <div>
            <div className="flex justify-center mb-5">
              <FontAwesomeIcon icon={faShuttleSpace} className="text-[#16adfa] mr-2 text-4xl" />
              <h1 className="text-[#16adfa] font-bold text-4xl"> Mars Rover Mission</h1>
            </div>
            <div className="flex">
              <div className="info-message p-4 rounded-md mb-4 text-white">
                <h3 className="text-lg font-bold">Información de la misión:</h3>
                <p><strong>Nombre del piloto:</strong> {pilotName}</p>
                <p><strong>Posición inicial:</strong> Longitud {startX}, Latitud {startY}</p>
                <p><strong>Dirección inicial:</strong> {startDir}</p>
                <Compass direction={rover.direction} position={{ x: rover.x, y: rover.y }} />

              </div>
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
          </div>
        )}
      </div>
    </div>
  );
}