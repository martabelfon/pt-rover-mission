export type Direction = "N" | "S" | "E" | "W";

export interface RoverPosition {
  x: number;
  y: number;
  direction: Direction;
}

export interface Obstacle {
  x: number;
  y: number;
}