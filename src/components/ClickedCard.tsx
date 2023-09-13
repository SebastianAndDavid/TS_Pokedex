import { ClickedPokemonResponse } from "../interfaces";

interface ClickedProps {
  poke: ClickedPokemonResponse;
  clickedPokemon: ClickedPokemonResponse[];
  setClickedPokemon: React.Dispatch<
    React.SetStateAction<ClickedPokemonResponse[] | null>
  >;
}

export default function ClickedCard({
  poke,
  setClickedPokemon,
  clickedPokemon,
}: ClickedProps) {
  function handleDelete(uniqId: number, array: ClickedPokemonResponse[]) {
    const updatedArray = array.filter(
      (item: ClickedPokemonResponse) => item.uniqId !== uniqId
    );
    setClickedPokemon(updatedArray);
  }

  return (
    <div
      className="clicked-card"
      onClick={() => handleDelete(poke.uniqId, clickedPokemon)}
    >
      {poke.id} {poke.name} <img src={poke.gif} />
    </div>
  );
}
