import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import HeaderLogo from "../components/header/HeaderLogo";
import { IPokemonDetails } from "../interface";
import { myIcons } from "../shared/utilities";

const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<IPokemonDetails>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // STUB: get pokemon details
    const getPokemonDetails = async () => {
      try {
        setIsLoading(true);
        let response = await axios.get(`${API_URL}${id}`);
        let data = await response.data;
        setIsLoading(false);
        setPokemon({
          id: data.id,
          name: data.name,
          base_experience: data.base_experience,
          abilities: data.abilities,
          height: data.height,
          weight: data.weight,
          sprite_url: `${data.sprites.other["official-artwork"].front_default}`,
          type: data.types,
          isOnTeam: false,
        });
      } catch (error) {
        console.clear();
        setIsLoading(false);
        alert(error);
      }
    };

    getPokemonDetails();
  }, []);

  return (
    <main className="pokemon-details">
      <div className="logo">
        <HeaderLogo />
      </div>
      {isLoading && <div>Loading...</div>}
      {pokemon && (
        <section className="details">
          <div className="container">
            <div className="card">
              <div className="card-img">
                {(
                  <img
                    src={pokemon.sprite_url}
                    alt={pokemon.name}
                    loading="lazy"
                  />
                ) || <Skeleton />}
              </div>
              <div className="card-dis">
                <h1>{pokemon.name || <Skeleton />}</h1>
                <ul>
                  <li>
                    Type:{" "}
                    {pokemon.type?.map((item) => {
                      // STUB: grab name prop nested 2 objects deep
                      const { slot, type } = item;
                      const { name } = type;
                      return (
                        (
                          <FontAwesomeIcon
                            key={slot}
                            icon={myIcons[name]}
                            className="active"
                          />
                        ) || <Skeleton />
                      );
                    })}
                  </li>
                  <li>
                    Ability:{" "}
                    {pokemon.abilities?.map((item) => {
                      // STUB: grab name prop nested 2 objects deep
                      const { ability } = item;
                      const { name } = ability;
                      return <span>{name}</span> || <Skeleton />;
                    })}
                  </li>
                  <li>Weight: {pokemon.weight || <Skeleton />}hectograms</li>
                  <li>Height: {pokemon.height || <Skeleton />}decimeter</li>
                  <li>
                    Base Experience: {pokemon.base_experience || <Skeleton />}
                    EXP
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faUserPlus} beatFade />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default PokemonDetails;
