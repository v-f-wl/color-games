export type DifficultyLevel  = 'easy' | 'medium' | 'hard'
export type GameMode = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type Difficulty = {
  id: DifficultyLevel;
  title: string;
  description: string;
};

export type GameModeDetails = {
  id: string;
  title: string;
  description: string;
  difficulties: Difficulty[];
  hasModes?: {
    id: string;
    title: string;
    description: string;
  }[];
};

export interface HistoryListType {
  targetColor: string
  selectedColor: string
}

export interface IconProps{
  size: number
}