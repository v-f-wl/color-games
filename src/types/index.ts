export type GameMode = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type Difficulty = {
  id: string;
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
