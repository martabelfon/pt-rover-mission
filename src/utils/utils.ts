import { Direction, Obstacle } from "@/types/types";

export const generateObstacles = (size: number, count: number): Obstacle[] => {
  const obstacles: Obstacle[] = [];
  while (obstacles.length < count) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);
    if (!obstacles.some((o) => o.x === x && o.y === y)) {
      obstacles.push({ x, y });
    }
  }
  return obstacles;
};

export const turnLeft = (d: Direction): Direction =>
  ({"N": "W", "W": "S", "S": "E", "E": "N"} as Record<Direction, Direction>)[d];

export const turnRight = (d: Direction): Direction =>
  ({"N": "E", "E": "S", "S": "W", "W": "N"} as Record<Direction, Direction>)[d];