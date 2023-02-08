import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faTint,
  faLeaf,
  faUserMinus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

// TODO: toggle faUserPlus, faUserMinus when pokemon is added/removed from team

const Card = () => {
  return (
    <motion.div
      className="pokemon"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src="https://i.pinimg.com/originals/79/d9/7c/79d97cd68801eb29a4a5a33e208fb2ff.jpg"
        alt=""
        loading="lazy"
      />
      <div className="pokemon-details">
        <div className="species-header">
          <h2>Charmander</h2>
          <h3 className="species-title">Species</h3>
        </div>
        <div className="species">
          <FontAwesomeIcon icon={faBolt} className="active"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTint}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
