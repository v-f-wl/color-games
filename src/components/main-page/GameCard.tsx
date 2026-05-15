import { Link } from "@tanstack/react-router";
import IColorPicker from "../icons/IColorPicker";
import IKukukube from "../icons/IKukukube";

interface GameCardProps{
  title: string,
  description: string,
  gameId: string,
}

// const GAME_ICON = {
//   'color-picker': <IColorPicker size={36}/>,
//   'kuku-kube': <IKukukube size={36}/>
// }
const GameCard = ({
  title,
  description,
  gameId,
}: GameCardProps) => {
  return (  
    <div className="p-4 border border-gray-300 rounded-lg text-neutral-700 max-w-xs">
      <div className="w-full h-12 flex ">
        {/* {GAME_ICON[gameId]} */}
      </div>
      <h3 className="mt-8 font-medium text-xl">{title}</h3>
      <p className="mt-2 text-sm font-light">{description}</p>
      <Link 
        to="/description/$gameId" 
        className="button mt-4 "
        params={{gameId: gameId}}
        // className="mt-4 py-1 px-4 rounded-full text-white inline-block hover:opacity-50 transition-opacity bg-neutral-900"
      >
        Играть
      </Link>
    </div>
  );
}
 
export default GameCard;