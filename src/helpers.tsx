const TOTAL_NUM_OF_POKEMON = 1007;

// STUB: return random number between 1 & 1008
const randomNum = () => {
  return Math.ceil(Math.random() * TOTAL_NUM_OF_POKEMON);
};

export { randomNum };
