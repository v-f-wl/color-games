import type { DifficultyLevel } from "../../types";
import generateRandomColor from "./generate-color";
import generateSimilarColor from "./generate-similar-color";

const COMPLEXITY_CONFIG  = {
  easy: 40,
  medium: 20,
  hard: 10
}
export const generateBoard = (size: number, difficultValue: DifficultyLevel) => {
  const numTiles = size * size;
  const baseColor = generateRandomColor()
  const diffColor = generateSimilarColor(baseColor, COMPLEXITY_CONFIG[difficultValue])
  
  const board = Array(numTiles - 1).fill(baseColor);
  board.push(diffColor);
  
  for (let i = board.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [board[i], board[j]] = [board[j], board[i]];
  }
  
  return { board, diffColor };
}