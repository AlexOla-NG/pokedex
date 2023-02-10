import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import { ICard } from "../components/card/ICard";
import HeaderLogo from "../components/header/HeaderLogo";
import { IMyTeam } from "../interface";

const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

const MyTeam = ({ handleToggleTeam, myTeam }: IMyTeam) => {
  const [pokemonList, setPokemonList] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // STUB: fetch pokemon data using id in myTeam array
  useEffect(() => {
    let teamArray: ICard[] = [];

    (async () => {
      setIsLoading(true);

      for (const id of myTeam) {
        try {
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
      }
      setIsLoading(false);
      setPokemonList(teamArray);
    })();
  }, []);

  let output;

  if (pokemonList.length > 0) {
    output = (
      <>
        <h1>My Team</h1>
        <div className="pokemon-list-wrapper">
          {pokemonList.map((pokemon) => {
            return <Card key={pokemon.id} {...pokemon} />;
          })}
        </div>
      </>
    );
  } else {
    output = <p>Nothing to see here boss. Add some pokemons to your team...</p>;
  }

  return (
    <main className="my-team">
      <div className="logo">
        <HeaderLogo />
      </div>

      {isLoading ? <div>Loading...</div> : output}
    </main>
  );
};

export default MyTeam;
