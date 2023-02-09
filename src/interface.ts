import { ICard } from "./components/card/ICard";

export interface IPokemonDetails extends ICard {
  base_experience?: number;
  abilities?: [];
  height?: number;
  weight?: number;
}

export interface IMyTeam {
  handleToggleTeam(id?: number): void;
  myTeam: number[];
}
