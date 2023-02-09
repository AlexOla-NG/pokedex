import { motion } from "framer-motion";
import { ReactComponent as PokeBall } from "../../assets/svg/poke-ball-icon.svg";

const SearchBtn = () => {
  return (
    <motion.button
      className="button-search"
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500 }}
      form="form"
    >
      <div className="button-content">
        Search
        <PokeBall />
      </div>
    </motion.button>
  );
};

export default SearchBtn;
