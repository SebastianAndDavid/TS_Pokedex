import { PokemonResponse } from "../interfaces";

export default function PokemonCard(props: { allPokemon: PokemonResponse }) {
  console.log("props.allPokemon", props.allPokemon);
  return (
    <>
      <div className="pokemon-list">
        <div>{props.allPokemon.id}</div>
        <div>{props.allPokemon.name}</div>
        <div>{props.allPokemon.type1}</div>
        <div>{props.allPokemon.type2}</div>
        <div>{props.allPokemon.hp}</div>
        <div>{props.allPokemon.attack}</div>
        <div>{props.allPokemon.defense}</div>
        <div>{props.allPokemon.speed}</div>
        <div>{props.allPokemon.special}</div>
        <div>{props.allPokemon.gif}</div>
        <div>{props.allPokemon.png}</div>
        <div>{props.allPokemon.description}</div>
      </div>
    </>
  );
}
