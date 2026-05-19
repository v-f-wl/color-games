import GameCard from "../components/main-page/GameCard";
import Header from '../components/header/Header'
import { GAME_MODES } from "../shared/constants/gameModes";

const IndexComponent = () => {
  return ( 
    <>
      <Header/>
      <section className="wrapper w-screen h-screen flex flex-col items-centerce justify-center gap-11  text-black dark:text-white">
          <h1 className="text-5xl text-center font-medium">Проверь своё чувство цвета</h1>
          <div className="my-8 flex justify-center gap-8">
            {GAME_MODES.map(mode => (
              <GameCard 
                key={mode.id} 
                title={mode.title} 
                description={mode.description} 
                gameId={mode.id}
              />
            ))}
        </div>
      </section>
    </>
   );
}
 
export default IndexComponent;