import { Link } from "@tanstack/react-router";
import GameNotFound from "../../components/errors/GameNotFound";
import { GAME_MODES_CONFIG } from "../../shared/constants/gameModes.config";
import { Route } from "./$gameId.route";

const DescriptionPage = () => {
  const { gameId } = Route.useParams()
  const game = GAME_MODES_CONFIG[gameId]

  if (!game) {
    return <GameNotFound/>
  }

  return (  
    <div className="wrapper max-w-5xl pt-6">
      <h1 className="font-semibold text-4xl ">{game.title}</h1>
      <p className="mt-8 text-neutral-600">{game.description}</p>

      <h2 className="mt-6 font-semibold text-2xl">Уровни сложности:</h2>
      <div className="flex mt-4">
        {game.difficulties.map((d) => (
          <div key={d.id}>
            <h3>{d.title}</h3>
            <p>{d.description}</p>
          </div>
        ))}

      </div>

      {game.hasModes && (
        <>
          <h2 className="mt-6 font-semibold text-2xl">Режимы игры</h2>
          <div className="flex mt-4">
            {game.hasModes.map((mode) => (
              <div key={mode.id}>
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="mt-12 flex justify-center gap-4">
        <Link to="/">Назад</Link>
        <button>Начать игру</button>
      </div>
    </div>
  );
}
 
export default DescriptionPage;