import "./App.css";
import { getAllPokemon } from "../supabase-utils";
import { useState } from "react";
import { pokemonResponse } from "./interfaces";

function App() {
  const [allPokemon, setAllPokemon] = useState<pokemonResponse[] | null>([]);

  async function handleGetAllPokemon() {
    const res = await getAllPokemon();
    setAllPokemon(res);
  }

  return <div></div>;
}

export default App;
