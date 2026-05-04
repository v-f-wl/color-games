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
    <div 
      className=" 
        w-full h-screen 
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
    </div>
   );
}
 
export default PickColor;