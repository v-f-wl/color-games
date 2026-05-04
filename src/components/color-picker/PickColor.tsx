import { useState } from "react";
import generateRandomColor from "../../shared/utils/generate-color";
import { HexColorPicker } from "react-colorful";

interface PickColorInterface{
  submitColor: (selectedColor: string) => void,
}
const PickColor = ({submitColor} : PickColorInterface) => {
  const [selectedColor, setSelectedColor] = useState(() => generateRandomColor())

  function handleSubmitColor(){
    submitColor(selectedColor)
  }
  return ( 
    <div className="wrapper pick-color max-w-6xl pt-9 flex flex-col gap-4">
      <div className="w-full h-80" style={{background: selectedColor}}></div>
      <HexColorPicker color={selectedColor} onChange={setSelectedColor}/>
      <button 
        className="border p-4" 
        onClick={handleSubmitColor}
      >
        Выбрать
      </button>
    </div>
   );
}
 
export default PickColor;