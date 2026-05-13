import { useLocation } from "@tanstack/react-router";
import Header from "../../components/header/Header";
import GameArea from "../../components/kuku-kube/GameArea";
import GameNotFound from "../../components/errors/GameNotFound";

export function KukuKube() {
  const location = useLocation()
  const difficultValue = location.state.difficultValue
  const modeValue = location.state.modeValue

  if(!difficultValue){
    return <GameNotFound/>
  }
    
  return (
    <>
      <Header/>
      <section className="w-full h-screen flex items-center justify-center">
        <GameArea
          // difficultValue={difficultValue}
          difficultValue={difficultValue}
        />
      </section>
    </>
  )
}
