// import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Preparing from "../../components/color-picker/Preparing";
import ShowColor from "../../components/color-picker/ShowColor";
import PickColor from "../../components/color-picker/PickColor";
import generateRandomColor from "../../shared/utils/generate-color";
import RoundResult from "../../components/color-picker/RoundResult";

type GameStep = 'START' | 'PREPARING' | 'SHOW_COLOR' | 'PICK_COLOR' | 'ROUND_RESULT' | 'FINAL_RESULTS';

const ColorPicker = () => {
  // const location = useLocation()
  // const difficultValue = location.state.difficultValue

  const [step, setStep] = useState<GameStep>('PREPARING')
  // const [round, setRound] = useState(1)
  const [targetColor, setTargetColor] = useState(() => generateRandomColor())
  const [selectedColor, setSelectedColor] = useState('')


  useEffect(() => {
    if (step === 'SHOW_COLOR') {
      const timer = setTimeout(() => setStep('PICK_COLOR'), 4000);
      return () => clearTimeout(timer);
    }
  }, [step])

  const handleSubmitColor = (selectedColor: string) => {
    setSelectedColor(() => selectedColor)
    setStep(() => 'ROUND_RESULT' )
  } 

  const handleStartAgain = () => {
    setTargetColor(() => generateRandomColor())
    setStep(() => 'SHOW_COLOR')
  }

  return ( 
    <div className="">  
      {step === 'PREPARING' && <Preparing duration={3000} onComplete={() => setStep('SHOW_COLOR')}/>}
      
      {step === 'SHOW_COLOR' && <ShowColor currentColor={targetColor}/>}

      {step === 'PICK_COLOR' && <PickColor submitColor={handleSubmitColor} />}

      {step === 'ROUND_RESULT' && <RoundResult targetColor={targetColor} selectedColor={selectedColor} nextStap={handleStartAgain}/>}
    </div>
  );
}
 
export default ColorPicker;