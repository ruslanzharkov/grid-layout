export interface Position {
  x: number;
  y: number;
}

export interface SizeProperties {
  width: number;
  height: number;
}

export interface GridItem extends Position, SizeProperties {}
