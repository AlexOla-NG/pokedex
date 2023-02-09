import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import { ICard } from "./ICard";
import { myIcons } from "../../shared/utilities";

// TODO: stopped here
// style card, make it as responsive as pokemondetails container

// TODO: toggle faUserPlus, faUserMinus when pokemon is added/removed from team

const Card = ({ id, name, type, isOnTeam, sprite_url }: ICard) => {
  const navigate = useNavigate();

  // STUB: navigate to pokemon details page
  const handleNavigate = () => {
    navigate(`${id}`);
  };
  return (
    <div className="container">
      <motion.div
        className="pokemon card"
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <div className="card-img">
          {<img src={sprite_url} alt={name} loading="lazy" /> || <Skeleton />}
        </div>
        <div className="pokemon-details">
          <div className="species-header">
            <h2 onClick={handleNavigate}>{name || <Skeleton />}</h2>

            <h3 className="species-title">Species</h3>
          </div>
          <div className="species">
            {type?.map((item) => {
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
            <FontAwesomeIcon icon={faUserPlus} beatFade />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
