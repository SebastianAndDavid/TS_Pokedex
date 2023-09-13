import { PokemonResponse } from "../interfaces";

interface ClickedProps {
  poke: PokemonResponse;
}

export default function ClickedCard({ poke }: ClickedProps) {
  return (
    <div className="clicked-card">
      {poke.id} {poke.name}
    </div>
  );
}
