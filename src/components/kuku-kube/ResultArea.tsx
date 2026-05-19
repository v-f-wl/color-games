import { Link } from "@tanstack/react-router"

interface ResultAreaProps {
  score: number
  onStartAgain: () => void
}
const ResultArea = ({
  score, onStartAgain
}: ResultAreaProps) => {
  return (
    <section className="w-screen h-screen flex items-center justify-center text-black dark:text-white">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-4xl font-semibold">
          Ваш результат:
        </h2>
        <span className="text-3xl font-medium">{score}</span>

        <div className="mt-4 flex items-center gap-5">
          <Link
            to="/"
          >
            На главную
          </Link>
          <Link
            to="/description/$gameId"
            params={{ gameId: 'kuku-kube' }}
          >
            Сменить режим
          </Link>
          <div
            onClick={onStartAgain}
            className="cursor-pointer button"
          >
            Начать заново
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultArea;
