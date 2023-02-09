import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMinus,
  faUserPlus,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import HeaderLogo from "../components/header/HeaderLogo";
import { IMyTeam, IPokemonDetails } from "../interface";
import { myIcons } from "../shared/utilities";

const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

const PokemonDetails = ({ handleAddPokemon }: IMyTeam) => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  // STUB: go to previous page
  const handleReturn = () => {
    navigate(-1);
  };

  // STUB: add pokemon to my team, toggle isOnTeam
  const handleClick = () => {
    handleAddPokemon(pokemon?.id);
    // setPokemon({ ...pokemon, isOnTeam: !pokemon?.isOnTeam });
  };

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
                <div className="action-btns">
                  <FontAwesomeIcon
                    icon={faArrowLeftLong}
                    onClick={handleReturn}
                  />
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    // icon={pokemon.isOnTeam ? faUserMinus : faUserPlus}
                    onClick={handleClick}
                    beatFade
                  />
                </div>
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
                    Abilities:{" "}
                    {pokemon.abilities?.map((item, i) => {
                      // STUB: grab name prop nested 2 objects deep
                      const { ability } = item;
                      const { name } = ability;
                      return <p key={i}>{name}</p> || <Skeleton />;
                    })}
                  </li>
                  <li>Weight: {pokemon.weight || <Skeleton />}hg</li>
                  <li>Height: {pokemon.height || <Skeleton />}dm</li>
                  <li>
                    Base Experience: {pokemon.base_experience || <Skeleton />}
                    EXP
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
