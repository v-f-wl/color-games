import type { GameMode } from "../../types";

export const GAME_MODES: GameMode[] = [
  {
    id: "color-picker",
    title: "Подбери цвет",
    description:
      "Попробуй воссоздать заданный цвет, используя ползунки. Проверь, насколько точно ты чувствуешь оттенки.",
    image: "teewee.svg",
  },
  {
    id: "color-choice",
    title: "Выбери цвет",
    description:
      "Найди правильный цвет среди предложенных вариантов. Чем выше сложность — тем меньше разница.",
    image: "arc.svg",
  },
  {
    id: "odd-color",
    title: "Лишний цвет",
    description:
      "В сетке цветов найди один, который отличается от остальных. Отличия могут быть почти незаметными.",
    image: "sadness.svg",
  },
];