import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import MyTeam from "./views/MyTeam";
import PokemonDetails from "./views/PokemonDetails";
import Error from "./views/Error";
import Navbar from "./components/navigation/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<PokemonDetails />} />
        <Route path="my-team" element={<MyTeam />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
