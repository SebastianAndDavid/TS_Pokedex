export interface PokemonResponse {
  id: number;
  name: string;
  type1: string;
  type2: string;
  gif: string;
  png: string;
  description: string;
}

export interface ClickedPokemonResponse extends PokemonResponse {
  uniqId: number;
}
