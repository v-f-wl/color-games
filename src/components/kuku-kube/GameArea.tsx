import { useState } from "react"
import { generateBoard } from "../../shared/utils/generate-board"
import type { DifficultyLevel } from "../../types"


interface GameAreaProps{
  difficultValue: DifficultyLevel
  onScoreIncrease: () => void
  handleFinishGame: () => void
  score: number
  timeLeft: number
}
const GameArea = ({
    difficultValue, 
    score, 
    timeLeft,
    onScoreIncrease, 
    handleFinishGame, 
  }: GameAreaProps) => {
  const [levelData, setLevelData] = useState(() => generateBoard(6, difficultValue))

  const submitAnswer = (color: string) => {
    if (color === levelData.diffColor) {
      onScoreIncrease()
      setLevelData(() => generateBoard(6, difficultValue))
    }else{
      handleFinishGame()
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
      {timeLeft !== -1 && (
        <div className="">{timeLeft}</div>
      )}
    </div>
  );
}

export default GameArea;