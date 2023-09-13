import { PokemonResponse, PracticeType } from "../interfaces";

interface PokemonCardProps {
  allPokemon: PokemonResponse;
  handlePokemonClick: (id: number) => void;
  practiceFunc: (name: string, obj: PracticeType) => void;
}

export default function PokemonCard(props: PokemonCardProps) {
  props.practiceFunc("bob", { city: "Porltand", state: "Oregon", zip: 97232 });
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
