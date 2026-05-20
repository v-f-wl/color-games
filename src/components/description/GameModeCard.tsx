import ISelected from "../icons/ISelected"

interface GameModeCardProps {
  title: string
  description: string
  isActive: boolean
  handleChangeDifficult: () => void
}
const GameModeCard = ({
  title,
  description,
  isActive,
  handleChangeDifficult
}: GameModeCardProps) => {
  return (
    <div
      onClick={handleChangeDifficult}
      className={`
        ${isActive && 'border-animation'} relative
        p-4 cursor-pointer rounded-lg transition-all bg-white dark:bg-neutral-700 shadow-lg
      `}
    >
      <h3 className="text-xl text-neutral-800 dark:text-neutral-50">{title}</h3>
      <p className="mt-2 text-neutral-700 dark:text-neutral-200">{description}</p>
      {isActive && (
        <div className="absolute top-4 right-4 p-2 w-8 h-8 bg-green-500 rounded-full text-white flex items-center justify-center">
          <ISelected/>
        </div>
      )}
    </div>
  );
}

export default GameModeCard;