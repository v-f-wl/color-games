import { useEffect, useState } from "react";
import generateRandomColor from "../../shared/utils/generate-color";
import { HexColorPicker } from "react-colorful";

interface PickColorInterface{
  submitColor: (selectedColor: string) => void,
  duration: number
}
const PickColor = ({submitColor, duration} : PickColorInterface) => {
  const [selectedColor, setSelectedColor] = useState(() => generateRandomColor())
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    if(duration === -1) return
    if (timeLeft <= 0) {
      handleSubmitColor()
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1000)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, duration])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleSubmitColor()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedColor])
  function handleSubmitColor(){
    submitColor(selectedColor)
  }

  const seconds = Math.floor((timeLeft % 60000) / 1000)

  return ( 
    <div 
      className=" 
        w-full h-screen relative
        flex items-center justify-center
      "
      style={{background: selectedColor}}
    >
      <div className="">
        <HexColorPicker color={selectedColor} onChange={setSelectedColor}/>
        <button 
          className="py-2 px-4 mt-4 w-full rounded-md bg-gray-900 text-white cursor-pointer" 
          onClick={handleSubmitColor}
        >
          Выбрать
        </button>
      </div>
      {duration !== -1 && (
        <div
          className="
            absolute lg:bottom-10 lg:right-10
            p-4 w-28 h-28 flex items-center justify-center rounded-full
            lg:text-8xl text-gray-100 bg-neutral-700
          "
        >
          {String(seconds).padStart(2,)}
        </div>
      )}
    </div>
   );
}
 
export default PickColor;