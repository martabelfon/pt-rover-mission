'use client';

import React, { useState } from "react";
import MissionTemplate from "@/components/templates/missionTemplate";
import { Direction } from "@/types/types";
import { useRover } from "@/hooks/useRover";
import Header from "@/components/organisms/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import Compass from "@/components/moleculas/compass";
import Button from "@/components/atoms/button";

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
    setMessage,
  } = useRover();

  const [isMissionStarted, setIsMissionStarted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleStartMission = () => {
    if (!pilotName || startX === undefined || startY === undefined || !startDir) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }
  
    setErrorMessage("");
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
          <div className="flex flex-row justify-between w-full text-lg">
            <div className="flex-1 pr-5 space-y-3">
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
                Una vez configurado el sistema, pulsa <strong>“Iniciar Misión”</strong> y tu viaje comenzará. Mantente alerta: cada decisión cuenta en un terreno tan hostil.
              </p>
            </div>
            <div className="flex-1 pl-5 flex flex-col justify-center items-center space-y-6">
              <div className="flex flex-col space-y-2">
              <label className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                value={pilotName}
                onChange={(e) => setPilotName?.(e.target.value)}
                className="block py-2.5 px-0 w-full text-lg text-[#16adfa] font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#16adfa] focus:outline-none focus:ring-0 focus:border-[#16adfa] peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#16adfa] peer-focus:dark:text-[#16adfa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Nombre del piloto:
              </label>
            </label>
            <label className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                value={startX}
                onChange={(e) => setStartX(e.target.value)}
                className="block py-2.5 px-0 w-full text-lg text-[#16adfa] font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#16adfa] focus:outline-none focus:ring-0 focus:border-[#16adfa] peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#16adfa] peer-focus:dark:text-[#16adfa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Longitud inicial:
              </label>
            </label>

            <label className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                value={startY}
                onChange={(e) => setStartY(e.target.value)}
                className="block py-2.5 px-0 w-full text-lg text-[#16adfa] font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#16adfa] focus:outline-none focus:ring-0 focus:border-[#16adfa] peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#16adfa] peer-focus:dark:text-[#16adfa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Latitud inicial:
              </label>
            </label>

                {message && (
                  <div className="text-red-500 text-center mt-4">
                    {message}
                  </div>
                )}
                <div className="mb-5">
                <span className="text-gray-700 dark:text-gray-300 mr-2">Dirección inicial:</span>
                <div className="inline-flex rounded-md shadow-xs mt-2" role="group">
                  <Button
                    onClick={() => setStartDir("N" as Direction)}
                    className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 ${startDir === "E" ? "bg-[#16adfa] text-[#16adfa]" : "hover:bg-gray-100 hover:text-[#16adfa] focus:z-10 focus:ring-2 focus:ring-[#16adfa] focus:text-[#16adfa] dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"}`}
                  >
                    Norte
                  </Button>
                  <Button
                    onClick={() => setStartDir("E" as Direction)}
                    className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 ${startDir === "N" ? "bg-[#16adfa] text-[#16adfa]" : "hover:bg-gray-100 hover:text-[#16adfa] focus:z-10 focus:ring-2 focus:ring-[#16adfa] focus:text-[#16adfa] dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"}`}
                  >
                    Este
                  </Button>
                  <Button
                    onClick={() => setStartDir("S" as Direction)}
                    className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 ${startDir === "W" ? "bg-[#16adfa] text-[#16adfa]" : "hover:bg-gray-100 hover:text-[#16adfa] focus:z-10 focus:ring-2 focus:ring-[#16adfa] focus:text-[#16adfa] dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"}`}
                  >
                    Sur
                  </Button>
                  <Button
                    onClick={() => setStartDir("W" as Direction)}
                    className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 ${startDir === "S" ? "bg-[#16adfa] text-[#16adfa]" : "hover:bg-gray-100 hover:text-[#16adfa] focus:z-10 focus:ring-2 focus:ring-[#16adfa] focus:text-[#16adfa] dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"}`}
                  >
                    Oeste
                  </Button>
                </div>
              </div>
              </div>
            </div>
          </div>
          {errorMessage && (
            <div className="text-red-500 text-center mt-4">
              {errorMessage}
            </div>
          )}
          <div className="flex justify-center items-center mt-5">
          <button 
            onClick={handleStartMission} 
            className="px-6 py-3 text-lg font-bold text-[#16adfa] border-2 border-[#16adfa] 
                      rounded-xl  relative
                      shadow-[0_0_1em_0.25em_rgba(22,173,250),0_0_4em_1em_rgba(22,173,250,.78),inset_0_0_0.75em_0.25em_rgba(22,173,250)] 
                      text-shadow-[0_0_0.5em_rgba(22,173,250)] 
                      transition-all duration-300
                      hover:text-white hover:bg-[#16adfa] 
                      hover:shadow-[0_0_1em_0.25em_rgba(22,173,250),0_0_4em_2em_rgba(22,173,250,.78),inset_0_0_0.75em_0.25em_rgba(22,173,250)] 
                      active:shadow-[0_0_0.6em_0.25em_rgba(22,173,250),0_0_2.5em_2em_rgba(22,173,250,.78),inset_0_0_0.5em_0.25em_rgba(22,173,250)]">
            Iniciar Misión
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
              <div className="flex gap-4 ml-3">
                  <img className="w-10 h-10 rounded-full" src="icons/avatar.png" alt="Profile" />
                  <div className="font-medium text-white w-65">
                    <div><strong>{pilotName}</strong></div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <p><FontAwesomeIcon icon={faMapLocationDot} /> Inf. inicial || Lat. {startY}, Long. {startX} - {startDir}</p>
                      <Compass direction={rover.direction} position={{ x: rover.x, y: rover.y }} />
                    </div>
                  </div>
              </div>
              <MissionTemplate
                rover={rover}
                obstacles={obstacles}
                worldSize={200}
                viewSize={30}
                startX={startX}
                startY={startY}
                startDir={startDir}
                setStartX={(value: number) => setStartX(value.toString())}
                setStartY={(value: number) => setStartY(value.toString())}
                setStartDir={(value: string) => setStartDir(value as Direction)}
                onStartMission={onStartMission}
                command={command}
                onCommandChange={handleCommandChange}
                onGenerateRandom={handleGenerateRandom}
                onExecuteCommand={executeCommand}
                executing={executing}
                message={message}
                onCloseMessage={() => setMessage("")}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}