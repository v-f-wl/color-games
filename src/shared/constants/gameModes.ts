import type { GameMode } from "../../types";

export const GAME_MODES: GameMode[] = [
  {
    id: "color-picker",
    title: "Подбери цвет",
    description:
      "Попробуй воссоздать заданный цвет, используя ползунки. Проверь, насколько точно ты чувствуешь оттенки.",
  },
  {
    id: "kuku-kube",
    title: "Лишний цвет",
    description:
      "В сетке цветов найди один, который отличается от остальных. Отличия могут быть почти незаметными.",
  },
];