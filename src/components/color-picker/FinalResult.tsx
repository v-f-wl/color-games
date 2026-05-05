import { Link } from "@tanstack/react-router";
import type { HistoryListType } from "../../types";

import Header from '../header/Header'
import { calculateAverageColorDifference } from "../../shared/utils/get-match-percentage";

interface FinalResultProps {
  historyList: HistoryListType[]
  resetGame: () => void
}
const FinalResult = ({ historyList, resetGame }: FinalResultProps) => {
  const average = calculateAverageColorDifference(historyList)
  const formatted = average.toFixed(2)
  
  return (
    <>
      <Header />
      <section>
        <div className="w-full h-screen flex items-center justify-center flex-col gap-12">
          <div className="flex gap-4 relative">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2">Оригинал</div>
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">Ваш цвет</div>
            {historyList.map(item => (
              <div 
                className="w-20 h-20"
                style={{ background:  `linear-gradient(135deg, ${item.targetColor} 50%, ${item.selectedColor} 50%)` }}
              >
                
              </div>
            ))}

          </div>

          <div className="text-center">
            <h2 className="">Средний результат</h2>
            <span className="text-4xl font-bold">{formatted}</span>
          </div>
          
          <div className="flex gap-8 items-center">
            <Link to="/">Главное меню</Link>
            <button onClick={resetGame}>Играть снова</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default FinalResult;