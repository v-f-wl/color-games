import GameCard from "../components/main-page/GameCard";
import { GAME_MODES } from "../shared/constants/gameModes";

const IndexComponent = () => {
  return ( 
    <section className="wrapper max-w-6xl">
      <h1 className="lg:mt-24 text-5xl text-center font-medium">Проверь своё чувство цвета</h1>
      <p className="mx-auto font-light text-center mt-5 max-w-2/3">Это игра, в которой ты тренируешь восприятие оттенков и внимание к деталям. Подбирай цвета, находи отличия и проверяй, насколько точно ты видишь разницу. Выбирай режим, повышай сложность и улучшай свой результат с каждой попыткой.</p>

      <h2 className="mt-16 text-center">Выберете режим:</h2>
      <div className="my-8 flex justify-between gap-8">
        {GAME_MODES.map(mode => (
          <GameCard 
            key={mode.id} 
            title={mode.title} 
            description={mode.description} 
            gameId={mode.id}
            imgUrl={mode.image}
          />
        ))}
      </div>
    </section>
   );
}
 
export default IndexComponent;