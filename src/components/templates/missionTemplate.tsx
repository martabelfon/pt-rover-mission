"use client";

import React from "react";
import MarsGrid from "@/components/organisms/marsGrid";
import { RoverPosition, Obstacle, Direction } from "@/types/types";
import Button from "@/components/atoms/button";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


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
  onCloseMessage: () => void;
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
  onCloseMessage,
}) => (
  <>
    <div className="flex flex-grow items-start md:flex-row h-screen p-5 font-sans overflow-hidden">
        <div className="flex-2 flex justify-center items-center rounded-md p-5 overflow-auto">
          <MarsGrid rover={rover} obstacles={obstacles} worldSize={worldSize} viewSize={viewSize} />
        </div>
        <div className="flex-1 flex flex-col space-y-5 overflow-auto">
          <div style={{ marginBottom: 10 }}>
                <input
                  type="text"
                  value={command}
                  onChange={onCommandChange}
                  placeholder="Comando (ej. FFRLR)"
                  disabled={executing}
                  className="mb-3 block py-2.5 px-0 w-full text-lg text-[#16adfa] font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#16adfa] focus:outline-none focus:ring-0 focus:border-[#16adfa] peer"
                />
                <Button 
                  onClick={onGenerateRandom} 
                  disabled={executing} 
                  className="text-white mr-1 border border-[#16adfa] rounded-md p-2 w-80 mb-2">
                  Generar comando aleatorio
                </Button>
                <Button 
                  onClick={onExecuteCommand} 
                  disabled={executing || !command} 
                  className="text-white mr-1 border border-[#16adfa] rounded-md p-2 w-80">
                  Ejecutar
                </Button>
              </div>  
          </div>
      </div>
      {message && (
                <div className="bg-gray-500/75 transition-opacity fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 overflow-y-auto overflow-x-hidden top-0 right-0 left-0 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                  <div className="bg-white p-6 rounded-md shadow-lg text-center ">
                    <div className="flex flex-row">
                      <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                      <p className="ml-2 text-lg font-bold text-gray-800">{message}</p>
                    </div>
                    <Button
                      onClick={onCloseMessage}
                      className="text-[#16adfa] border border-[#16adfa] rounded-md mt-2 p-2 w-100"
                    >
                      Cerrar
                    </Button>
                  </div>
                </div>
              )}

</>
    
);

export default MissionTemplate;