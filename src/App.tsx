import "./components/pokemon.css";
import "./App.css";
import { getAllPokemon, getPokemonById } from "../supabase-utils";
import { useState, useEffect } from "react";
import { PokemonResponse, PracticeType } from "./interfaces";
import PokemonCard from "./components/PokemonCard";
import ClickedCard from "./components/ClickedCard";

function App() {
  const [allPokemon, setAllPokemon] = useState<PokemonResponse[] | null>([]);
  const [clickedPokemon, setClickedPokemon] = useState<
    PokemonResponse[] | null
  >(null);

  async function handleGetAllPokemon() {
    const res = await getAllPokemon();
    setAllPokemon(res);
  }

  async function handlePokemonClick(id: number) {
    const res: PokemonResponse[] | null = await getPokemonById(id);
    if (res !== null && res.length > 0) {
      const clickedObject = res[0];
      setClickedPokemon([clickedObject, ...(clickedPokemon || [])]);
    }
  }

  function practiceFunc(name: string, obj: PracticeType) {
    const greet = `hello ${name}. you are from ${obj.city} in the state of ${obj.state} and your zip is ${obj.zip}`;
    return greet;
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
              practiceFunc={practiceFunc}
            />
          );
        })}
      </div>
      <div className="clicked-list-container">
        {clickedPokemon?.map((poke, i) => {
          return <ClickedCard key={poke.name + i} poke={poke} />;
        })}
      </div>
    </>
  );
}

export default App;
