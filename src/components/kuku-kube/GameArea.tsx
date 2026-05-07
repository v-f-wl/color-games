import { useState } from "react"
import { generateBoard } from "../../shared/utils/generate-board"

const GameArea = () => {
  const [levelData, setLevelData] = useState(() => generateBoard(6))
    const submitAnswer = (color: string) => {
      if(color === levelData.diffColor){
        setLevelData(generateBoard(6))
      }
      return
    }

  return (
    <div className="grid grid-cols-6 gap-4">
      {levelData.board.map((item, index) => (
        <div
          key={index}
          onClick={() => submitAnswer(item)}
          className="w-8 h-8"
          style={{ background: item }}
        ></div>
      ))}
    </div>
  );
}

export default GameArea;