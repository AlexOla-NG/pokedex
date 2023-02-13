import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import MyTeam from "./views/MyTeam";
import PokemonDetails from "./views/PokemonDetails";
import Navbar from "./components/navigation/Navbar";

// STUB: max number of pokemons allowed in a team
const MAX_TEAM_NUM = 6;

const App = () => {
  // STUB: get my team details from local storage if it exists; else set to empty array
  const [myTeam, setMyTeam] = useState<number[]>(
    JSON.parse(localStorage.getItem("my_team") as string) || []
  );

  const isFirstRender = useRef(true);

  // STUB: update localstorage whenever myTeam state value changes
  // NOTE: this useeffect won't run on first render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // toggle flag after first render/mounting
      return;
    }
    saveToLocalStorage(); // do something after state has updated
  }, [myTeam]);

  // STUB: add pokemon id to my team if id not found in my team & if max team num has not been reached;
  // else, if id is in my team, remove pokemon id
  const handleToggleTeam = (id: number) => {
    if (!myTeam.includes(id) && myTeam.length < MAX_TEAM_NUM) {
      setMyTeam([...myTeam, id]);
    }

    if (myTeam.includes(id)) {
      setMyTeam((myTeam) => myTeam.filter((el) => el !== id));
    }
  };

  // STUB: save my team to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem("my_team", JSON.stringify(myTeam));
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
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </>
  );
};

export default App;
