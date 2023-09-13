import { PokemonResponse } from "../interfaces";

interface PokemonCardProps {
  allPokemon: PokemonResponse;
  handlePokemonClick: (id: number) => void;
}

export default function PokemonCard({
  allPokemon,
  handlePokemonClick,
}: PokemonCardProps) {
  return (
    <>
      <div
        className="pokemon-card"
        onClick={() => handlePokemonClick(allPokemon.id)}
      >
        <div>{allPokemon.id}</div>
        <div>{allPokemon.name}</div>
        <div>{allPokemon.type1}</div>
        <div>{allPokemon.type2}</div>
        <img src={allPokemon.png} />
        <div>{allPokemon.description}</div>
      </div>
    </>
  );
}
