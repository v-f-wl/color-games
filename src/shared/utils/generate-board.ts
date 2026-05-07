import generateRandomColor from "./generate-color";

export const generateBoard = (size: number) => {
  const numTiles = size * size;
  const baseColor = generateRandomColor()
  const diffColor = generateRandomColor()
  
  const board = Array(numTiles - 1).fill(baseColor);
  board.push(diffColor);
  
  for (let i = board.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [board[i], board[j]] = [board[j], board[i]];
  }
  
  return { board, diffColor };
}