export const constructEmptyMatrix = (width: number, height: number) => {
  const initialMatrix = [] as number[][];

  for (let i = 0; i < height; i++) {
    initialMatrix[i] = [];
    for (let j = 0; j < width; j++) {
      initialMatrix[i].push(0);
    }
  }

  return initialMatrix;
};
