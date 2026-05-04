import { useState } from "react";

import { colord } from "../../shared/lib/colord";
import { getMatchPercentage } from "../../shared/utils/get-match-percentage";

import Header from '../header/Header'
import IArrow from "../icons/IArrow";

interface RoundResultProps {
  targetColor: string
  selectedColor: string
  nextStep: () => void
  round: number
}
const RoundResult = ({ targetColor, selectedColor, nextStep, round }: RoundResultProps) => {
  const [coefficient, setCoefficient] = useState(() => getMatchPercentage(colord(targetColor).delta(selectedColor)))

  return (
    <section>
      <Header />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-96 h-72 rounded-2xl shadow-xl flex flex-col overflow-hidden">

          <div
            className="flex-1 relative"
            style={{ background: selectedColor }}
          >
            <div className="absolute top-4 left-4 rounded-lg text-black">
              <span className="text-sm">{round} / 5</span>
            </div>

            <div className="absolute top-4 right-4">
              <span className="text-4xl font-semibold">{coefficient}</span>
              <span className="text-xl"> / 100</span>
            </div>

            <div className="absolute bottom-4 left-4">
              <div className="">Твой цвет</div>
              <div className="">{selectedColor}</div>
            </div>
          </div>
          <div
            className="flex-1 relative"
            style={{ background: targetColor }}
          >
            <div className="absolute bottom-4 left-4">
              <div className="">Оригинал</div>
              <div className="">{targetColor}</div>
            </div>

            <div className="absolute bottom-4 right-4">
              <button 
                className="
                  w-14 h-14 
                  flex items-center justify-center
                  rounded-full bg-white text-black cursor-pointer
                "
                onClick={nextStep}
              >
                <IArrow size={44}/>
              </button> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoundResult;
