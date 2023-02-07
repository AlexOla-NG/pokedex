import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import MyTeam from "./views/MyTeam";
import PokemonDetails from "./views/PokemonDetails";
import Error from "./views/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<PokemonDetails />} />
      <Route path="my-team" element={<MyTeam />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
