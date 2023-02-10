import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
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

const PokemonDetails = ({ handleToggleTeam, myTeam }: IMyTeam) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<IPokemonDetails>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // STUB: get pokemon details
    const getPokemonDetails = async () => {
      let urlID;
      try {
        setIsLoading(true);

        // STUB: sanity check
        if (pokemon !== undefined) {
          urlID = pokemon.id;
        } else {
          urlID = id;
        }
        let response = await axios.get(`${API_URL}${urlID}`);
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
          isOnTeam: myTeam.includes(data.id) ? true : false,
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

  // STUB: add/remove pokemon from my team, toggle pokemon isOnTeam prop
  const handleClick = () => {
    handleToggleTeam(pokemon?.id);
    setPokemon({ ...pokemon, isOnTeam: !pokemon?.isOnTeam });
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
                {
                  <img
                    src={pokemon.sprite_url}
                    alt={pokemon.name}
                    loading="lazy"
                  />
                }
              </div>
              <div className="card-dis">
                <div className="action-btns">
                  <FontAwesomeIcon
                    icon={faArrowLeftLong}
                    onClick={handleReturn}
                  />
                  <FontAwesomeIcon
                    // STUB: display remove icon if pokemon is on team; else display add icon
                    icon={pokemon.isOnTeam ? faUserMinus : faUserPlus}
                    // STUB: disable button if pokemon is not on team & team is at max capacity
                    className={
                      !pokemon.isOnTeam && myTeam.length === 6
                        ? "disabled-button"
                        : ""
                    }
                    onClick={handleClick}
                  />
                </div>
                <h1>{pokemon.name}</h1>
                <ul>
                  <li>
                    Type:{" "}
                    {pokemon.type?.map((item) => {
                      // STUB: grab name prop nested 2 objects deep
                      const { slot, type } = item;
                      const { name } = type;
                      return (
                        <FontAwesomeIcon
                          key={slot}
                          icon={myIcons[name]}
                          className="active"
                        />
                      );
                    })}
                  </li>
                  <li>
                    Abilities:{" "}
                    {pokemon.abilities?.map((item, i) => {
                      const { ability } = item;
                      const { name } = ability;
                      return <p key={i}>{name || `???`}</p>;
                    })}
                  </li>
                  <li>Weight: {pokemon.weight || `???`}hg</li>
                  <li>Height: {pokemon.height || `???`}dm</li>
                  <li>
                    Base Experience: {pokemon.base_experience || `???`}
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
