import type { DifficultyLevel } from "../../types"

interface DescriptionRuleCardProps{
  id: DifficultyLevel
  title: string
  description: string
  isActive: boolean
  handleChangeDifficult: (id: DifficultyLevel) => void
}
const DescriptionRuleCard = ({
  id,
  title,
  description,
  isActive,
  handleChangeDifficult
}: DescriptionRuleCardProps) => {
  return (
    <div
      className={`
        ${isActive ? 'border-neutral-300 opacity-100' : 'border-transparent'}
        border p-4 cursor-pointer rounded-lg opacity-80
        hover:opacity-100 transition-all
      `}
      onClick={() => handleChangeDifficult(id)}
    >
      <h3 className="text-2xl font-medium text-neutral-800">{title}</h3>
      <p className="mt-4 text-neutral-700">{description}</p>
    </div>
  );
}

export default DescriptionRuleCard;