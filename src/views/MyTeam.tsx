import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import { ICard } from "../components/card/ICard";
import HeaderLogo from "../components/header/HeaderLogo";
import { IMyTeam } from "../interface";

const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

// TODO: stopped here
// fix render problem

const MyTeam = ({ handleToggleTeam, myTeam }: IMyTeam) => {
  const [pokemonList, setPokemonList] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let teamArray: ICard[] = [];

    myTeam.forEach(async (id) => {
      try {
        setIsLoading(true);
        let response = await axios.get(`${API_URL}${id}`);
        let data = await response.data;
        teamArray.push({
          id: data.id,
          name: data.name,
          type: data.types,
          sprite_url: `${data.sprites.other["official-artwork"].front_default}`,
          isOnTeam: myTeam.includes(data.id) ? true : false,
        });
      } catch (error) {
        console.clear();
        setIsLoading(false);
        alert(error);
      }
    });
    setIsLoading(false);
    setPokemonList(teamArray);
  }, []);

  return (
    <main className="my-team">
      <div className="logo">
        <HeaderLogo />
      </div>

      {pokemonList.map((pokemon) => {
        return <Card key={pokemon.id} {...pokemon} />;
      })}
      {/* {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="pokemon-list-wrapper">
          {pokemonList.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                name={pokemon?.name}
                type={pokemon?.type}
                sprite_url={pokemon?.sprite_url}
                isOnTeam={pokemon?.isOnTeam}
              />
            );
          })}
        </div>
      )} */}
    </main>
  );
};

export default MyTeam;
