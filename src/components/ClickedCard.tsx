import { PokemonResponse } from "../interfaces";

interface ClickedProps {
  poke: PokemonResponse;
}

export default function ClickedCard(props: ClickedProps) {
  return (
    <div className="clicked-card">
      {props.poke.id} {props.poke.name}
    </div>
  );
}
