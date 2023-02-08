import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Card from "../components/card/Card";
import { ICard } from "../components/card/ICard";
import Header from "../components/header/Header";
import { randomNum } from "../helpers";

const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [pokemon, setPokemon] = useState<ICard>();
  const [isLoading, setIsLoading] = useState(false);

  const isFirstRender = useRef(true);

  useEffect(() => {
    // STUB: do something after state has updated
    if (isFirstRender.current) {
      isFirstRender.current = false; // toggle flag after first render/mounting
      return;
    }

    // STUB: only getSearchPokemon if searchInput is not empty
    if (searchInput.length > 0) getSearchPokemon();
  }, [searchInput]);

  // STUB: return random pokemon
  const getRandomPokemon = async () => {
    let response = await axios.get(`${API_URL}${randomNum()}`);
    let data = await response.data;
    setPokemon({
      id: data.id,
      name: data.name,
      type: data.types,
      sprite_url: data.sprites.front_default,
      isOnTeam: false,
    });
  };

  // STUB: return pokemon using searchInput
  const getSearchPokemon = async () => {
    try {
      setIsLoading(true);
      let response = await axios.get(`${API_URL}${searchInput}`);
      let data = await response.data;
      setIsLoading(false);
      setPokemon({
        id: data.id,
        name: data.name,
        type: data.types,
        sprite_url: data.sprites.front_default,
        isOnTeam: false,
      });
    } catch (error) {
      console.clear();
      setIsLoading(false);
      alert(error);
    }
  };

  // STUB: set searchInput
  const getSearchTerm = (text: string) => {
    setSearchInput(text);
  };

  return (
    <main>
      <Header
        getSearchTerm={getSearchTerm}
        getRandomPokemon={getRandomPokemon}
      />
      {isLoading && <div>Loading...</div>}
      {pokemon && (
        <div className="random-pokemon-wrapper">
          <Card
            name={pokemon?.name}
            type={pokemon?.type}
            sprite_url={pokemon?.sprite_url}
            isOnTeam={pokemon?.isOnTeam}
          />
        </div>
      )}
    </main>
  );
};

export default Home;
