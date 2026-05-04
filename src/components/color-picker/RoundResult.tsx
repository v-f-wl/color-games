
import { useState } from "react";
import { colord } from "../../shared/lib/colord";
import { getMatchPercentage } from "../../shared/utils/get-match-percentage";

interface RoundResultProps{
  targetColor: string
  selectedColor: string
  nextStep: () => void
  round: number
}
const RoundResult = ({ targetColor, selectedColor, nextStep, round } : RoundResultProps) => {
  const [coefficient, setCoefficient] = useState(() => getMatchPercentage(colord(targetColor).delta(selectedColor)))

  return (  
    <div className="wrapper max-w-6xl">
      <div className="">{round} / 5</div>
      <div className="w-full h-10" style={{background: targetColor}}></div>
      <div className="w-full h-10" style={{background: selectedColor}}></div>
      <div className="my-7 font-7xl">
        {coefficient}
      </div>
      <button onClick={nextStep}>Дальше</button>
    </div>
  );
}
 
export default RoundResult;