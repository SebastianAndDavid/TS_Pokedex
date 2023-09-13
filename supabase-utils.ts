import { createClient } from "@supabase/supabase-js";
import { PokemonResponseById } from "./src/interfaces";
const url = "https://aqordevvnruktzytnrtm.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxb3JkZXZ2bnJ1a3R6eXRucnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTc4ODUsImV4cCI6MTk2Nzg3Mzg4NX0.paVZTcltRhN61IqrwWNRAkNdX3pf7FOsHUYHh2DnJ_8";

const supabase = createClient(url, key);

async function getAllPokemon() {
  const { data } = await supabase.from("pokemon").select("*");
  return data;
}

async function getPokemonById(
  id: number
): Promise<PokemonResponseById[] | null> {
  const { data, error } = await supabase
    .from("pokemon")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }
  return data as PokemonResponseById[];
}

export { getAllPokemon, getPokemonById };
