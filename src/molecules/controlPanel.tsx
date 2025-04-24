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
  <div style={{ marginBottom: 20 }}>
    <label>
      X:
      <Input
        type="number"
        value={startX}
        onChange={(e) => setStartX(Number(e.target.value))}
        disabled={executing}
        min={0}
        max={199}
        style={{ width: 50, marginRight: 10 }}
      />
    </label>
    <label>
      Y:
      <Input
        type="number"
        value={startY}
        onChange={(e) => setStartY(Number(e.target.value))}
        disabled={executing}
        min={0}
        max={199}
        style={{ width: 50, marginRight: 10 }}
      />
    </label>
    <label>
      Dirección:
      <select
        value={startDir}
        onChange={(e) => setStartDir(e.target.value)}
        disabled={executing}
      >
        <option value="N">N</option>
        <option value="S">S</option>
        <option value="E">E</option>
        <option value="W">W</option>
      </select>
    </label>
    <Button onClick={onStartMission} disabled={executing} style={{ marginLeft: 10 }}>
      Iniciar misión
    </Button>
  </div>
);

export default ControlPanel;