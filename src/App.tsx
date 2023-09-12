import "./App.css";
import { getAllPokemon, getPokemonById } from "../supabase-utils";
import { useState, useEffect } from "react";
import { PokemonResponse } from "./interfaces";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [allPokemon, setAllPokemon] = useState<PokemonResponse[] | null>([]);
  const [clickedPokemon, setClickedPokemon] = useState<
    PokemonResponse[] | null
  >([]);

  async function handleGetAllPokemon() {
    const res = await getAllPokemon();
    setAllPokemon(res);
  }

  async function handlePokemonClick(id: number) {
    const res: PokemonResponse[] | null = await getPokemonById(id);
    setClickedPokemon([res, ...clickedPokemon]);
  }
  console.log("clickedPokemon", clickedPokemon);

  useEffect(() => {
    handleGetAllPokemon();
  }, []);

  return (
    <>
      <div className="pokemon-list-container">
        {allPokemon?.map((poke, i) => {
          return (
            <div>
              <PokemonCard
                key={poke.id + i}
                allPokemon={poke}
                handlePokemonClick={handlePokemonClick}
              />
              ;
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
