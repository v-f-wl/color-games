import Header from "../../components/header/Header";
import GameArea from "../../components/kuku-kube/GameArea";

export function KukuKube() {
  return (
    <>
      <Header/>
      <section className="w-full h-screen flex items-center justify-center">
        <GameArea/>
      </section>
    </>
  )
}
