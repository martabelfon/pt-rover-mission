import React from "react";
import Input from "@/atoms/input";
import Button from "@/atoms/button";

interface ControlPanelProps {
  startX: number;
  startY: number;
  startDir: string;
  setStartX: (value: number) => void;
  setStartY: (value: number) => void;
  setStartDir: (value: string) => void;
  onStartMission: () => void;
  executing: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  startX,
  startY,
  startDir,
  setStartX,
  setStartY,
  setStartDir,
  onStartMission,
  executing,
}) => (
  <div className="mb-5 flex flex-col space-y-3">
    <label className="flex items-center space-x-2">
      <span className="text-white">X:</span>
      <Input
        type="number"
        value={startX}
        onChange={(e) => setStartX(Number(e.target.value))}
        disabled={executing}
        min={0}
        max={199}
        className="w-16 p-1 border border-gray-300 rounded-md text-white"
      />
    </label>
    <label className="flex items-center space-x-2">
      <span className="text-white">Y:</span>
      <Input
        type="number"
        value={startY}
        onChange={(e) => setStartY(Number(e.target.value))}
        disabled={executing}
        min={0}
        max={199}
        className="w-16 p-1 border border-gray-300 rounded-md text-white"
      />
    </label>
    <label className="flex items-center space-x-2">
      <span className="text-white">Dirección:</span>
      <select
        value={startDir}
        onChange={(e) => setStartDir(e.target.value)}
        disabled={executing}
        className="p-1 border border-gray-300 rounded-md text-white"
      >
        <option value="N">N</option>
        <option value="S">S</option>
        <option value="E">E</option>
        <option value="W">W</option>
      </select>
    </label>
    <Button 
      onClick={onStartMission} 
      disabled={executing} 
      className="ml-2 mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
      >
      Iniciar misión
    </Button>
  </div>
);

export default ControlPanel;