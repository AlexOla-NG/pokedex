export interface IHeader {
  getRandomPokemon(): void;
  // setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  getSearchTerm(text: string): void;
}
