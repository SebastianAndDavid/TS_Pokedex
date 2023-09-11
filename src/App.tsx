import "./App.css";
import { getAllPokemon } from "../supabase-utils";
import { useState, useEffect } from "react";
import { PokemonResponse } from "./interfaces";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [allPokemon, setAllPokemon] = useState<PokemonResponse[] | null>([]);

  async function handleGetAllPokemon() {
    const res = await getAllPokemon();
    setAllPokemon(res);
  }

  useEffect(() => {
    handleGetAllPokemon();
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
