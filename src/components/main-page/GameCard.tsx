import { Link } from "@tanstack/react-router";

interface GameCardProps{
  title: string,
  description: string,
  gameId: string,
  imgUrl: string
}
const GameCard = ({
  title,
  description,
  gameId,
  imgUrl
}: GameCardProps) => {
  return (  
    <div className="p-4 border border-gray-300 rounded-lg text-neutral-700 max-w-xs">
      <div className="w-full h-12 flex ">
        <img src={`/game-modes/${imgUrl}`} alt="game image" className="h-full"/>
      </div>
      <h3 className="mt-8 font-medium text-xl">{title}</h3>
      <p className="mt-2 text-sm font-light">{description}</p>
      <Link 
        to="/description/$gameId" 
        params={{gameId: gameId}}
        className="mt-4 py-1 px-4 rounded-full text-white inline-block hover:opacity-50 transition-opacity bg-neutral-900"
      >
        Играть
      </Link>
    </div>
  );
}
 
export default GameCard;