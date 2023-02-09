import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import MyTeam from "./views/MyTeam";
import PokemonDetails from "./views/PokemonDetails";
import Error from "./views/Error";
import Navbar from "./components/navigation/Navbar";

// TODO: stopped here
// refactor handleToggleTeam...rename to handleToggleTeam
// add functionality to remove pokemon

// STUB: max number of pokemons allowed in a team
const MAX_TEAM_NUM = 6;

const App = () => {
  const [myTeam, setMyTeam] = useState<number[]>([]);

  // STUB: add pokemon id to my team if id not found in my team & if max team num has not been reached
  // if id is in my team, remove pokemon id
  const handleToggleTeam = (id: number) => {
    if (!myTeam.includes(id) && myTeam.length < MAX_TEAM_NUM)
      setMyTeam([...myTeam, id]);

    if (myTeam.includes(id))
      setMyTeam((myTeam) => myTeam.filter((el) => el !== id));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home myTeam={myTeam} handleToggleTeam={handleToggleTeam} />}
        />
        <Route
          path=":id"
          element={
            <PokemonDetails
              myTeam={myTeam}
              handleToggleTeam={handleToggleTeam}
            />
          }
        />
        <Route
          path="my-team"
          element={
            <MyTeam myTeam={myTeam} handleToggleTeam={handleToggleTeam} />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
