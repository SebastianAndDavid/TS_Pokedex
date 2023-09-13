import { PokemonResponse } from "../interfaces";

export default function PokemonCard(props: {
  allPokemon: PokemonResponse;
  handlePokemonClick(id: number): Promise<void>;
}) {
  return (
    <>
      <div
        className="pokemon-card"
        onClick={() => props.handlePokemonClick(props.allPokemon.id)}
      >
        <div>{props.allPokemon.id}</div>
        <div>{props.allPokemon.name}</div>
        <div>{props.allPokemon.type1}</div>
        <div>{props.allPokemon.type2}</div>
        <img src={props.allPokemon.png} />
        <div>{props.allPokemon.description}</div>
      </div>
    </>
  );
}
