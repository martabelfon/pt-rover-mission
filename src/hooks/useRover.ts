import { useState } from "react";
import { RoverPosition, Obstacle, Direction } from "@/types/types";
import { generateObstacles, turnLeft, turnRight } from "@/utils/utils";

const worldSize = 200;

export const useRover = () => {
  const [startX, setStartX] = useState(10);
  const [startY, setStartY] = useState(10);
  const [startDir, setStartDir] = useState<Direction>("N");
  const [rover, setRover] = useState<RoverPosition>({ x: startX, y: startY, direction: startDir });
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [command, setCommand] = useState("");
  const [message, setMessage] = useState("");
  const [executing, setExecuting] = useState(false);
  const [pilotName, setPilotName] = useState("");

  const onStartMission = () => {
    setRover({ x: startX, y: startY, direction: startDir });
    setObstacles(generateObstacles(worldSize, 3000));
    setMessage("");
  };

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value.toUpperCase());
  };

  const handleGenerateRandom = () => {
    const random = Array.from({ length: 10 }, () =>
      ["F", "L", "R"][Math.floor(Math.random() * 3)]
    ).join("");
    setCommand(random);
  };

  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const executeCommand = async () => {
    if (executing || !command) return;

    setExecuting(true);
    setMessage("");

    let current = { ...rover };

    for (const c of command) {
      const next = { ...current };

      if (c === "F") {
        switch (current.direction) {
          case "N":
            next.y = current.y - 1;
            break;
          case "S":
            next.y = current.y + 1;
            break;
          case "E":
            next.x = current.x + 1;
            break;
          case "W":
            next.x = current.x - 1;
            break;
        }

        if (next.x < 0 || next.x >= worldSize || next.y < 0 || next.y >= worldSize) {
          setMessage(
            `Obstáculo encontrado, fin del mapa en (${current.x}, ${current.y}). El rover se detuvo.`
          );
          break;
        }

        const hit = obstacles.some((o) => o.x === next.x && o.y === next.y);
        if (hit) {
          setMessage(` Obstáculo encontrado en (${next.x}, ${next.y}). El rover se detuvo.`);
          break;
        }

        current = next;
        setRover(current);
        await sleep(200);
      }

      if (c === "L") {
        current.direction = turnLeft(current.direction);
        setRover({ ...current });
        await sleep(200);
      }

      if (c === "R") {
        current.direction = turnRight(current.direction);
        setRover({ ...current });
        await sleep(200);
      }
    }

    setExecuting(false);
  };

  return {
    rover,
    obstacles,
    startX,
    startY,
    startDir,
    setStartX,
    setStartY,
    setStartDir,
    pilotName,
    setPilotName,
    onStartMission,
    command,
    handleCommandChange,
    handleGenerateRandom,
    executeCommand,
    executing,
    message,
  };
};