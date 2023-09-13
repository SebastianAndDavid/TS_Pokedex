import { PokemonResponse } from "../interfaces";

interface PokemonCardProps {
  poke: PokemonResponse;
  handlePokemonClick: (id: number) => void;
}

export default function PokemonCard({
  poke,
  handlePokemonClick,
}: PokemonCardProps) {
  return (
    <>
      <div className="pokemon-card" onClick={() => handlePokemonClick(poke.id)}>
        <div>{poke.id}</div>
        <div>{poke.name}</div>
        <div>{poke.type1}</div>
        <div>{poke.type2}</div>
        <img src={poke.png} />
        <div>{poke.description}</div>
      </div>
    </>
  );
}
