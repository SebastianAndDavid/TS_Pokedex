import { ClickedPokemonResponse } from "../interfaces";

interface ClickedProps {
  poke: ClickedPokemonResponse;
}

export default function ClickedCard({ poke }: ClickedProps) {
  return (
    <div className="clicked-card">
      {poke.id} {poke.name} <img src={poke.gif} /> {poke.uniqId}
    </div>
  );
}
