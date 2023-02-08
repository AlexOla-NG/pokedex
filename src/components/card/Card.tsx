import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faFire,
  faSkullCrossbones,
  faTint,
  faLeaf,
  faUserMinus,
  faUserPlus,
  faBug,
  faMoon,
  faDragon,
  faWandMagicSparkles,
  faDumbbell,
  faJetFighter,
  faGhost,
  faHillRockslide,
  faIcicles,
  faBrain,
  faHouseCrack,
  faWrench,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import { ICard } from "./ICard";

// TODO: stopped here
// create pokemonDetails page

// TODO: toggle faUserPlus, faUserMinus when pokemon is added/removed from team

const Card = ({ name, type, isOnTeam, sprite_url }: ICard) => {
  // STUB: reference all dice values from font awesome before babel macro build step
  const myIcons = {
    bug: faBug,
    dark: faMoon,
    dragon: faDragon,
    electric: faBolt,
    fairy: faWandMagicSparkles,
    fighting: faDumbbell,
    fire: faFire,
    flying: faJetFighter,
    ghost: faGhost,
    grass: faLeaf,
    ground: faHouseCrack,
    ice: faIcicles,
    normal: faPaw,
    poison: faSkullCrossbones,
    psychic: faBrain,
    rock: faHillRockslide,
    steel: faWrench,
    water: faTint,
  };
  return (
    <motion.div
      className="pokemon"
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500 }}
    >
      {<img src={sprite_url} alt={name} loading="lazy" /> || <Skeleton />}
      <div className="pokemon-details">
        <div className="species-header">
          <h2>{name || <Skeleton />}</h2>
          <h3 className="species-title">Species</h3>
        </div>
        <div className="species">
          {type?.map((item) => {
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
          <FontAwesomeIcon icon={faUserPlus} beatFade />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
