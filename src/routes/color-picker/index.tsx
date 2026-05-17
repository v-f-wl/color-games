import { useLocation } from "@tanstack/react-router";
import { useState } from "react";

import type { HistoryListType } from "../../types";
import generateRandomColor from "../../shared/utils/generate-color";

import Preparing from "../../components/color-picker/Preparing";
import ShowColor from "../../components/color-picker/ShowColor";
import PickColor from "../../components/color-picker/PickColor";
import RoundResult from "../../components/color-picker/RoundResult";
import FinalResult from "../../components/color-picker/FinalResult";

type GameStep = 'START' | 'PREPARING' | 'SHOW_COLOR' | 'PICK_COLOR' | 'ROUND_RESULT' | 'FINAL_RESULTS';


const ColorPicker = () => {
  const location = useLocation()
  const difficultValue = location.state.difficultValue

  const [step, setStep] = useState<GameStep>('PREPARING')
  const [round, setRound] = useState(1)
  const [targetColor, setTargetColor] = useState(() => generateRandomColor())
  const [selectedColor, setSelectedColor] = useState('')
  const [historyList, setHistoryList] = useState<HistoryListType[]>([])

  const handleSubmitColor = (selectedColor: string) => {
    setSelectedColor(() => selectedColor)
    const roundResult = {
      targetColor,
      selectedColor
    }

    setHistoryList(prev => [...prev, roundResult])

    setStep(() => 'ROUND_RESULT')
  }

  const handleStartAgain = () => {
    if (round == 5) {
      setStep(() => 'FINAL_RESULTS')
    } else {
      setRound(prev => prev + 1)
      setTargetColor(() => generateRandomColor())
      setStep(() => 'SHOW_COLOR')
    }

  }

  const resetGame = () => {
    setHistoryList(() => [])
    setTargetColor(() => generateRandomColor())
    setRound(() => 1)
    setStep(() => 'PREPARING')
  }

  return (
    <div className="relative">
      {step !== 'FINAL_RESULTS' && (
        <div className="button absolute bottom-4 left-1/2 -translate-x-1/2 z-40 cursor-pointer">
          Выйти на главное меню
        </div>
      )}
      {step === 'PREPARING' && <Preparing duration={3000} onComplete={() => setStep('SHOW_COLOR')} />}

      {step === 'SHOW_COLOR' && <ShowColor currentColor={targetColor} duration={difficultValue === 'easy' ? 5000 : 3000} onComplete={() => setStep('PICK_COLOR')} />}

      {step === 'PICK_COLOR' && <PickColor duration={difficultValue == 'hard' ? 4000 : -1} submitColor={handleSubmitColor} />}

      {step === 'ROUND_RESULT' &&
        <RoundResult
          targetColor={targetColor}
          selectedColor={selectedColor}
          nextStep={handleStartAgain}
          round={round}
        />
      }
      {step === 'FINAL_RESULTS' && 
        <FinalResult 
          historyList={historyList}
          resetGame={resetGame}

        />
      }
    </div>
  );
}

export default ColorPicker;