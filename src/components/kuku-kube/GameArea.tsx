import { useState } from "react"
import { generateBoard } from "../../shared/utils/generate-board"
import type { DifficultyLevel } from "../../types"


interface GameAreaProps{
  difficultValue: DifficultyLevel
}
const GameArea = ({difficultValue}: GameAreaProps) => {
  const [levelData, setLevelData] = useState(() => generateBoard(6, difficultValue))
  const [score, setScore] = useState(0)
  const submitAnswer = (color: string) => {
    if (color === levelData.diffColor) {
      setScore(prev => prev + 1)
      setLevelData(generateBoard(6, difficultValue))
    }else{
    setScore(() => 0)
    }

  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-3xl font-medium">
        <span>Счет:</span> <span>{score}</span>
      </div>
      <div className="grid grid-cols-6 gap-1">
        {levelData.board.map((item, index) => (
          <div
            key={index}
            onClick={() => submitAnswer(item)}
            className="w-8 h-8"
            style={{ background: item }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default GameArea;