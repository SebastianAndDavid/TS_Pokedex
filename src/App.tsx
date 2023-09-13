import "./components/pokemon.css";
import "./App.css";
import { getAllPokemon, getPokemonById } from "../supabase-utils";
import { useState, useEffect } from "react";
import { ClickedPokemonResponse, PokemonResponse } from "./interfaces";
import PokemonCard from "./components/PokemonCard";
import ClickedCard from "./components/ClickedCard";

function App() {
  const [allPokemon, setAllPokemon] = useState<PokemonResponse[] | null>([]);
  const [clickedPokemon, setClickedPokemon] = useState<
    ClickedPokemonResponse[] | null
  >(null);

  async function handleGetAllPokemon() {
    const res = await getAllPokemon();
    setAllPokemon(res);
  }

  async function handlePokemonClick(id: number) {
    const res: PokemonResponse[] | null = await getPokemonById(id);
    if (res !== null && res.length > 0) {
      const clickedObject = res[0];
      const newClickedObject = {
        uniqId: Math.random() * 1000,
        ...clickedObject,
      };
      setClickedPokemon([newClickedObject, ...(clickedPokemon || [])]);
    }
  }

  useEffect(() => {
    handleGetAllPokemon();
  }, []);

  return (
    <>
      <div className="pokemon-list-container">
        {allPokemon?.map((poke, i) => {
          return (
            <PokemonCard
              key={poke.id + i}
              allPokemon={poke}
              handlePokemonClick={handlePokemonClick}
            />
          );
        })}
      </div>
      <div className="clicked-list-container">
        {clickedPokemon?.map((poke, i) => {
          return (
            <ClickedCard
              key={poke.uniqId + i}
              poke={poke}
              clickedPokemon={clickedPokemon}
              setClickedPokemon={setClickedPokemon}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
