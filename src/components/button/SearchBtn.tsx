import { motion } from "framer-motion";

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
        <img
          src="http://www.purarteadesivos.com.br/wp-content/uploads/2017/04/Pok%C3%A9mon-go.png"
          alt="pokemon ball"
          loading="lazy"
        />
      </div>
    </motion.button>
  );
};

export default SearchBtn;
