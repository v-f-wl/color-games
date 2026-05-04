import { Link } from "@tanstack/react-router";
import GameNotFound from "../../components/errors/GameNotFound";
import { GAME_MODES_CONFIG } from "../../shared/constants/gameModes.config";
import { Route } from "./$gameId.route";
import { useState } from "react";
import type { DifficultyLevel } from "../../types";

const DescriptionPage = () => {
  const { gameId } = Route.useParams()
  const game = GAME_MODES_CONFIG[gameId]
  const hasModes = !!game.hasModes?.length

  const [difficultValue, setDifficultValue] = useState<DifficultyLevel>('easy')
  const [modeValue, setModeValue] = useState<string | null>(
    hasModes ? game.hasModes![0].id : null
  )

  const handleChangeDifficult = (value: DifficultyLevel) => {
    if (value === difficultValue) return
    setDifficultValue(() => value)
  }
  const handleChangeMode = (value: string) => {
    if (value === modeValue) return
    setModeValue(() => value)
  }

  if (!game) {
    return <GameNotFound />
  }

  return (
    <div className="wrapper max-w-5xl pt-6">
      <h1 className="font-semibold text-4xl ">{game.title}</h1>
      <p className="mt-8 text-neutral-600">{game.description}</p>

      <h2 className="mt-6 font-semibold text-2xl">Уровни сложности:</h2>
      <div className="flex mt-4">
        {game.difficulties.map((d) => (
          <div
            key={d.id}
            className={`${difficultValue === d.id && 'border-red-300 border'}`}
            onClick={() => handleChangeDifficult(d.id)}
          >
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
              <div
                key={mode.id}
                className={`${modeValue === mode.id && 'border-red-300 border'}`}
                onClick={() => handleChangeMode(mode.id)}
              >
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="mt-12 flex justify-center gap-4">
        <Link to="/">Назад</Link>
        <Link 
          to={'/'+`${gameId}`}
          state={{
            modeValue ,
            difficultValue,
          }}
        >
          Начать игру</Link>
      </div>
    </div>
  );
}

export default DescriptionPage;