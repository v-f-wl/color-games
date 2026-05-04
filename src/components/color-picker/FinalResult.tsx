import { Link } from "@tanstack/react-router";
import type { HistoryListType } from "../../types";

interface FinalResultProps{
  historyList: HistoryListType[]
  resetGame: () => void
}
const FinalResult = ({historyList, resetGame}: FinalResultProps) => {

  return ( 
    <div className="wrapper max-w-6xl">
      {historyList.map(item => (
        <div className="flex gap-3">
          <div className="w-20 h-20" style={{background: item.targetColor}}>
            Цвет
          </div>
          <div className="w-20 h-20" style={{background: item.selectedColor}}>
            Ответ
          </div>
        </div>
      ))}
      <div className="">
        <Link to="/">Главное меню</Link>
        <button onClick={resetGame}>Перезагрузить</button>
      </div>
    </div>
   );
}
 
export default FinalResult;