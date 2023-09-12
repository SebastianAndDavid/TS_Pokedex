export interface PokemonResponse {
  id: number;
  name: string;
  type1: string;
  type2: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  special: number;
  gif: string;
  png: string;
  description: string;
}

export interface PokemonResponseById {
  pokemon: {
    id: number;
    name: string;
    type1: string;
    type2: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    special: number;
    gif: string;
    png: string;
    description: string;
  };
}
