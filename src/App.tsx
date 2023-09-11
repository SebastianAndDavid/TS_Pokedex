import "./App.css";
import { getAllPokemon, getPokemonById } from "../supabase-utils";
import { useState, useEffect } from "react";
import { PokemonResponse, PokemonResponseById } from "./interfaces";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [allPokemon, setAllPokemon] = useState<PokemonResponse[] | null>([]);
  const [clickedPokemon, setClickedPokemon] = useState<
    PokemonResponse[] | null
  >([]);
  // const [clickedPokemonArray, setClickedPokemonArray] = useState<
  //   PokemonResponse[] | null
  // >([]);

  async function handleGetAllPokemon() {
    const res = await getAllPokemon();
    setAllPokemon(res);
  }

  async function handlePokemonClick(id: number) {
    // endpoint w/ id
    const res: PokemonResponseById = await getPokemonById(id);
    // set that res in state, ...spread
    // const newState: PokemonResponse[] | null = [...[clickedPokemon], res];
    if (clickedPokemon != null) {
      setClickedPokemon([res, ...clickedPokemon]);
    }

    // map over that state (clickedPokemon)
  }

  useEffect(() => {
    handleGetAllPokemon();
    // if (clickedPokemonArray != null && clickedPokemon != null) {
    //   setClickedPokemonArray([clickedPokemon, ...clickedPokemonArray]);
    // }
  }, []);

  return (
    <div className="pokemon-list-container">
      {allPokemon &&
        allPokemon.map((poke, i) => {
          return (
            <div>
              <PokemonCard key={poke.id + i} allPokemon={poke} />;
            </div>
          );
        })}
    </div>
  );
}

export default App;
