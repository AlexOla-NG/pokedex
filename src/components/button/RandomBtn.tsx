import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { IRandomBtn } from "./interface";

const RandomBtn = ({ getRandomPokemon }: IRandomBtn) => {
  const handleClick = () => {
    getRandomPokemon();
  };

  return (
    <motion.button
      className="button-search"
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500 }}
      onClick={handleClick}
    >
      <div className="button-content">
        Random
        <FontAwesomeIcon icon={faShuffle}></FontAwesomeIcon>
      </div>
    </motion.button>
  );
};

export default RandomBtn;
