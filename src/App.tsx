import "./App.css";
import { getAllPokemon, getPokemonById } from "../supabase-utils";
import { useState, useEffect } from "react";
import { PokemonResponse, PokemonResponseById } from "./interfaces";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [allPokemon, setAllPokemon] = useState<PokemonResponse[] | null>([]);
  const [clickedPokemon, setClickedPokemon] = useState<
    PokemonResponseById[] | null
  >(null);
  // const [clickedPokemonArray, setClickedPokemonArray] = useState<
  //   PokemonResponse[]
  // >([]);

  async function handleGetAllPokemon() {
    const res = await getAllPokemon();
    setAllPokemon(res);
  }

  async function handlePokemonClick(id: number) {
    const res: PokemonResponseById[] | null = await getPokemonById(id);
    console.log("res", res);
    if (res !== null && res.length > 0) {
      const clickedObject = res[0];
      setClickedPokemon([clickedObject, ...(clickedPokemon || [])]);
    }
    return "hi";
  }

  console.log("clickedPokemon", clickedPokemon);

  useEffect(() => {
    handleGetAllPokemon();
    handlePokemonClick(1);
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
