import { useLocation } from "@tanstack/react-router";
import Header from "../../components/header/Header";
import GameArea from "../../components/kuku-kube/GameArea";
import GameNotFound from "../../components/errors/GameNotFound";
import ResultArea from "../../components/kuku-kube/ResultArea";
import { useEffect, useState } from "react";

type KUKUKUBE_STEPS = 'game' | 'result'

export function KukuKube() {
  const [score, setScore] = useState(0)
  const [step, setStep] = useState<KUKUKUBE_STEPS>('game')
  const [timeLeft, setTimeLeft] = useState(5)

  const location = useLocation()
  const difficultValue = location.state.difficultValue
  const modeValue = location.state.modeValue

  if (!difficultValue || !modeValue) {
    return <GameNotFound />
  }

  useEffect(() => {
    if (step !== 'game') return
    if (modeValue !== 'time') return

    if (timeLeft <= 0) {
      finishGame()
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft, modeValue, step])

  const handleStartGameAgain = () => {
    setScore(() => 0)
    setTimeLeft(() => 5)
    setStep('game')
  }

  const finishGame = () => {
    setStep('result')
  }

  return (
    <>
      <Header />
      <section className="w-full h-screen flex items-center justify-center">
        {step === 'game' &&
          <GameArea
            difficultValue={difficultValue}
            onScoreIncrease={() => setScore(prev => prev + 1)}
            handleFinishGame={finishGame}
            score={score}
            timeLeft={timeLeft}
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
