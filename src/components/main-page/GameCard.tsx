import { Link } from "@tanstack/react-router";

interface GameCardProps{
  title: string,
  description: string,
  gameId: string,
}

const GameCard = ({
  title,
  description,
  gameId,
}: GameCardProps) => {
  return (  
    <div className="p-4 bg-white dark:bg-neutral-700 shadow-lg rounded-lg max-w-xs">
      <div className="w-full h-12 flex text-inherit">
        {/* {GAME_ICON[gameId]} */}
      </div>
      <h3 className="mt-8 font-medium text-xl">{title}</h3>
      <p className="mt-2 text-sm font-light">{description}</p>
      <Link 
        to="/description/$gameId" 
        className="button mt-4 "
        params={{gameId: gameId}}
      >
        Играть
      </Link>
    </div>
  );
}
 
export default GameCard;