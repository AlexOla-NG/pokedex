import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { ICard } from "./ICard";
import { myIcons } from "../../shared/utilities";

const Card = ({ id, name, type, isOnTeam, sprite_url }: ICard) => {
  const navigate = useNavigate();

  // STUB: navigate to pokemon details page
  const handleNavigate = () => {
    navigate(`/${id}`);
  };

  return (
    <motion.div
      className="pokemon"
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500 }}
      onClick={handleNavigate}
    >
      <div className="pokemon-img">
        {<img src={sprite_url} alt={name} loading="lazy" />}
      </div>
      <div className="pokemon-details">
        <div className="species-header">
          <h1>{name}</h1>

          <h2 className="species-title">Species</h2>
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
          <FontAwesomeIcon icon={isOnTeam ? faUserMinus : faUserPlus} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
