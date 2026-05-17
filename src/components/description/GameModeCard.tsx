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
        ${isActive ? 'border-neutral-300 opacity-100' : 'border-transparent'}
        border p-4 cursor-pointer rounded-lg opacity-80
        hover:opacity-100 transition-all
      `}
    >
      <h3 className="text-xl text-neutral-800 dark:text-neutral-50">{title}</h3>
      <p className="mt-2 text-neutral-700 dark:text-neutral-200">{description}</p>
    </div>
  );
}

export default GameModeCard;