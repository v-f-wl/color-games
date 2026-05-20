import { useState } from "react";
import { Link } from "@tanstack/react-router";

import type { DifficultyLevel } from "../../types";
import { GAME_MODES_CONFIG } from "../../shared/constants/gameModes.config";
import { Route } from "./$gameId.route";

import GameNotFound from "../../components/errors/GameNotFound";
import DifficultySelectorCard from "../../components/description/DifficultySelectorCard";
import Header from '../../components/header/Header'
import GameModeCard from "../../components/description/GameModeCard";

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
    <>
      <Header />
      <section className="wrapper max-w-5xl pt-32 text-black dark:text-white">
        <h1 className="font-semibold text-6xl text-center">{game.title}</h1>
        <p className="mt-8 mx-auto max-w-[80%] text-center text-neutral-600 dark:text-neutral-200">{game.description}</p>

        <h2 className="mt-14 font-semibold text-3xl">Уровнь сложности</h2>
        <div className="flex gap-4 mt-4">
          {game.difficulties.map((d) => (
            <DifficultySelectorCard
              key={d.id}
              id={d.id}
              title={d.title}
              description={d.description}
              isActive={difficultValue === d.id}
              handleChangeDifficult={handleChangeDifficult}
            />
          ))}
        </div>

        {game.hasModes && (
          <>
            <h2 className="mt-8 font-semibold text-3xl">Режимы игры</h2>
            <div className="flex gap-4 mt-4">
              {game.hasModes.map((mode) => (
                <GameModeCard
                  key={mode.id}
                  title={mode.title}
                  description={mode.description}
                  isActive={modeValue === mode.id}
                  handleChangeDifficult={() => handleChangeMode(mode.id)}
                />
              ))}
            </div>
          </>
        )}
        <div className="mt-12 flex justify-center items-center gap-8">
          <Link to="/">Назад</Link>
          <Link
            className="button"
            to={'/' + `${gameId}`}
            state={{
              modeValue,
              difficultValue,
            }}
          >
            Начать игру</Link>
        </div>
      </section>
    </>
  );
}

export default DescriptionPage;