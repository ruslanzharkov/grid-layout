export interface Coordinates {
  x: number;
  y: number;
}

export interface SizeProperties {
  width: number;
  height: number;
}

export interface GridElement extends Coordinates, SizeProperties {}
