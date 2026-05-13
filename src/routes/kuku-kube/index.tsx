import { useLocation } from "@tanstack/react-router";
import Header from "../../components/header/Header";
import GameArea from "../../components/kuku-kube/GameArea";
import GameNotFound from "../../components/errors/GameNotFound";
import ResultArea from "../../components/kuku-kube/ResultArea";
import { useState } from "react";

type KUKUKUBE_STEPS = 'game' | 'result'

export function KukuKube() {
  const [score, setScore] = useState(0)
  const [step, setStep] = useState<KUKUKUBE_STEPS>('game')
  const location = useLocation()
  const difficultValue = location.state.difficultValue
  const modeValue = location.state.modeValue

  if (!difficultValue || !modeValue) {
    return <GameNotFound />
  }

  const handleStartGameAgain = () => {
    setScore(() => 0)
    setStep('game')
  }

  return (
    <>
      <Header />
      <section className="w-full h-screen flex items-center justify-center">
        {step === 'game' &&
          <GameArea
            difficultValue={difficultValue}
            onScoreIncrease={() => setScore(prev => prev + 1)}
            handleFinishGame={() => setStep(() => 'result')}
            score={score}

          />
        }
        {step == 'result' &&
          <ResultArea
            score={score}
            difficult={difficultValue}
            mode={modeValue}
            onStartAgain={handleStartGameAgain}
          />
        }
      </section>
    </>
  )
}
